export type SelectAttributes = {
    value: string | number | null,
    label: string | number | null
}

export type InputType = 'text' | 'number' | 'password' | 'date' | 'datetime-local' | 'radio' | 'checkbox'

export type AuthenticationAttributes = {
    username: string | undefined;
    password: string | undefined;
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
    total_realisasi: number;
    list_kegiatan: ActivityAttributes;
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
    account_number: string;
    activity_id: string;
    detail_of_activity: DetailOfActivityAttributes;
    group_account: GroupAccountAttributes;
}

export type JournalReferenceNumberAttributes = {
    uuid: string;
    number: number;
    accounting_year: string
}

export type GroupAccountAttributes = {
    uuid: string;
    group_account: number;
    group_account_label: number;
    name: string;
}

export type ProgramAttributes = {
    no_program: string;
    item_program: string;
    modifiable: boolean;
    no_lembaga: number;
    list_lembaga: InstitutionAttributes;
}

export type InstitutionAttributes = {
    no_lembaga: number;
    nama_lembaga: string;
}

export type ComponentAttributes = {
    no_komponen: string;
    item_komponen: string;
    modifiable: boolean;
    no_program: string;
    list_program: ProgramAttributes;
}

type statusActivity = 'Ditunda' | 'Disetujui' | 'Ditolak'

export type ActivityAttributes = {
    no_kegiatan: string;
    item_kegiatan: string;
    status: statusActivity;
    no_komponen: string;
    continue: boolean;
    list_komponen: ComponentAttributes;

}