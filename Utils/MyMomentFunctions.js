const moment = require("moment");

class MyMomentFunctions {


    static getCurrentDate() {
        return moment().date();
    }

    static addInCurrentDate() {
        
    }

    static currentDay() {
        return moment().format('D')
    }

}
module.exports = MyMomentFunctions;