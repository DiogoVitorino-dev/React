const user = {
    name: 'Trombadinha',
    email:'trombadinha@hotmail.com'
}

describe('Match Object',()=>{
    test('basic usage', ()=>{
        expect(user.name).toBeDefined()
        expect(user.age).not.toBeDefined()
    })
})