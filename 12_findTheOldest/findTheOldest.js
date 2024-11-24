const findTheOldest = function(arr) {

    return arr.sort(function(pers1,pers2){
        const currentYear = (new Date()).getFullYear();

        const age1 = pers1.yearOfDeath ? pers1.yearOfDeath - pers1.yearOfBirth : currentYear - pers1.yearOfBirth;
        const age2 = pers2.yearOfDeath ? pers2.yearOfDeath - pers2.yearOfBirth : currentYear - pers2.yearOfBirth;

        return age1 > age2 ? -1 : 1;

    }
    )[0];

};

// Do not edit below this line
module.exports = findTheOldest;
