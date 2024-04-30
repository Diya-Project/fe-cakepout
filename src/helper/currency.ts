export const currency = (num: number): string => {
    return num as number ? 'Rp ' + num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') : 'Rp 0'
}

export const formatRupiah = (angka: number, prefix: string) => {
    let number_string = angka.toString().replace(/[^,\d]/g, "")
    let split = number_string.split(",")
    let sisa = split[0].length % 3
    let rupiah = split[0].substring(0, sisa)
    let ribuan = split[0].substring(sisa).match(/\d{3}/gi);

    if (ribuan) {
        let separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return prefix === undefined ? rupiah : rupiah ? "" + rupiah : "";
};
export const convertToRupiah = (angka:number) => {
    let number_ = angka?.toString().replaceAll('.', '')
    return parseInt(number_)
}