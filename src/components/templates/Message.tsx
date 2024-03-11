// import { LuBadgeInfo } from 'react-icons/lu';

type MessageAttributes = {
    show: boolean;
    message: string
}

export default function Message({ message, show }: MessageAttributes) {
    return (
        <div className={`fixed top-28  md:w-[30vw] border border-sky-700 bg-white rounded-md z-50 p-2 flex flex-col justify-between transition-all ease-in-out duration-300 ${show ? 'right-4 ' : '-right-[45vw]'}`}>
            <div className='flex w-[100%] gap-3 items-center'>
                {/* <LuBadgeInfo className='md:w-7 md:h-7 w-5 h-5 text-slate-700' /> */}
                <h4 className='text-slate-700 font-montserrat font-semibold md:text-base text-xs'>{message}</h4>
            </div>
        </div>
    )
}
