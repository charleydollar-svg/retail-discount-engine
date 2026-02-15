// Product Catalog
let products = [
    {name: "CD Player", category: "electronics", price: 20, inventory: 100},
    {name: "Television", category: "electronics", price: 40, inventory: 50},
    {name: "Shirt", category: "apparel", price: 60, inventory: 30},
    {name: "Produce", category: "groceries", price: 10, inventory: 20},
    {name: "Vacuum Cleaner", category: "household", price: 80, inventory: 10}
];

// Calculate discounted prices for each product based on category
for (let product of products) {
    let discountRate = 0;

    switch (product.category) {
        case "electronics":
            discountRate = 0.2; // 20% discount
            break;
        case "apparel":
            discountRate = 0.15; // 15% discount
            break;
        case "groceries" && "household":
            discountRate = 0.1; // 10% discount
            break;

        default:
            discountRate = 0; // No discount
    }
    let discountedPrice = product.price * (1 - discountRate);
    console.log(`The discounted price of ${product.name} is $${discountedPrice.toFixed(2)}`);
}

//customer type
let customerType = ["Student", "Senior", "Regular"];

let total = 100; // Total price
let extraDiscounts = (customerType === "Student") ? 0.05 : (customerType === "Senior") ? 0.07 : 0;

    if (customerType === "Student") {
        discountRate = 0.05; // 5% discount
    } 
    else if (customerType === "Senior") {
        discountRate = 0.07; // 7% discount
    } 
    else {
        discountRate = 0; // No discount
    }

    let TotalPrice = total - (total * extraDiscounts);

//Checkout Process
let customerOrders = [
    {orderId: 1001, name: "Alice", type: "Student", products: [{name: "CD Player", qty: 2}]},
    {orderId: 1002, name: "Bob", type: "Senior", products: [{name: "Television", qty: 1}]},
    {orderId: 1003, name: "Charlie", type: "Regular", products: [{name: "Shirt", qty: 3}]}
];

for (let i = 0; i < customerOrders.length; i++) {
    let order = customerOrders[i];
    let totalCost = 0;

    for (let j = 0; j < order.products.length; j++) {
    let cartProduct = order.products[j];

        for (let k = 0; k < products.length; k++) {
            if (products[k].name === cartProduct.name) {
                totalCost += products[k].price * cartProduct.qty;
                products[k].inventory -= cartProduct.qty;
                break;
            
            }  
        }
    }

    if (order.type === "Student") {
        totalCost *= 0.95; // 5% discount
    }
    else if (order.type === "Senior") {
        totalCost *= 0.93; // 7% discount
    }

    console.log("       Customer Checkout Number:", i + 1);
    console.log(`Order ID: ${order.orderId}, Customer: ${order.name}, Total Cost: $${totalCost.toFixed(2)}`);
}


//key value pairs
let Product = products[0]; // Example: selecting the first product
console.log("       Single Product Details after Discount Applied:");

    for (let key in Product) {
    console.log(`${key}: ${Product[key]}`);
}

// object.entries
let quantityPurchases = 2;
console.log("       logged all product info after inventory is updated:");

products.forEach(product => {
    for (let [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`);
}
});