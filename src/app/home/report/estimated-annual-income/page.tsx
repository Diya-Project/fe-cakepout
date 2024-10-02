"use client";

import { formatRupiah } from "@/helper/currency";
import { useGetEstimatedAnnualIncome } from "@/hooks/react-query/useGetEstimatedAnnualIncome";

export default function Page() {
  const estimatedAnnualIncome = useGetEstimatedAnnualIncome();
  return (
    <div className="border  bg-white px-7 py-10 full flex rounded-sm shodow-md mt-[2-vh]">
      {!estimatedAnnualIncome.isLoading ? (
        estimatedAnnualIncome?.data?.data && (
          <div className="w-full flex">
            <div className="w-full  mr-2">
              <div className="w-full flex flex-1 font-bold text-lg mb-3">
                Realisasi Pendapatan vs Perkiraan Pendapatan
              </div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Lembaga
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Perkiraan-UP
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Perkiraan-Spp
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Realisasi-UP
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Realisasi-SPP
                      </th>
                      <th scope="col" className="px-6 py-3">
                        spp(%)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Subsidi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {estimatedAnnualIncome?.data?.data?.map(
                      (e: any, i: any) => (
                        <tr key={i} className="border-b">
                          <td className="px-6 py-4">{e.name}</td>
                          <td className="px-6 py-4">
                            {formatRupiah(e.estimated_up, ",")}
                          </td>
                          <td className="px-6 py-4">
                            {formatRupiah(e.estimated_spp, ",")}
                          </td>
                          <td className="px-6 py-4">
                            {formatRupiah(e.realization_up, ",")}
                          </td>
                          <td className="px-6 py-4">
                            {formatRupiah(e.realization_spp, ",")}
                          </td>
                          <td className="px-6 py-4">
                            {e.persentation_realization_spp}%
                          </td>
                          <td className="px-6 py-4">
                            {
                                e.subsidy.map((x:any, i:any)=>(
                                    <div key={i}>
                                        <div className="bg-red-500 text-white p-1 rounded-md">{x.name}</div>
                                        <ul>
                                            <li>Spp: {formatRupiah(x.spp,",")}</li>    
                                            <li>Up: {formatRupiah(x.up,",")}</li>    
                                        </ul>
                                    </div>
                                ))
                            }
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}
