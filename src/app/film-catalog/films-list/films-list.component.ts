import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilmService} from '../film.service';

@Component({
    selector: 'app-films-list',
    templateUrl: './films-list.component.html',
    styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

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

    loadFilms() {
        this.films = this.filmsService.getFilms();
    }

    sortData($event) {
        if ($event.value === 'a-z') {
            this.films = this.sortArray(this.films);
        } else if ($event.value === 'z-a') {
            this.films = this.sortArray(this.films).reverse();
        }
    }

    sortArray(array: object[]): object[] {
        let sorted: object[];
        sorted = array.sort((a: { id, name, year, imgUrl, description }, b: { id, name, year, imgUrl, description }) => {
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
}
