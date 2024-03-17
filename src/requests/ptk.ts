import ApiPtk from "@/app/api/fetch/ptk"
import { AxiosResponse } from "axios";

export const getAllPtk = async (): Promise<AxiosResponse> => {
    const res = await ApiPtk.getAllPtk()
    return res;
}

