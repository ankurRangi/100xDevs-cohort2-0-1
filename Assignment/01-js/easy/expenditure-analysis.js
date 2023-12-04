/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
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
    console.log(result);
    return result;
}

module.exports = calculateTotalSpentByCategory;
