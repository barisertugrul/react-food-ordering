import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaKey } from 'react-icons/fa'
import Account from '../../components/profile/Account'
import Password from '../../components/profile/Password'
import Order from '../../components/profile/Order'
import { getSession, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Profile = ({ user }) => {
    const { data: session } = useSession()
    const [tabs, setTabs] = useState(0)
    const { push } = useRouter()

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
    

  return (
    <div className='flex px-10 lg:min-h-[calc(100vh_-_433px)] md:flex-row flex-col md:mb-0 mb-10'>
        <div className='md:w-64 w-100 mb-5 flex-shrink-0'>
            <div className='relative flex flex-col items-center px-10 py-5 border border-b-0'>
                <Image
                    src={user.image ? user.image : "/images/client1.jpg"}
                    alt='' width={100}
                    height={100}
                    className='rounded-full'
                />
                <span className='font-bold text-xl mt-1'>{ user.fullName }</span>
            </div>
            <ul className='font-semibold'>
                <li className={`profile-tab-link ${tabs === 0 && "bg-primary text-white"}`} onClick={() => setTabs(0)}>
                    <i className='fa fa-home'></i>
                    <button className='ml-2'>Account</button>
                </li>
                <li className={`flex flex-row profile-tab-link ${tabs === 1 && "bg-primary text-white"}`} onClick={() => setTabs(1)}>
                    <FaKey className='mt-1' /> {/* Farklı bir gösterim örneği için */}
                    <button className='ml-2'>Password</button>
                </li>
                <li className={`profile-tab-link ${tabs === 2 && "bg-primary text-white"}`} onClick={() => setTabs(2)}>
                    <i className='fa fa-shopping-bag'></i>
                    <button className='ml-2'>Orders</button>
                </li>
                <li className={`profile-tab-link`} onClick={handleSignOut}>
                    <i className='fa fa-sign-out'></i>
                    <button className='ml-2'>Logout</button>
                </li>
            </ul>
        </div>
        { tabs === 0 && <Account user={user} />  }
        { tabs === 1 && <Password user={user} />  }
        { tabs === 2 && <Order /> }
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