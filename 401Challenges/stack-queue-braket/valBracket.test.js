const validateBrackets = require('./valBracket.js');
describe("Validate Brackets", ()=>{
    it("Successfully Validates", ()=>{
        const a = "{}";	
        const b = "{}(){}";	
        const c = "()[[Extra Characters]]";
        const d = "(){}[[]]";
        const e = "{}{Code}[Fellows](())";
        const f = "[({}]";
        const g = "(](";
        const h = "{(})";

        expect(validateBrackets(a)).toBeTrue;
        expect(validateBrackets(b)).toBeTrue;
        expect(validateBrackets(c)).toBeTrue;
        expect(validateBrackets(d)).toBeTrue;
        expect(validateBrackets(e)).toBeTrue;
        expect(validateBrackets(f)).toBeFalse;
        expect(validateBrackets(g)).toBeFalse;
        expect(validateBrackets(h)).toBeFalse;
    })
})