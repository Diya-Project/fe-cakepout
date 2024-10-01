"use client";

import React, { ReactNode, useState } from "react";
import { useGetInstitution } from "@/hooks/react-query/useGetInstitution";
import Select from "react-select";
import { useGetRealization } from "@/hooks/react-query/useGetRealization";
import { formatRupiah } from "@/helper/currency";

const customStyles = {
  container: (provided:any) => ({
    ...provided,
    width: "95%", // Set the width here (in px or %)
  }),
};

export default function Page(): ReactNode {
  const [insitution_, setInstitution_] = useState<any>();

  const institution = useGetInstitution();
  const realization = useGetRealization(insitution_);
  console.log(realization.data);

  return (
    <div className="border  bg-white px-7 py-10 full rounded-sm shodow-md mt-[2-vh]">
      <div className="flex bg-blue-50">
      <Select
        styles={customStyles}
        options={institution?.data?.data}
        defaultValue={{ label: "SEMUA", value: 0 }}
        onChange={(e: any) => {
          setInstitution_(e.value);
        }}
      />
      <div className="flex flex-1 justify-end items-center font-semibold">
        90%
      </div>
      </div>
      {realization.isLoading ? (
        <div className="w-full flex justify-center p-10">
          <h1 className="">Memuat Data...</h1>
        </div> 
      ) : (
        <div className="relative overflow-x-auto mt-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Anggaran
                </th>
                <th scope="col" className="px-6 py-3">
                  Realisasi
                </th>
                <th scope="col" className="px-6 py-3">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody>
              {realization.data?.data?.map((e: any, i: any) => (
                <tr key={i}>
                  <td className="px-6 py-4 text-center">{i + 1}</td>
                  <td className="px-6 py-4 text-left">
                    {e.name.toUpperCase()}
                  </td>
                  <td className="px-6 py-4 text-right">{formatRupiah(e.total_activity,",")}</td>
                  <td className="px-6 py-4 text-right">
                    {formatRupiah(e.total_realization,",")}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{width: `${e.achievement}`}}
                      ></div>
                    </div>{e.achievement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
