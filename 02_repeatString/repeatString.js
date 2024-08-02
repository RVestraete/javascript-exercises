const repeatString = function(string,repNum) {

    if(repNum < 0){
        return "ERROR"
    }

    let repString = "";

    for (let i = 0; i < repNum; i++){
        repString += string;
    }

    return repString;


};

// Do not edit below this line
module.exports = repeatString;
