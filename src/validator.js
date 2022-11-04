const validator = {
  isValid(creditCardNumber) {
    const arrayNumber = creditCardNumber.toString().split('').reverse();
    if (arrayNumber.length > 16) {
      return false
      }
    for (let index = 1; index < arrayNumber.length; index+=2) {
      var number = arrayNumber[index];
      number = number * 2;
      if (number >= 10) {
        var arraySum = number.toString().split('');
        number = parseInt(arraySum[0]) + parseInt(arraySum[1]);
      }
      arrayNumber[index] = number;
    }
    var result = 0;
    for (let index = 0; index < arrayNumber.length; index++) {
      result = result + parseInt(arrayNumber[index]);
    }
    if (result%10==0) {
      return true;  
    }
    return false;
  },
  maskify(creditCardNumber) {
    const arrayNumber = creditCardNumber.toString().split('');
    for (let index = 0; index<arrayNumber.length-4 ; index++) {
      arrayNumber[index] = "#";
    }
    return arrayNumber.join('');
  },
  franchise (creditCardNumber) {
    const arrayNumber = creditCardNumber.toString().split('');
    if (arrayNumber[0] === '4'){
      return "logo_visa.png";
    } else if (arrayNumber[0] === '5') {
      return "logo_mastercard.png"
    } else { 
      alert("Solo tarjetas VISA o MASTERCARD")
    }

  }

  // ...
};

export default validator;
