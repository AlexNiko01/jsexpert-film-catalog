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
    static pageSize: number = 3;
    search: string = '';
    films: Array<Film>;
    orders: Array<{ value, viewValue }> = [
        {value: 'a-z', viewValue: 'a-z'},
        {value: 'z-a', viewValue: 'z-a'}
    ];
    currentSortingVal: string;
    wishListCount: number = 0;
    page: number = 1;
    hideLoadMore = false;
    filmsQuantity: number;

    constructor(public filmsService: FilmService) {
    }

    ngOnInit() {
        this.loadFilms();
        this.recountWishList();
        this.filmsQuantity = this.filmsService.getFilmsQuantity();
    }

    recountWishList() {
        this.wishListCount = this.filmsService.getFavouritesQuantity();
    }

    loadFilms(): void {
        this.films = this.filmsService.loadFilms(this.page, FilmsListComponent.pageSize);
    }

    resetSearch() {
        this.search = '';
        this.page = 1;
        this.loadFilms();
        this.hideLoadMore = false;
    }

    loadMoreFilms(): void {
        this.page += 1;
        const currentFilmsPortion = this.filmsService.loadFilms(this.page, FilmsListComponent.pageSize);
        if (this.filmsQuantity > this.films.length) {
            this.films = this.films.concat(currentFilmsPortion);
            this.sortData(this.currentSortingVal);
        }
        if (this.films.length === this.filmsQuantity) {
            this.hideLoadMore = true;
        }
    }

    sortData(value) {
        this.currentSortingVal = value;
        if (value === 'a-z') {
            this.films = this.sortArray(this.films);
        } else if (value === 'z-a') {
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
        this.hideLoadMore = true;
        if (this.search.length < 3) {
            return;
        }
        this.films = this.filmsService.searchFilm(this.search);
    }

}
