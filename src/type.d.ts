

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

export type SharingProgramsAttributes = {
    uuid: string;
    name: string;
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
    sharing_programs: SharingProgramsAttributes;
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

export type InstitutionAttributes = {
    no_lembaga: number;
    nama_lembaga: string;
}

export type JournalAttributes = {
    uuid: string,
    reference: string;
    transaction_date: Date;
    amount: number;
    status: string;
    accounting_year: string;
    account_id: string;
    account?: AccountAttributes;
    description: string;
}

export type AccountingYearAttributes = {
    tahun: string;
    active: boolean;
}

export type MonthlyAccountCalculationAttributes = {
    uuid: string;
    month_index: number;
    accounting_year: string;
    total: number;
    account_id: string;
    open: boolean;
    account?: AccountAttributes;

}

export type AccountsBalancing = {
    account_number: string;
    name: string;
    uuid: string;
    monthly_account_calculations: MonthlyAccountCalculationAttributes[]
}

export type BalancingAttributes = {
    account: Array<AccountsBalancing>,
    group_account: string;
    group_account_label: string;
    name: string;

}

export type AccountBalancingBeginingAttributes = {
    harta: Array<BalancingAttributes>
    kewajiban: Array<BalancingAttributes>
    modal: Array<BalancingAttributes>
}

export type GroupingDisbursementOfFund = {
    uuid: string;
    amount: number;
    sharing_program_id: string | null;
    sharing_program_name: string | null;
    status: boolean;
    withdraw: boolean;
    accounting_year: string;
    ptk_id: string | null;
    receipient: string | null;
    reference_of_journal: string | null;
    uraian: string;
    no_kegiatan: string;
    activity: DisbursementOfFundAttributes[]
}


export type GroupBalanceReportAttributes = {
    group_account_name: string
    finalAmount: number;
    accounts: Array<Omit<AccountAttributes, 'group_account_id' | 'activity_id'> & { amount: number }>
}

export type AmountAndGroupAttributes = {
    finalAmount: number;
    group: GroupBalanceReportAttributes[]
}


export type BalanceReportAttributes = {
    harta: AmountAndGroupAttributes
    kewajiban: AmountAndGroupAttributes;
    modal: AmountAndGroupAttributes;
    labaRugi: number;
}