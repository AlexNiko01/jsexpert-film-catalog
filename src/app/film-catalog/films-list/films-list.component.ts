import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilmService} from '../film.service';
import {Film} from '../models/film';
import {MatSelectChange} from '@angular/material';

@Component({
    selector: 'app-films-list',
    templateUrl: './films-list.component.html',
    styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
    @Input() search: string = '';

    films: Array<Film>;
    orders: Array<{ value, viewValue }> = [
        {value: 'a-z', viewValue: 'a-z'},
        {value: 'z-a', viewValue: 'z-a'}
    ];
    wishListCount: number = 0;
    page: number = 1;
    pageSize: number = 3;
    filmsLoadedСompletely: boolean = false;

    constructor(public filmsService: FilmService) {
    }

    ngOnInit() {
        this.search = '';
        this.loadFilms();
        this.recountWishList();
    }

    recountWishList() {
        this.wishListCount = 0;
        this.films.forEach((film) => {
            if (film.inFavourites) {
                this.wishListCount += 1;
            }
        });
    }

    loadFilms(): void {
        this.films = this.filmsService.loadFilms(this.page, this.pageSize);
    }

    loadMoreFilms() {
        this.page += 1;
        const currentFilmsPortion = this.filmsService.loadFilms(this.page, this.pageSize);
        if (currentFilmsPortion) {
            this.recountWishList();
        } else {
            this.filmsLoadedСompletely = true;
        }
        this.films = this.films.concat(currentFilmsPortion);
    }

    sortData($event: MatSelectChange) {
        if ($event.value === 'a-z') {
            this.films = this.sortArray(this.films);
        } else if ($event.value === 'z-a') {
            this.films = this.sortArray(this.films).reverse();
        }
    }

    private sortArray(array: Array<Film>): Array<Film> {
        let sorted: Array<Film>;
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

    refreshWishListCounter(film) {
        if (film.inFavourites === true) {
            this.wishListCount += 1;
        } else {
            this.wishListCount -= 1;
        }
    }

    searchFilm(): void {
        if (this.search.length < 3) {
            return;
        }
        this.films = this.filmsService.searchFilm(this.search);
    }


}
