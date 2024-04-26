import moment from "moment";
import "moment/locale/id"

export function formatTime(date: Date): string {
    return moment(date).format("DD MMMM YYYY")
}