import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {combineLatest, of, Subject} from 'rxjs';
import {Category, Product} from '../../models/app.models';
import {switchMap, take, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-products-container',
    templateUrl: './products-container.component.html',
    styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit, OnDestroy {

    products: Product[];
    categories: Category[];
    product: Product;

    private unsubscribe: Subject<void> = new Subject<void>();

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        combineLatest(this.productService.getProducts(), this.productService.getCategories())
            .pipe(
                take(2),
                takeUntil(this.unsubscribe)
            )
            .subscribe(([products, categories]) => {
                this.products = products;
                this.categories = categories;
            });
    }

    trackByValue(index: number, product: Product) {
        return product ? product.id : index;
    }

    updateProducts(category: Category) {
        of([]).pipe(
            takeUntil(this.unsubscribe),
            switchMap(() => this.productService.getProductsByCategory(category.id))
        )
            .subscribe((products => this.products = products));
    }

    selectProduct(product: Product) {
        this.product = product;
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
