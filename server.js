import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";

export const createRandomProduct = () => {
    return {
        SKU: faker.string.uuid(),
        productName: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        image: faker.image.avatar(),
    }
};

export const products = faker.helpers.multiple(createRandomProduct, {
    count: 5
});

writeFileSync('products.json', JSON.stringify({ products }, null, 2));
console.log('products.json file created successfully!');