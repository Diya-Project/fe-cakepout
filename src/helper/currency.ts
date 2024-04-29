export const currency = (num: number):string => {
    return num as number ? 'Rp ' + num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') : 'Rp 0'
}
