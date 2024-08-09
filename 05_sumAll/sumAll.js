const sumAll = function(int1,int2) {

    if (typeof int1 != "number" | typeof int2 != "number" | int1 < 0 | int2 < 0 | int1 % 1 != 0 | int2 % 1 != 0){
        return "ERROR"
    }

    res = 0

    if (int1 > int2){
        const temp = int1;
        int1 = int2;
        int2 = temp;
    }

    for (let i = int1; i <= int2; i++){
        res += i;
    }

    return res

};

// Do not edit below this line
module.exports = sumAll;
