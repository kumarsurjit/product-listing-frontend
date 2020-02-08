import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductService} from './services/product.service';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsContainerComponent} from './container/products-container.component';
import {HttpClientModule} from '@angular/common/http';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoryComponent} from './components/categories/category/category.component';
import {MatCardModule, MatChipsModule, MatToolbarModule} from '@angular/material';
import {ProductComponent} from './components/product/product.component';


@NgModule({
    declarations: [ProductsContainerComponent, CategoriesComponent, CategoryComponent, ProductComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        ProductsRoutingModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule
    ],
    providers: [ProductService]
})
export class ProductsModule {
}
