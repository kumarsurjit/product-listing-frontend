import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../../models/app.models';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    @Input() categories: Category[];

    @Output() categorySelected: EventEmitter<Category> = new EventEmitter<Category>();

    constructor() {
    }

    ngOnInit() {
    }

    trackByValue(index: number, category: Category) {
        return category ? category.id : index;
    }

    selectCategory(category: Category) {
        this.categorySelected.emit(category);
    }
}
