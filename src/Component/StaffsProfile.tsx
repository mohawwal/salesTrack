import { useParams } from "react-router-dom"
import profileImg from "../assets/images/upImg.jpg"

export const StaffsProfile = () => {
    const {id} = useParams()
    
  return (
    <div>
        <div className="my-5 w-[95%] mx-auto flex gap-4">
            <div className="w-[100px] h-[100px]">
                <img src={profileImg} alt="profile" className="w-[100%] h-[100%] object-cover rounded-[100%]" />
                
            </div>
            <div className="">
                    <h1 className="text-[30px] font-bold">{id}</h1>
                </div>
        </div>
    </div>
  )
}
