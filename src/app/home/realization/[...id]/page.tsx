"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useGetDetailRealization } from "@/hooks/react-query/useGetDetailRealization";
import { formatRupiah } from "@/helper/currency";
import { formatTime } from "@/helper/time";

export default function Page() {
  const params = useParams();
  const detailRealization = useGetDetailRealization(params.id as string);
  return (
    <div>
      <div className="border  bg-white px-7 py-10 full rounded-sm shodow-md mt-[2-vh]">
        <div className="w-full flex flex-1 font-bold text-lg">
          Detail Transaksi
        </div>
        <div className="w-full mt-7">
          <div className="relative overflow-x-auto mt-10">
            {detailRealization.isLoading ? (
              <div className="flex justify-center font-semibold">
                Memuat Data...
              </div>
            ) : 
            detailRealization?.data?.data?.length>0  ?(
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Ref
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Tanggal Transaksi
                    </th>

                    <th scope="col" className="px-6 py-3 text-center">
                      Nilai
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Keterangan
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {detailRealization.data?.data.map((e:any, i:any)=>(
                        <tr key={i}>
                            <td className="px-6 py-4 text-center">{i + 1}</td>
                            <td className="px-6 py-4 text-right">
                                {e.reference}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {formatTime(e.transaction_date)}
                            </td>
                            <td className="px-6 py-4 text-right">
                                {formatRupiah(e.amount, ",")}
                            </td>
                            <td className="px-6 py-4 text-left">
                                {e.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
              </table>
            ):(<div className="flex justify-center font-semibold">
               Transaksi tidak ditemukan
              </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
