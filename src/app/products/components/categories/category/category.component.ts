import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../../../models/app.models';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    @Input() category: Category;

    @Output() categorySelect: EventEmitter<Category> = new EventEmitter<Category>();

    constructor() {
    }

    ngOnInit() {
    }

    selectCategory() {
        this.categorySelect.emit(this.category);
    }
}
