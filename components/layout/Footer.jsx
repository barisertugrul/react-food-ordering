import { useEffect, useState } from "react"
import Title from "../ui/Title"
import axios from "axios"

const Footer = () => {

  const [footer, setFooter] = useState([])
  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        )
        setFooter(res.data[0])
      } catch (error) {
        console.log(error)
      }
    }
    getFooter()
  }, [])
  
  const copyright = (html) => {
    return <p dangerouslySetInnerHTML={{__html: html}} />;
  }
  
  return (
    <div className="footer">
      <div className="container mx-auto">
        <div className="widget-container">
          <div className="md:flex-1 w-full">
            <Title className="text-[30px] mb-4">Contact Us</Title>
            <div className="flex flex-col gap-y-[5px]">
              <div className="">
                <a href={footer?.location} target="_blank" rel="noreferrer">
                  <i className="fa fa-map-marker-alt"></i>
                  <span className="inline-block ml-2">Location</span>
                </a>
              </div>
              <div className="">
                <a href={`tel:${footer?.phoneNumber}`}>
                  <i className="fa fa-phone"></i>
                  <span className="inline-block ml-2">Call +{footer?.phoneNumber}</span>
                </a>
              </div>
              <div className="">
                <a href={`mailto:${footer?.email}`}>
                  <i className="fa fa-envelope"></i>
                  <span className="inline-block ml-2">{footer?.email}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="md:flex-1 w-full">
            <Title className="text-[30px] mb-4">Feane</Title>
            <div className="flex flex-col gap-y-[5px]">
              <div className="">
                <p>{footer?.desc}</p>
                <div className="footer-social">
                  {footer?.socialMedia?.map((item) => (
                    <a key={item?._id} href={item?.link} target="_blank" rel="noreferrer">
                      <i className={item?.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1 w-full">
            <Title className="text-[30px] mb-4">Opening Hours</Title>
            <div className="flex flex-col gap-y-[5px]">
              <div className="">
                <span>{footer?.openingHours?.day}</span>
              </div>
              <div className="">
                  <span>{footer?.openingHours?.time}</span>
              </div>
            </div>
          </div>
          
        </div>
        <div className="text-center mt-6">
          {copyright(footer?.copyright)}
        </div>
      </div>
    </div>
  )
}

export default Footer