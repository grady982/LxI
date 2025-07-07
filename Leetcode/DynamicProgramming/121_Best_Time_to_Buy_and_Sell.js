/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    // but low price
    // sell heigh price, sell after buy day
    // get max profit

    var getProfit = function(index) {
        const buy = prices[index];
        let sell = 0;
        // get biggest sell price
        for (let i = index + 1; i < prices.length; i++) {
            sell = sell < prices[i] ? prices[i]: sell;
        }

        const profit = buy > sell ? 0 : sell - buy;

        return { buy, profit }; 
    }

    let { buy, profit } = getProfit(0);

    for(let i = 1; i < prices.length - 1; i++) {
        if (prices[i] < buy) {
            const newP = getProfit(i);

            buy = newP.buy;
            profit = newP.profit > profit ? newP.profit : profit;
        }
    }

    return profit;
};