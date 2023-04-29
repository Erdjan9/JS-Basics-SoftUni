function Sequence(input){
    let n = Number(input[0]);
    let num1 = 1;
    console.log(num1);
    while(n > num1){
        num1 = num1 * 2 + 1; 
        if(num1 > n){
            break
        }
        console.log(num1);
    }
}
Sequence(["17"]);