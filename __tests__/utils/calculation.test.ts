import { getDivisibleNumberLength } from '../../src/utils/calculation';



// describe('getDivisibleNumberLength', () => {
//     test('first', () => {
//         expect(getDivisibleNumberLength(1, 100, 5)).toBe(20)        
//     })
//     test('second', () => {
//         expect(getDivisibleNumberLength(1, 100, 10)).toBe(10)        
//     })
//     test('third', () => {
//         expect(getDivisibleNumberLength(1, 100, 4)).toBe(25)        
//     })
// })

// describe('getLastDivisibleNumber', () => {
//     test('first', () => {
//         expect(getLastDivisibleNumber(100, 5)).toBe(100)        
//     })
//     test('second', () => {
//         expect(getLastDivisibleNumber(105, 5)).toBe(105)        
//     })
//     test('third', () => {
//         expect(getLastDivisibleNumber(103, 5)).toBe(100)        
//     })
// })

// describe('getFirstDivisibleNumber', () => {
//     test('first', () => {
//         expect(getFirstDivisibleNumber(23, 4)).toBe(24)        
//     })
// })


describe('testPoint', () => {
    test('Status Point', () => {
        const from_ = 1
        const level = 25

        expect((5 * getDivisibleNumberLength(1, level, 5)) - (5 * getDivisibleNumberLength(1, level, 10))).toBe(15)
    })

})

