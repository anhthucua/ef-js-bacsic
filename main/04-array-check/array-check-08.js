// kiem tra co sp nho hon gia cho trc va freeship ko

export function arrayCheck08(productList, price) {

  if (!Array.isArray(productList) || productList.length === 0 || !Number.isInteger(price) || price <= 0) return false;

  return productList.findIndex((product) => checkProduct(product, price)) >= 0;
}

function checkProduct(product, price) {
  if (!product) return false;

  return product.price < price && product.freeship === true;
}

const productList = [
  {id: 0, name: 'pen', price: 3000, freeship: false},
  {id: 1, name: 'shit', price: 9000, freeship: false},
  {id: 2, name: 'bottle', price: 5000, freeship: true},
  {id: 3, name: 'can', price: 10000, freeship: true},
];

console.log(arrayCheck08(productList, 11000));