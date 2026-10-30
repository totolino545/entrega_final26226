const url = `https://dummyjson.comcd/products`;

const products =  async () => {
    try {
        const response = await fetch(url);
        const allProducts = await response.json();
        allProducts
    } catch (error) {
        console.log('Error');
    } finally {
        console.log("Proceso finalizado");
    }
}

console.log(products)
export const findAllProducts = () => products;