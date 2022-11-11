describe('Compare numbers', ()=>{
    test('basic usage toBeGreaterThan',()=>{
        expect(1+1).toBeGreaterThan(1)
        expect(1+1).toBeGreaterThanOrEqual(2)
    })

    test('basic usage toBeLessThan',()=>{
        expect(1+1).toBeLessThan(3)
        expect(1+1).toBeLessThanOrEqual(2)
    })
})