import React, { useState, useMemo, useReducer } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
    ]);

    const totalValue = useMemo(() => {
        let totalValue = 0;
        for (let i = 0; i < items.length; i++) {
            totalValue = totalValue + items[i].value;
        }
        return totalValue;
    }, [items]);
    // __________________________________________________________
    // Using REDUCER
    // const [items, dispatch] = useReducer(tasksReducer, [
    //     { name: 'Chocolates', value: 10 },
    //     { name: 'Chips', value: 20 },
    //     { name: 'Onion', value: 30 },
    //     { name: 'Tomato', value: 30 },
    //     // Add more items as needed
    // ]);

    // function countItem(items) {
    //     dispatch({
    //         type: 'totalValue',
    //         items: items,
    //     });
    // }
    // function display(items){
    //     dispatch({
    //         type: 'showData',
    //         items: items,
    //     });
    // }


    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};

function tasksReducer(items, action) {
    if (action.type === 'totalValue') {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum = sum + items[i].value;
        }
        return sum;
    }
    else if (action.type === 'showData') {
        return <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
        </div>
    }
    else {
        throw Error('Unknown action: ' + action.type);
    }
}
export default Assignment3;