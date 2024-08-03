

export type SelectAttributes = {
    value: string | number | null,
    label: string | number | null
}

export type InputType = 'text' | 'number' | 'password' | 'date' | 'datetime-local' | 'radio' | 'checkbox'

export type AuthenticationAttributes = {
    username: string;
    password: string;
    system: string;
}

export type DetailOfActivityAttributes = {
    id: string;
    description: string;
    unit_id: number;
    vol: number;
    unit_price: number;
    thawing_motode: string;
    from: number;
    until: number;
    total: number;
    sub_activity_id: string;
    activity_id: string;
    academic_year: string;
    income_id: string;
    sharing_program: boolean;
    post: number;
    activity: ActivityAttributes;
}

export type SharingProgramsAttributes = {
    id: string;
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
    asset: boolean;
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
    id: string;
    program_no: string;
    item: string;
    modifable: boolean;
    institution_no: number;
    list_lembaga: InstitutionAttributes;
}

export type InstitutionAttributes = {
    id: number;
    name: string;
}

export type ComponentAttributes = {
    id: string;
    component_no: string;
    item: string;
    modifable: boolean;
    program_id: string;
    list_program: ProgramAttributes;
}

type statusActivity = 'Ditunda' | 'Disetujui' | 'Ditolak'

export type ActivityAttributes = {
    uuid: string;
    activity_no: number;
    name: string;
    status: number
    component_id: string;
    institution_no: number;
    academic_year: string;
    continue: boolean;
    sub_activity?: Array<SubActivityAttributes>
    detail_of_activity?: Array<DetailOfActivityAttributes>
    weight: number,
    list_komponen?: ComponentAttributes;
    institution?: InstitutionAttributes

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

export type LedgerAttributes = {
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
    ledger: LedgerAttributes[]
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
    id: string;
    amount: number;
    sharing_program_id: string | null;
    sharing_program_name: string | null;
    status: number;
    withdraw: boolean;
    accounting_year: string;
    ptk_id: string | null;
    receipient: string | null;
    reference_of_journal: string | null;
    uraian: string;
    detail_of_activity_id: string;
    detail_of_activities?: DetailOfActivityAttributes[];
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

export type LedgerTable = {
    total: number;
    month_index: number;
    account: {
        name: string;
        account_number: string;
        uuid: string;
    }
}

export type DetailLedger = {
    reference: string;
    transaction_date: Date;
    amount: number;
    status: string
}

export type AutomationAttributes = {
    uuid: string;
    uuid_account_from: string | null
    uuid_account_to: string | null
    role: string
}