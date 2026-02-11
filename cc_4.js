let products = [
    {name: "CD Player", category: "electronics", price: 20, inventory: 100},
    {name: "Television", category: "electronics", price: 40, inventory: 50},
    {name: "Shirt", category: "Apparel", price: 60, inventory: 30},
    {name: "Produce", category: "Groceries", price: 10, inventory: 20},
    {name: "Vacuum Cleaner", category: "household", price: 80, inventory: 10}
];

for (let product of products) {
    let discountRate = 0;

    switch (product.category) {
        case "electronics":
            discountRate = 0.2; // 20% discount
            break;
        case "Apparel":
            discountRate = 0.15; // 15% discount
            break;
        case "Groceries":
            discountRate = 0.1; // 10% discount
            break;
        case "household":
            discountRate = 0.1; // 10% discount
            break;

        default:
            discountRate = 0; // No discount
    }
    let discountedPrice = product.price * (1 - discountRate);
    console.log(`The discounted price of ${product.name} is $${discountedPrice.toFixed(2)}`);
}