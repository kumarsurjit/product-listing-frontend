import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Endpoints} from '../../core/constants';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AppResponse, Category, Product} from '../../models/app.models';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    getProducts() {
        return this.http.get<AppResponse<Product[]>>(Endpoints.products).pipe(map(response => response.data));
    }

    getCategories() {
        return this.http.get<AppResponse<Category[]>>(Endpoints.categories).pipe(map(response => response.data));
    }

    getProductsByCategory(id: number) {
        return this.http.get<AppResponse<Product[]>>(`${Endpoints.productsByCategory}/${id}`)
            .pipe(map(response => response.data));
    }
}
