import {verificaPar} from "../src/pratica2"

describe("Teste do arquivo pratica2.ts",()=>{
    test("A função recebe um parametro e retorna null caso seja diferente de 'number'",()=>{
        const result = verificaPar("1" as any)
        expect(result).toBe(null)
    })

    test("A função recebe um parametro, se for diferente de um numero inteiro, deve retornar 'null'",()=>{
        const result = verificaPar(101.1)
        expect(result).toBeNull()
    })

    test("Se o numero for impar, retorne falso",()=>{
        const result = verificaPar(3)
        expect(result).toBeFalsy()
    })

    test("Se o numero for par, retorne true",()=>{
        const result = verificaPar(2)
        expect(result).toBeTruthy()
    })
})