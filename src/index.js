// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    currency = parseInt(currency);
    let determine = {};
    if(currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if(currency >= 50) {
        determine.H = Math.floor(currency / 50);
        currency = currency - (determine.H * 50);
    }
    if(currency >= 25) {
        determine.Q = Math.floor(currency / 25);
        currency = currency - (determine.Q * 25);
    }
    if(currency >= 10) {
        determine.D = Math.floor(currency / 10);
        currency = currency - (determine.D * 10);
    }
    if(currency >= 5) {
        determine.N = Math.floor(currency / 5);
        currency = currency - (determine.N * 5);
    }
    if(currency > 0) {
        determine.P = currency;
    }
    return determine;
}

