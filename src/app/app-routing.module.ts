import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
    {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
    {path: '**', redirectTo: 'products', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
