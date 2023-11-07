export function getLastDivisibleNumber(to: number, by: number) {
    return Math.floor(to / by) * by
}

// export function getFirstDivisibleNumber(from_: number, by: number) {
//     if (from_ % 5 == 1){
//         return from_ + (by - (from_ % by))
//     }

//     return Math.floor((from_ + by - 1) / by) * by
// }



export function getDivisibleNumberLength(from_: number, to: number, by:number) {
    return Math.floor(to / by) - Math.floor(from_ / by)
} 



// export function getSumConsecutiveNumber(first: number, last: number, common_diffrence: number, length: number) {
//     // using Gaussian Method for fiding sum of consecutive number
//     // where first number and last number are known

//     return Math.floor(length / 2 * (2 * first + (last - first) * common_diffrence))

// }