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

let customerType = ["Student", "Senior", "Regular"];

let total = 100; // Example total price
let extraDiscounts = 0;

    if (customerType === "Student") {
        discount = 0.05; // 5% discount
    } 
    else if (customerType === "Senior") {
        discount = 0.07; // 7% discount
    } 
    else {
        discount = 0; // No discount
    }

    let findTotalPrice = total - (total * extraDiscounts);

    console.log("Customer Type:", customerType);
    console.log("Original Total: $", total.toFixed(2));
    console.log("Extra Discount: ", (extraDiscounts * 100).toFixed(2) + "%");
    console.log("Total after Extra Discount: $", findTotalPrice.toFixed(2));

let customerOrders = [
    {order: 1001, name: "Alice", type: "Student", products: [{name: "CD Player", qty: 2}]},
    {order: 1002, name: "Bob", type: "Senior", products: [{name: "Television", qty: 1}]},
    {order: 1003, name: "Charlie", type: "Regular", products: [{name: "Shirt", qty: 3}]}
];

for (let i = 0; i < customerOrders.length; i++) {
    let order = customerOrders[i];
    let totalPrice = 0;

    for (let j = 0; j < order.products.length; j++) {
    let cartProduct = order.products[j];

        for (let k = 0; k < products.length; k++) {
            if (products[k].name === cartProduct.name) {
                totalPrice += products[k].price * cartProduct.qty;
                break;
            
                products[k].inventory -= cartProduct.qty;
            }  
        }
    }

    if (order.type === "Student") {
        totalPrice *= 0.95; // 5% discount
    }
    else if (order.type === "Senior") {
        totalPrice *= 0.93; // 7% discount
    }

    console.log(`Order ID: ${order.order}, Customer: ${order.name}, Total Price: $${totalPrice.toFixed(2)}`);
}

console.log("Updated Inventory:", products);

let product = 
    {name: "CD Player", category: "electronics", price: 20, inventory: 100};

let discountRate = 0.10; // 10% discount
products.price *= (1 - discountRate);

for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}

let quantityPurchases = 2;

for (let [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`);
}