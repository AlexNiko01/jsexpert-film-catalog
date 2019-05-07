import {Component, Input, OnInit} from '@angular/core';
import {FilmService} from '../film.service';

@Component({
    selector: 'app-films-list',
    templateUrl: './films-list.component.html',
    styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

    films: object[];
    sorted;

    constructor(public filmsService: FilmService) {
    }

    ngOnInit() {
        this.loadFilms();
    }

    loadFilms() {
        this.films = this.filmsService.getFilms();
    }

    sortData() {
        console.log(123);
        this.sorted = !this.sorted;
        this.films = this.films.sort(function (a: { id, name, year, imgUrl, description }, b: { id, name, year, imgUrl, description }) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }
}
