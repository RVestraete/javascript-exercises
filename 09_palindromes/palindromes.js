const palindromes = function (string) {

    string = string.toLowerCase().split('');

    string = string.filter(item => /^[a-zA-Z0-9]+$/.test(item));

    let palindrome = [...string];
    palindrome.reverse();

    string = string.join('');
    palindrome = palindrome.join('');

    return string === palindrome

};

// Do not edit below this line
module.exports = palindromes;
