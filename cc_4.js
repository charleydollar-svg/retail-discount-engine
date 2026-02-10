let products = [
    {name: "Shirt", category: "Clothing", price: 20, inventory: 100},
    {name: "Pants", category: "Clothing", price: 40, inventory: 50},
    {name: "Shoes", category: "Footwear", price: 60, inventory: 30},
    {name: "Hat", category: "Accessories", price: 10, inventory: 20}
];

for (let x of products) {
    if (x['category'] == 'Clothing') {
        x['price'] *= 0.9;
    }
}