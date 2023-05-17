function Adressing(input){
    let age = Number(input[0]);
    let Sex = (input[1]);
    
    if(Sex == "m"){
        if(age >= 16){
            console.log("Mr.")
        }else{
            console.log("Master")
        }
    }
    if(Sex == "f"){
        if(age >= 16){
            console.log("Ms.")
        }else{
            console.log("Miss")
        }
    }
}
Adressing(["17", "m"])