export type SelectAttributes = {
    value: string | number | null,
    label: string | number | null
}

export type DetailOfActivityAttributes = {
    uuid: string;
    uraian: string;
    id_satuan: number;
    vol: number;
    harga_satuan: number;
    metode_pencairan: string;
    dari: number;
    sampai: number;
    total: number;
    no_sub_kegiatan: string;
    no_kegiatan: string;
    tahun_ajar: string;
    no_pendapatan: string;
    sharing_program: boolean;
    total_realisasi: number
}

export type DisbursementOfFundAttributes = {
    uuid: string;
    amount: number;
    status: boolean;
    withdraw: boolean;
    accounting_year: string;
    month_index: number;
    sharing_program: boolean;
    recipient: string | null;
    ptk_id: string | null;
    activity_id: string;
    reference_of_jurnal: string | null;
    rincian_kegiatan: DetailOfActivityAttributes;
}

export type PtkAttributes = {
    uuid: string;
    nupy: string;
    nama: string;
    tempat_lahir: string;
    tanggal_lahir: Date;
    alamat: string;
    kecamatan: string;
    kabupaten: string;
    provinsi: string;
    gender: string;
    no_hp: string;
    status_pernikahan: string;
    pendidikan_terakhir: string;
    gelar: string;
    gol_darah: string;
}

export type AccountAttributes = {
    uuid: string;
    name: string;
    group_account: number;
    group_account_label: number;
    account_number: string;
    activity_id: string;
}

export type JournalReferenceNumberAttributes ={
    uuid:string;
    number:number;
    accounting_year:string
}