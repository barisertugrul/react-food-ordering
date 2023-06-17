import Image from "next/image"
import Title from "./ui/Title"
import { MdShoppingCart } from "react-icons/md"

const Campaigns = () => {

    const CampaignItem = () => {
        return (
            <div className="bg-secondary flex flex-1 rounded-md py-5 px-[15px] items-center gap-x-4">
                <div className="relative w-32 h-32  border-[5px] border-primary rounded-full overflow-hidden ">
                    <Image
                        src="/images/o1.jpg" className="hover:scale-105 transition-all"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 100vw,
                        100vw"
                    />
                </div>
                <div className="text-white">
                    <Title className="text-2xl">Tasty Thurdays</Title>
                    <div className="font-dancing my-1">
                        <span className="text-[40px]">20%</span>
                        <span className="text-sm inline-block ml-1">Off</span>
                    </div>
                    <button className="btn-primary flex items-center gap-x-2 text-sm">Order Now <MdShoppingCart size={20} /></button>
                </div>
            </div>
        )
    }
  return (
    <div className="flex flex-wrap justify-between container mx-auto pt-11 pb-20 gap-6">
        <CampaignItem />
        <CampaignItem />
    </div>
  )
}

export default Campaigns