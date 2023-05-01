function test(testName, expected, result){
    testCase = `Test Case: ${testName}`;
    console.log(testCase);
    if (result == expected){
        console.log("Success!");
        return;
    }
    throw new Error(`Expected: ${expected} Result: ${result} `);
}

function media (num1){
    let x = 0; 
    for (i=0; i < num1.length; i++) {
        x += num1 [i];
    }
    let resultado = x / num1.length;
    return resultado;
}

test("a media entre 2+3+4 deve ser = 3 ", 3 , media([2, 3, 4]));


