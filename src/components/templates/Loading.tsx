import Image from "next/image"
import loadingImage from "@/assets/icons/loading.png"

type LoadingAttributes = {
    show: boolean
}

export default function Loading({ show }: LoadingAttributes) {
    return (
        <div className={`w-[100%] h-[90%] mt-[4%] absolute top-0 left-0 p-4  justify-center items-center z-10 ${show ? 'flex' : 'hidden'}`}>
            <Image src={loadingImage} alt="" className='w-12 h-12 animate-spin' />
        </div>
    )
}
