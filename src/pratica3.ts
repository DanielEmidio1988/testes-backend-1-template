export interface operacaoAritimetica {
    soma: number,
    mult: number,
}

export const pratica3 = (n1: number, n2: number):operacaoAritimetica =>{
    const operacao:operacaoAritimetica ={
        soma: n1 + n2,
        mult: n1 * n2,
    }
    return operacao
}