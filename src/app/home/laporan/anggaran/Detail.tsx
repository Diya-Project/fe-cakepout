import { currency } from '@/helper/currency';
import { DisbursementOfFundAttributes } from '@/type'
import { MdOutlineDescription } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import Header from '@/components/custom/Header';
import DetailCard from '@/components/custom/DetailCard';
import Button from '@/components/custom/Button';


type DetailAttributes = {
    anggaran?: DisbursementOfFundAttributes;
    confirm: (e: string | number | undefined) => void;
}


export default function Detail({ anggaran, confirm }: DetailAttributes) {
    const listDetail = [
        { icon: <MdOutlineDescription className='w-20 h-20 text-sky-800 my-auto' />, title: 'Uraian', value: anggaran?.rincian_kegiatan?.uraian || '-' },
        { icon: <IoCalendarNumberOutline className='w-20 h-20 text-sky-800 my-auto' />, title: 'Tahun Ajar', value: anggaran?.accounting_year || '-' },
        { icon: <TbMoneybag className='w-20 h-20 text-sky-800 my-auto' />, title: 'Total Anggaran', value: anggaran?.rincian_kegiatan?.total ? currency(anggaran?.rincian_kegiatan?.total) : currency(0) },
        { icon: <BsGraphUpArrow className='w-20 h-20 text-sky-800 my-auto' />, title: 'Total Realisasi', value: anggaran?.rincian_kegiatan?.total_realisasi ? currency(anggaran?.rincian_kegiatan?.total_realisasi) : currency(0) },
        { icon: <GiMoneyStack className='w-20 h-20 text-sky-800 my-auto' />, title: 'Permintaan', value: anggaran?.amount ? currency(anggaran?.amount) : currency(0) },
        { icon: <FaUserGroup className='w-20 h-20 text-sky-800 my-auto' />, title: 'Program Bersama', value: anggaran?.sharing_program ? "Program Bersama" : "-" },
    ]
    return (
        <div className='md:w-[70%] w-[100%] bg-white'>
            <Header title='Detail Anggaran' />
            <div className='h-[80%] py-3 flex flex-wrap md:gap-5 gap-3'>
                {listDetail.map((e, i) => (
                    <DetailCard key={i} icon={e.icon} title={e.title} value={e.value} />
                ))}
            </div>
            <div className='flex justify-end borderrounded-md shadow-md'>
                <Button title='Setujui' click={() => confirm(anggaran?.uuid)} value={anggaran?.uuid} />
            </div>
        </div>
    )
}
