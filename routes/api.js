/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';
const DISPLAY_CONSOLE = 0;

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  // developer
  app.get("/developer", function (req, res) {
    res.json({
      "developer":"Leo Vargas",
      "company":"Magno Technologies"
    });
  });
  
  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      
      var initUnit = convertHandler.getUnit(input);
      if (initNum == 'invalid number' && initUnit == 'invalid unit') res.json({"error":"invalid number and unit"});
      if (initNum == 'invalid number') res.json({"error":"invalid number"});
      if (initUnit == 'invalid unit') res.json({"error":"invalid unit"});
    
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      if (DISPLAY_CONSOLE) console.log(input, initNum, initUnit, returnNum, returnUnit, toString);
      res.json({
        initNum:initNum,
        initUnit:initUnit,
        returnNum:returnNum,
        returnUnit:returnUnit,
        toString:toString
      });
    });
    
};
