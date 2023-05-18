function main(input){
    let budget = Number(input[0]);
    let stasists = Number(input[1]);
    let PriceOfDressForStatist = Number(input[2]);  
    let DressPrice = stasists * PriceOfDressForStatist;

    if(stasists > 150){
        let discount = DressPrice * 0.10;
        DressPrice-=discount;
    }
    
    let decor = budget * 0.10;
     
    let sum1 = DressPrice + decor;
    let sum2 = Math.abs(budget - sum1).toFixed(2);
    
    if(sum1 > budget){
        console.log("Not enough money!")
        console.log(`Wingard needs ${sum2} leva more.`);
    }else{
        console.log("Action!")
        console.log(`Wingard starts filming with ${sum2} leva left.`);
    }
}
main(["20000","120","55.5"])