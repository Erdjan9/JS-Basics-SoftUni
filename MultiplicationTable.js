function Mt(input){
    let number = Number(input[0]);
    let mt = 0;
    for(let i = 1; i <= 10 ; i++){
        mt = i * number;
        console.log(`${i} * ${number} = ${mt}`);
    }  
}
Mt(["5"]);