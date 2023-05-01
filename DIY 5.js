let grade = 5;
let minimo = 7;

printnotas (grade, minimo);
printnotas (6, 5)

function printnotas (grade, minimo) {
    if (grade >= minimo) { 
        console.log (' APROVADO')
    } else {
        console.log (' REPROVADO');
    }
}

