describe('Match',()=>{
    test('basic usage Match',()=>{
        expect('developer').toMatch(/\w+/)
        expect('(21)55555-333').toMatch(/^\(\d{2}\)\d{5}-\d{3}$/)
    })
})