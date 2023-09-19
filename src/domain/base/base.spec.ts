import Base from "./base.entitie";

describe("Base validation",()=>{
    it("Description Cannot be null",()=>{
        const invalidBase = ()=>new Base({
            description:'',
        });
        expect(invalidBase).toThrowError('Description field cannot be null/empty or exceed 50 characters and must be string');
    })
    it("Name Cannot be blank space",()=>{
        const name = ' ';
        const invalidBase = new Base({
            description:'Description',
        }); 
             
        expect(()=>invalidBase.addName(name)).toThrowError('Name is required ');
    })
    it("Name Cannot be null",()=>{
        const name = '';
        const invalidBase = new Base({
            description:'Description',
        }); 
             
        expect(()=>invalidBase.addName(name)).toThrowError('Name is required ');
    })
    it("Name Cannot exceed 50 characters",()=>{
        const name = '9Q%%L23pf9XkV@SbaFpP4@Yg8y5etSZQcwPXi&k7Ca&9hejC8%1';
        const invalidBase = new Base({
            description:'Description',
        }); 
             
        expect(()=>invalidBase.addName(name)).toThrowError('Name field cannot exceed 50 characters');
    })
   
    it("Active must be false",()=>{
        const invalidBase = new Base({
            description:'Description',
        });
        invalidBase.deactivate()
        expect(invalidBase.active).toBe(false);
    })
    it("Active must be true",()=>{
        const invalidBase = new Base({
            description:'Description',
        });
        invalidBase.activate()
        expect(invalidBase.active).toBe(true);
    })
})