import { faker } from "@faker-js/faker";

export const createRandomProduct = () => {
    return {
        SKU: faker.string.uuid(),
        productName: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price()
    }
};

export const products = faker.helpers.multiple(createRandomProduct, {
    count: 5
});