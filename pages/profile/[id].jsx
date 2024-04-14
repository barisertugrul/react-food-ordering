import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaKey } from 'react-icons/fa'
import Account from '../../components/profile/Account'
import Password from '../../components/profile/Password'
import Order from '../../components/profile/Order'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Reservation from '../../components/profile/Reservation'
import { toast } from 'react-toastify'

const Profile = ({ user }) => {
    const { data: session } = useSession()
    const [tabs, setTabs] = useState(0)
    const { push } = useRouter()
    const [file, setFile] = useState()
    const defaultUserImg = "/images/defaultUser.jpg"
    const [imageSrc, setImageSrc] = useState()
    
    const handleSignOut = () => {
        try {
            if(confirm("Are you sure want to sign out?")){
                signOut({ redirect: false })
                !session && push("/auth/login")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      if (!session) {
        push("/auth/login")
      }
    }, [session, push])

    useEffect(() => {
      if (user?.avatar) {
        setImageSrc(user.avatar)
      }
    }, [user])

    const handleOnChange = async (changeEvent) => {
        const reader = new FileReader()
        reader.onload = function(onLoadEvent){
            setImageSrc(onLoadEvent.target.result)
            setFile(changeEvent.target.files[0])
        }

        reader.readAsDataURL(changeEvent.target.files[0])
        
        const data = new FormData()
        data.append("file", changeEvent.target.files[0])
        data.append("upload_preset", "food-ordering")

        try {
            const uploadRes = await axios.post(
                `${process.env.NEXT_PUBLIC_CLOUDINARY_API_URL}/image/upload/`, data
            )

            const { url } = uploadRes.data

            const updatedUser = {
                avatar: url,
            }

            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, updatedUser)

            if(res.status === 200){
                toast.success("Your avatar updated successfully!")
            }

        } catch (error) {
            console.log(error)
        }
    }
    

  return (
    <div className='flex px-10 lg:min-h-[calc(100vh_-_433px)] md:flex-row flex-col md:mb-0 mb-10'>
        <div className='md:w-64 w-100 mb-5 flex-shrink-0'>
            <div className='relative flex flex-col items-center px-10 py-5 border border-b-0'>
                
                <label className="flex flex-col gap-2 items-center cursor-pointer" title='Click to change your avatar.'>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleOnChange}
                        className="hidden"
                        />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image
                        src={imageSrc ? imageSrc : defaultUserImg}
                        alt='' width={100}
                        height={100}
                        className='rounded-full'
                    />
                    {!imageSrc && <span className="full-width text-xs"><a href="https://www.freepik.com/free-vector/basic-user-circle-multiple-styles_168221779.htm#query=default%20user&position=36&from_view=keyword&track=ais&uuid=a45ba0ce-5fea-4b3a-af77-d2b91d122f85">Image by juicy_fish</a> on Freepik</span>}
                </label>
                <span className='font-bold text-xl mt-1'>{ user.fullName }</span>
            </div>
            <ul className='font-semibold'>
                <li className={`profile-tab-link ${tabs === 0 && "bg-primary text-white"}`} onClick={() => setTabs(0)}>
                    <i className='fa fa-home'></i>
                    <button className='ml-2'>Account</button>
                </li>
                <li className={`flex flex-row profile-tab-link border-t-0 ${tabs === 1 && "bg-primary text-white"}`} onClick={() => setTabs(1)}>
                    <FaKey className='mt-1' /> {/* Farklı bir gösterim örneği için */}
                    <button className='ml-2'>Password</button>
                </li>
                <li className={`profile-tab-link border-t-0 ${tabs === 2 && "bg-primary text-white"}`} onClick={() => setTabs(2)}>
                    <i className='fa fa-shopping-bag'></i>
                    <button className='ml-2'>My Orders</button>
                </li>
                <li className={`profile-tab-link border-t-0 ${tabs === 3 && "bg-primary text-white"}`} onClick={() => setTabs(3)}>
                    <i className='fa fa-calendar-check'></i>
                    <button className='ml-2'>My Bookings</button>
                </li>
                <li className={`profile-tab-link border-t-0`} onClick={handleSignOut}>
                    <i className='fa fa-sign-out'></i>
                    <button className='ml-2'>Logout</button>
                </li>
            </ul>
        </div>
        { tabs === 0 && <Account user={user} />  }
        { tabs === 1 && <Password user={user} />  }
        { tabs === 2 && <Order /> }
        { tabs === 3 && <Reservation user={user} /> }
    </div>
  )
}

export async function getServerSideProps({req, params}){
    //const session = await getSession( { req })

    const user = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`)

    return {
        props: {
            user: user ? user.data : null
        },
    }
}

export default Profile