

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

type AddJournalAttributes = {
    transactionDate: string;
    amount: number;
    status: StatusJournalAttributes;
    accountId: string;
    accountingYear: string;
}