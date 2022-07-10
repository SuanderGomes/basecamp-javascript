function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");
        if (typeof arr !== 'object') throw new TypeError("O Array precisa ser do tipo object");
        if (typeof num !== 'number') throw new TypeError("O numero precisa ser do tipo number");
        if (arr.length !== num) throw new RangeError("Tamanho inválido");
        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(e.name);
            console.log(e.massage);
            console.log(e.stack);
        } else if (e instanceof TypeError) {
            console.log("Esse erro do do tipo TypeError");
            console.log(e.name);
            console.log(e.message);
            console.log(e.stack);
        } else if (e instanceof RangeError) {
            console.log("Esse erro é do tipo RangeError");
            console.log(e.name);
            console.log(e.message);
            console.log(e.stack);
        } else {
            console.log("Ocorreu um tipo de erro não esperado: " + e);
        }
    }
}
// let arr = [1, 2, 3, 4, 5];
// let num = 5;
console.log(validaArray(['a'], 1));