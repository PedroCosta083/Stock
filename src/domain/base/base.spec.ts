import Base from "./base.entitie";

describe("Base validation",()=>{
    it("Description must be null",()=>{
        const invalidBase = new Base({
            description:'',
        });
        expect(invalidBase).toThrowError('Description cannot be null');
    })
    it("Name must be null",()=>{
        const invalidBase = new Base({
            description:'Description',
            name:'',
        })
        expect(invalidBase).toThrowError('Name cannot be null');
    })
    it("Active must be invalid",()=>{
        const invalidBase = new Base({
            description:'Description',
            active:false,
        })
        expect(invalidBase).toThrowError('Active cannot be ')
    })
})