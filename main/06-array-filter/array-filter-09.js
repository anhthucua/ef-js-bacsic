// tim tat ca sp thuoc dong iphone va con hang trong kho
export function findProduct(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  return productList.filter((product) => findProductIphone(product));
}

function findProductIphone(product) {
  if (!product) return [];

  if (product.brand === 'apple' && product.amount !== 0) {
    return product;
  }
}