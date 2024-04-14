
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "timeFormatPipe"
})
export class TimeFormatPipe implements PipeTransform {
    transform(minutes: number) {
        if (minutes % 60 === 0) {
            const hours = minutes / 60
            return `${hours}h`
        }
        if (minutes < 60) {
            return `${minutes}min`
        }

        const hours = Math.floor(minutes / 60)
        const remainingMinutes = minutes - hours * 60
        return `${hours}h ${remainingMinutes}min`
    }
}