export async function traerProd(search) {
  let products;

  async function simple() {
    const prod = await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .catch((error) => {
        console.error(` ERROR en fetch `);
        console.error(error);
        return [];
      });
    return prod.products;
  }
  async function comp() {
    const prod = await fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .catch((error) => {
        console.error(` ERROR en fetch `);
        console.error(error);
        return [];
      });
    return prod.products;
  }

  if (search === undefined) {
    products = await simple();
  } else {
    products = await comp();
  }

  return products;
}
