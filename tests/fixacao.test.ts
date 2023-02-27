import {fixacao} from "../src/fixacao"

describe("Testar o arquivo fixacao.ts",()=>{
    test("Testar array de string",()=>{
        const result = fixacao("div")
        // const verificaArray = {text: ["d","i","v"]}
        const verificaArray = ["d","i","v"]
        expect(result).toEqual(verificaArray)
    })
})