export default function Text({ title, value }: { title: string, value: string | 'number' }) {
    return <div className="cursor-default">
        <h1 className='font-semibold font-montserrat text-slate-800 text-sm'>{title}</h1>
        <h1 className='font-light font-montserrat text-sky-600'>{value}</h1>
    </div>
}