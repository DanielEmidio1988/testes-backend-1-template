import {pratica3} from "../src/pratica3"

describe("Testar o arquivo pratica3.ts",()=>{
    test("Teste 2 numeros",()=>{
        const result = pratica3(3,5)
        const expectResult ={
            soma: 8,
            mult: 15
        }
        expect(result).toEqual(expectResult)
    })
})