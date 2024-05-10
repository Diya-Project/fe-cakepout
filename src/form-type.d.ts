import { AccountBalancingBeginingAttributes } from "./type";


type AddAccountAttributes = {
    activity_id?: string | null | undefined;
    group_account_name?: string | undefined;
    group_account: number;
    group_account_label: number;
    name: string;
}

type EditAccountAttributes = {
    name: string
}

type StatusJournalAttributes = 'K' | 'D'

type ToAccountJournalAttributes = {
    account_id: string;
    amount: number|string;
}

type AddJournalAttributes = {
    from_account: string;
    transaction_date: string;
    description: string;
    to_account?: Array<ToAccountJournalAttributes>
}

type AddMonthlyAccountCalculation = {
    month_index: number;
    accounting_year: string;
    account_id: string;
    open: boolean | string
}

type UpdateWithdrawDisbursementOfFundAttributes = {
    uuid: string;
    data: {
        ptk_id: string | null;
        receipient: string | null;
    }
}

export type BeginingBalanceAttributes = {
    value: string | number;
    id: string;
}


export type FormSaldoAwal = {
    harta?: BeginingBalanceAttributes[] | undefined;
    kewajiban?: BeginingBalanceAttributes[] | undefined;
    modal?: BeginingBalanceAttributes[] | undefined;
    account_balancing?: string | number | undefined;
    description: string;
}

export type AddJournalDisbursementOfFundAttributes = {
    from_account: string;
    transaction_date: string;
    description: string;
    id: string;
    ptk_id?: string | undefined;
    receipient?: string | undefined;
}