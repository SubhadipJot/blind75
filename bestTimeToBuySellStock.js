function bestTimeToBuySellStock(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while(right < prices.length) {
        if(prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            left = right;
        }
        right += 1;
    }
    return maxProfit;
}

console.log(bestTimeToBuySellStock([7,1,5,3,6,4]))