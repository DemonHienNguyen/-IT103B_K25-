let products = [
{ id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
{ id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true },
{ id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
{ id: "P04", name: "Màn hình Dell UltraSharp", price: 450, category: "Màn hình", inStock: true },
{ id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true },
];
let filterAndSortProduct = (arr) => {
    let result = arr.filter(c=>c.inStock === true).sort((a,b) => b.price - a.price);
    return result;
}
console.table(filterAndSortProduct(products));

// Bài 2: 
let findProductCategory = (arr) => {
    let output;
    let result = arr.filter(c=>c.category === "Phụ kiện");
    output = result.map(r => r.name);
    return output;
}
console.log(findProductCategory(products));

// bài 3: 
let sumOfProduct = (arr) => {
    let result = filterAndSortProduct(arr).reduce((arc, cur) => arc + cur.price, 0);

    return result;
}
console.log("Vậy tổng giá của sản phẩm là : "+  sumOfProduct(products));
