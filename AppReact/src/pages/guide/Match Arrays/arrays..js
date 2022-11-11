const users = ['Aluizio','Trombadinha']

describe('Match arrays',()=>{
    test('verify array elements',()=>{
        expect(users).toContainEqual('Aluizio')
        expect(users).toContain(users[0])
    })
})