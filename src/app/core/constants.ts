import {environment} from '../../environments/environment';

export const Endpoints = {
    products: getApiBase('products'),
    categories: getApiBase('categories'),
    productsByCategory: getApiBase('products/category')
};

function getApiBase(endpoint: string) {
    return `${environment.baseUrl}/api/${endpoint}`;
}
