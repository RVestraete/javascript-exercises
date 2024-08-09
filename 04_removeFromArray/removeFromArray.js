const removeFromArray = function(array, ...argsToRemove) {

    for (const item of argsToRemove){
        let index = array.indexOf(item);
        while (index > -1){
            array.splice(index,1);
            index = array.indexOf(item);
        }
    }


    return array

};

// Do not edit below this line
module.exports = removeFromArray;
