const url = `https://dummyjson.com/products`;

const products =  async () => {
    try {
        const response = await fetch(url);
        const allProducts = await response.json();
        return allProducts;
    } catch (error) {
        console.log('Error');
    } finally {
        
        console.log("Proceso finalizado");
    }
    
    
}

export const findAllProducts = () => products();

export const findProductById = async (id) => {
    const data = await products();
    return data.products.find((product) => product.id === Number(id));
}