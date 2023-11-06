export function getLastDivisibleNumber(to: number, by: number) {
    return Math.floor(to / by) * by
}

export function getFirstDivisibleNumber(from_: number, by: number) {
    if (from_ % 5 == 1){
        return from_ + (by - (from_ % by))
    }

    return Math.floor((from_ + by - 1) / by) * by
}



export function getDivisibleNumberLength(from_: number, to: number, by:number) {
    return Math.floor(to / by) - Math.floor(from_ / by)
} 
