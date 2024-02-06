
export function convertCurrencyFormat(input: string) {
    const [amount, cents = "00"] = input.includes(".") 
    ? input.split(".") 
    : [input];
  
    const numberToWords =  (num: number): string => {
      const units = ["", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE", "DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISEIS", "DIECISIETE", "DIECIOCHO", "DIECINUEVE"];
      const tens = ["", "", "VEINTE", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA"];
      const hundreds = ["", "CIEN", "DOSCIENTOS", "TRESCIENTOS", "CUATROCIENTOS", "QUINIENTOS", "SEISCIENTOS", "SETECIENTOS", "OCHOCIENTOS", "NOVECIENTOS"];
  
      const getUnitWords = (unit: number) => (unit > 0 ? units[unit] : "");
      const getTenWords = (ten: number, unit: number) => {
        if (ten === 1) {
          // Caso especial para números del 10 al 19
          return units[ten * 10 + unit];
        } else if (ten === 2 && unit > 0) {
          // Caso especial para números del 21 al 29
          return `VEINTI${getUnitWords(unit)}`;
        } else {
          // Resto de casos
          return ten > 0 ? (unit > 0 ? `${tens[ten]} Y ${getUnitWords(unit)}` : `${tens[ten]}`) : getUnitWords(unit);
        }
      };
  
      const getHundredWords = (hundred: number, ten: number, unit: number) => {
        if (hundred > 0) {
          let result = hundreds[hundred];
          if (hundred === 1 && (ten > 0 || unit > 0)) {
            result = "CIENTO";
          }
  
          if (ten > 0 || unit > 0) {
            result;
            if (ten > 0) {
              result += ` ${getTenWords(ten, unit)}`;
            } else {
              result += ` ${getUnitWords(unit)}`;
            }
          }
          return result;
        } else {
          return getTenWords(ten, unit);
        }
      };
  
      const getThousandWords = (thousand: number): string=> {
        if (thousand === 1) {
          return "MIL";
        } else {
          const thousandWords = numberToWords(thousand);
          return `${thousandWords} MIL`;
        }
      };
  
      const getNumberWords = (num: number) => {
        if (num === 0) {
          return "CERO";
        } else if (num < 1000) {
          return getHundredWords(Math.floor(num / 100), Math.floor((num / 10) % 10), num % 10);
        } else {
          const thousand = Math.floor(num / 1000);
          const remainder = num % 1000;
          if (remainder === 0) {
            return getThousandWords(thousand);
          } else {
            return `${getThousandWords(thousand)} ${getHundredWords(Math.floor(remainder / 100), Math.floor((remainder / 10) % 10), remainder % 10)}`;
          }
        }
      };
  
      return getNumberWords(num);
    };
  
    const amountInWords = numberToWords(parseInt(amount));
    const centsFormatted = cents.padEnd(2, "0");
  
    return `${amountInWords} ${centsFormatted}/100 DOLARES AMERICANOS`;
  }
  
  export function truncateNumberToFourDecimals(num: number): string {
    const numAsString = num.toString();
    const decimalIndex = numAsString.indexOf(".");
  
    if (decimalIndex !== -1) {
      return numAsString.slice(0, decimalIndex + 3);
    } else {
      return num.toString();
    }
  }
  