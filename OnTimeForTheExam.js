function onTimeForTheExam(input) {
    let examHour = Number(input[0]); 
    let examMinute = Number(input[1]); 
    let arrivalHour = Number(input[2]); 
    let arrivalMinute = Number(input[3]);
    
    let examTimeInMinutes = examHour * 60 + examMinute;
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinute;
    // 1:05 1h = 60 minutes
    // 1:00
    let difference = examTimeInMinutes - arrivalTimeInMinutes; // 5
    // if the difference is a negative number, the student is late
    // if the difference is a positive number, the student could be both on time or early 
    
    // "On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
    if (difference >= 0 && difference <= 30) {
        console.log("On time");
    } else if (difference > 30) {
        console.log("Early");
    } else {
        console.log("Late");
    }
 
    // if the student is earlier more than an hour
    if (difference >= 60) {
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;  
 
        if (minutes < 10) {
            console.log(`${hours}:0${minutes} hours before the start`);
        } else {
            console.log(`${hours}:${minutes} hours before the start`);
        }
    // if the student is earlier but less than an hour
    } else if (difference > 0) {
        console.log(`${difference} minutes before the start`);
    // if the student is late but more than an hour
    } else if (difference <= -60) {
        let absoluteDifference = Math.abs(difference);
        let hours = Math.floor(absoluteDifference / 60);
        let minutes = absoluteDifference % 60;
 
        if (minutes < 10) {
            console.log(`${hours}:0${minutes} hours after the start`);
        } else {
            console.log(`${hours}:${minutes} hours after the start`);
        }
    // if the student is late but less an hour
    } else if (difference < 0) {
        console.log(`${Math.abs(difference)} minutes after the start`);
    }
}
onTimeForTheExam(["9", "00", "10", "30"]);