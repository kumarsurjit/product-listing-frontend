export interface AppResponse<T> {
    status: boolean;
    message: string;
    data?: T;
}

export interface Category {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    categories: Category[];
}
