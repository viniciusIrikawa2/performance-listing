onmessage = function (event) {
    const { products, rangePrice } = event.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filteredProducts = products.filter((product: any) => product.price)

}