/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory2(transactions) {
    if (transactions.length < 1){
        return [];
    }
    let result = [];
    for (let i=0; i<transactions.length; i++){
        if (result.some(result => result.category === transactions[i]["category"])){
            const index = result.findIndex(x => x.category === transactions[i]["category"]);
            result[index]["totalSpent"] = result[index]["totalSpent"] + transactions[i]["price"];
        }
        else{
            result.push({
                "category": transactions[i]["category"],
                "totalSpent": transactions[i]["price"]
            });
        }
    }
    return result;
}

// Alternative logic
function calculateTotalSpentByCategory(transactions) {
    let resultTrans = new Map();

    for(const transaction of transactions){
        const {category, price } = transaction;

        if(! resultTrans.has(category)) {
            resultTrans.set(category, 0);
        }

        resultTrans.set(category, resultTrans.get(category) + price);
    }
    console.log(resultTrans);
    
    return Array.from(resultTrans, ([category, totalSpent]) => ({category, totalSpent}));
}

module.exports = calculateTotalSpentByCategory;
