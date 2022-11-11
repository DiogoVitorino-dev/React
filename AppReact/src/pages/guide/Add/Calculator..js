import {add} from "./Calculator"

describe('calculator',()=>{
    let calc = null

    beforeEach(()=>{
        const options = {
            precision:2
        }

        const calc = new Calculator(options)

    })

    test('add two numbers',()=>{
        const result = calc.add(1.3334,4.5)
        expect(result).toEqual(5.83)

        expect(add(1,2)).toEqual(3)
    })

    test('add two negative numbers',()=>{
        const result = calc.add(-1.3334,-4.5)
        expect(result).toEqual(-5.83)

    })
})