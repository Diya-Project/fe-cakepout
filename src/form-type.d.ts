

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
    amount: number;
}

type AddJournalAttributes = {
    from_account: string;
    transaction_date: string;
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
        // transaction_date: string;
        // accounting_year: string;
    }
}