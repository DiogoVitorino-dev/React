describe('mock',()=>{
    test('Create callable function',()=>{
        const mock = jest.fn()
        mock('dev')
        expect(mock).toHaveBeenCalled()
        expect(mock).toHaveBeenCalledWith('dev')

    })

    test('Implementation',()=>{
        const add = jest.fn().mockImplementation((a,b)=>5)

        expect(add(1,1)).toBe(5)
        expect(add).toHaveBeenCalledWith(1,1)

    })

})