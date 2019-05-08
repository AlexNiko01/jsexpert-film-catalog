import {Component, Input, OnInit} from '@angular/core';
import {FilmService} from '../film.service';

@Component({
    selector: 'app-films-list',
    templateUrl: './films-list.component.html',
    styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

    films: object[];
    sortDirection: boolean;

    constructor(public filmsService: FilmService) {
    }

    ngOnInit() {
        this.loadFilms();
    }

    loadFilms() {
        this.films = this.filmsService.getFilms();
    }

    sortData(): void {
        this.sortDirection = true;
        this.films = this.films.sort((a: { id, name, year, imgUrl, description }, b: { id, name, year, imgUrl, description }) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }

    sortDataRevert(): void {
        if (this.sortDirection === true) {
            this.films.reverse();
            this.sortDirection = false;
        }
    }
}
