
// creates a class with a default value of 12 using static.
export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;


    //Creates a static function that calculates the monthly payment. 
    static calculateFutureValue(monthlyPayment, rate, years) {
      const months = years * FinanceCalculator.MONTHS_IN_YEAR;
      const interestRate = 1 + rate / 100;
      const presentValue = monthlyPayment * months;
      const futureValue = presentValue * Math.pow(interestRate, months);
  
      // Return the futureValue with a precision of two decimal places
      return parseFloat(futureValue.toFixed(2));
    }
  
    // static function that converts the number to currency. 
    
    static convertToCurrency(field) {
      const currencyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      });
  
      return currencyFormatter.format(field);
    }
  }
  