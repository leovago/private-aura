/*
*
*
*       Complete the handler logic below
*       
*       
*/

const DISPLAY_CONSOLE = 0;

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    result = input.match(/\d|\.|\//g);
    
    if (result === null) { return 1; }// null / no numerical input

    if (result.includes('/')){ // fraction
      let numerator = result.slice(0, result.indexOf('/'));
      let denominator = result.slice(result.indexOf('/') +  1);
      result = Number(numerator.join('')) / Number(denominator.join(''));
    } else { // number
      result = Number(result.join(''));
    }
    if (Number.isNaN(result)) result = 'invalid number';
    if (DISPLAY_CONSOLE) console.log(input, result);
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    let units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    result = input.match(/[a-z]|[A-Z]/g).join('');

    if (units.includes(result)){
      if (DISPLAY_CONSOLE) console.log(input, result);
      return result;
    } else {
      if (DISPLAY_CONSOLE) console.log(input, result);
      return 'invalid unit';
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    let initUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    let returnUnits = ['l','gal','km','mi','kg','lbs','l','gal','km','mi','kg','lbs'];
    result = returnUnits[initUnits.indexOf(initUnit)];
    if (DISPLAY_CONSOLE) console.log(initUnit, result);
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    let units = [
      {
        unit:'gal',
        spellOut:'gallons'
      },
      {
        unit:'GAL',
        spellOut:'gallons'
      },
      {
        unit:'l',
        spellOut:'liters'
      },
      {
        unit:'L',
        spellOut:'liters'
      },
      {
        unit:'mi',
        spellOut:'miles'
      },
      {
        unit:'MI',
        spellOut:'miles'
      },
      {
        unit:'km',
        spellOut:'kilometers'
      },
      {
        unit:'KM',
        spellOut:'kilometers'
      },
      {
        unit:'lbs',
        spellOut:'pounds'
      },
      {
        unit:'LBS',
        spellOut:'pounds'
      },
      {
        unit:'kg',
        spellOut:'kilograms'
      },
      {
        unit:'KG',
        spellOut:'kilograms'
      }
    ];
    
    result = units.find(d => (d.unit == unit)).spellOut;
    if (DISPLAY_CONSOLE) console.log(unit, result);
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if (initUnit == 'gal' || initUnit == 'GAL'){ result = initNum * galToL }
    if (initUnit == 'l' || initUnit == 'L'){ result = initNum / galToL }
    
    if (initUnit == 'mi' || initUnit == 'MI'){ result = initNum * miToKm }
    if (initUnit == 'km' || initUnit == 'KM'){ result = initNum / miToKm }
    
    if (initUnit == 'lbs' || initUnit == 'LBS'){ result = initNum * lbsToKg }
    if (initUnit == 'kg' || initUnit == 'KG'){ result = initNum / lbsToKg }
    
    if (DISPLAY_CONSOLE) console.log(initNum + initUnit, result);
    return Number(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    //"3.1 miles converts to 4.98895 kilometers"
    if (DISPLAY_CONSOLE) console.log(result);
    return result;
  };
  
}

module.exports = ConvertHandler;
