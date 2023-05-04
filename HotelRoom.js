function HotelRoom(input) {
  let month = input[0];
  let numberOfNights = Number(input[1]);
  let roomType1 = "Apartment";
  let roomType2 = "Studio";
  let pricePerNight = 0.0;
  let finalPrice = 0.0;

  if (roomType1 === "Apartment") {
    switch (month) {
      case "May":
      case "October":
        pricePerNight = 65;
        finalPrice = numberOfNights * pricePerNight;
        break;
      case "June":
      case "September":
        pricePerNight = 68.7;
        finalPrice = numberOfNights * pricePerNight;
        break;
      case "July":
      case "August":
        pricePerNight = 77;
        finalPrice = numberOfNights * pricePerNight;
        break;
    }
    if (numberOfNights > 14) {
      finalPrice *= 0.9;
    }
    console.log(`Apartment: ${finalPrice.toFixed(2)} lv.`);
  }
  if (roomType2 === "Studio") {
    switch (month) {
      case "May":
      case "October":
        pricePerNight = 50;
        finalPrice = numberOfNights * pricePerNight;
        if (numberOfNights > 7 && numberOfNights <= 14) {
          finalPrice *= 0.95;
        } else if (numberOfNights > 14) {
          finalPrice *= 0.7;
        }
        break;
      case "June":
      case "September":
        pricePerNight = 75.2;
        finalPrice = numberOfNights * pricePerNight;
        if (numberOfNights > 14) {
          finalPrice *= 0.8;
        }
        break;
      case "July":
      case "August":
        pricePerNight = 76;
        finalPrice = numberOfNights * pricePerNight;
        break;
    }
    console.log(`Studio: ${finalPrice.toFixed(2)} lv.`);
  }
}
HotelRoom(["May", "15"]);
