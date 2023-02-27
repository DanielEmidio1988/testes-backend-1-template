// export interface arrayString {
//     text: string[],
// }

// export const fixacao = (text:string):arrayString => {
//     const aux = []
//         for(let i=0;i<=text.length;i++){
//             aux.push(text[i])
//         }

//     return {text:aux}
// }

// export interface arrayString {
//     text: string[],
// }

// export const fixacao = (text:string):arrayString => {
//     const aux = text.split("")
//     return {text:aux}
// }


export const fixacao = (text:string):string[] => {
    const aux = text.split("")
    return aux
}