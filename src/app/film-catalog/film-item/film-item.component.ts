import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-film-item',
    templateUrl: './film-item.component.html',
    styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
    @Input() public film: object;
    @Output() ev = new EventEmitter();
    @Output() details;

    constructor() {
    }

    ngOnInit() {
    }

    addToWishList() {
        this.ev.emit();
    }
}
