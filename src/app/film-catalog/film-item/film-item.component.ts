import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from '../models/film';

@Component({
    selector: 'app-film-item',
    templateUrl: './film-item.component.html',
    styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
    @Input() public film: Film;
    @Output() ev = new EventEmitter();
    @Output() details;

    constructor() {
    }

    ngOnInit() {
    }

    addToWishList() {
        this.film.inFavourites = !this.film.inFavourites;
        this.ev.emit();
    }
}
