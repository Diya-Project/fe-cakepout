import React from 'react'

type TableAttributes = {
    head: string[],
    children: React.ReactNode,
}

function Table({ head, children }: TableAttributes) {
    return (
        <div className='overflow-y-auto h-[90%] scrollbar-hide'>
            <table className="w-full text-sm text-left text-gray-700 ">
                <thead className="text-xs text-slate-100 uppercase bg-sky-700 sticky top-0">
                    <tr>
                        {head.map((d: any, id: number) => (
                            <th key={id} scope="col" className="px-6 py-3">{d}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default Table