'use client'
import { currency } from '@/helper/currency';
import { formatTime } from '@/helper/time';
import { JournalAttributes } from '@/type';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const useGeneratePDF = (value: JournalAttributes[], debit: number, kredit: number) => {
    const doc: any = new jsPDF();
    const columnsJournal = ['COA', 'Nama Akun', 'Tanggal Transaksi', 'Referensi', 'D', 'K'];
    const dataJournal = value?.map((val) => {
        return [val.account?.account_number, val.account?.name, val.transaction_date ? formatTime(val.transaction_date) : '-', val.reference, val.status === 'D' ? currency(val.amount) : "-", val.status === 'K' ? currency(val.amount) : "-"]
    })
    doc.setFontSize(20)
    doc.text("Jurnal", 15, 10)
    doc.setFontSize(10)
    doc.text(`Debit : ${debit ? currency(debit) : currency(0)}   Kredit : ${kredit ? currency(kredit) : currency(0)}`, 117, 18)
    doc.autoTable({
        head: [columnsJournal],
        body: dataJournal,
        startY: 20,
        margin: { top: 50, right: 15, bottom: 20, left: 15 },
        didDrawPage: (data: any) => {
            if (data.pageCount > 1) {
            }
        },
    });
    doc.save('table.pdf');
};

export default useGeneratePDF