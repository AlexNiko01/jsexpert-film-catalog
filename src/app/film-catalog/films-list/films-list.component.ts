import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilmService} from '../film.service';
import {Film} from '../models/film';
import {log} from 'util';

@Component({
    selector: 'app-films-list',
    templateUrl: './films-list.component.html',
    styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
    @Input() search: string = '';

    films: object[];
    orders: object[] = [
        {value: 'a-z', viewValue: 'a-z'},
        {value: 'z-a', viewValue: 'z-a'}
    ];
    wishListCount: number = 0;

    constructor(public filmsService: FilmService) {
    }

    ngOnInit() {
        this.loadFilms();
    }

    loadFilms(): void {
        this.search = '';
        this.films = this.filmsService.loadFilms();
    }

    sortData($event) {
        if ($event.value === 'a-z') {
            this.films = this.sortArray(this.films);
        } else if ($event.value === 'z-a') {
            this.films = this.sortArray(this.films).reverse();
        }
    }

    private sortArray(array: object[]): object[] {
        let sorted: object[];
        sorted = array.sort((a: Film, b: Film) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        return sorted;
    }

    refreshWishListCounter() {
        this.wishListCount += 1;
    }

    searchFilm(): void {
        if (this.search.length < 3) {
            return;
        }
        this.films = this.filmsService.searchFilm(this.search);
    }
}
