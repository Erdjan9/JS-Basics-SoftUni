function Histogram(input) {
    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let index = 0;
    let p1Percentage = 0;
    let p2Percentage = 0;
    let p3Percentage = 0;
    let p4Percentage = 0;
    let p5Percentage = 0;

    for(let i = 1; i <= n; i++){
        index = input[i];
        if(index < 200){
            p1++;
            p1Percentage = p1 / n * 100;
        }
        else if(index >= 200 && index <= 399){
            p2++; 
            p2Percentage = p2 / n * 100;
        }
        else if(index >= 400 && index <= 599){
            p3++ 
            p3Percentage = p3 / n * 100;
        }
        else if(index >= 600 && index <= 799){
            p4++; 
            p4Percentage = p4 / n * 100;
        }
        else if(index >= 800){
            p5++; 
            p5Percentage = p5 / n * 100;
        }

    }
    console.log(`${p1Percentage.toFixed(2)}%`);
    console.log(`${p2Percentage.toFixed(2)}%`);
    console.log(`${p3Percentage.toFixed(2)}%`);
    console.log(`${p4Percentage.toFixed(2)}%`);
    console.log(`${p5Percentage.toFixed(2)}%`);
}
Histogram(["3", "1", "2", "999"]);
