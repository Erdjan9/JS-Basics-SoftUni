function SumNumbers(input) {
    let num1 = Number(input[0]);
    let index = 1;
    let sumOfNum2 = 0;
    while(true){
        let num2 = Number(input[index]);
        if(num1 > sumOfNum2){
            sumOfNum2 += num2
            index++;
        }else if(sumOfNum2 >= num1){
            console.log(sumOfNum2);
            break;
        }
        
    }
}
SumNumbers(["20", "1", "2", "3", "4", "5", "6"])
