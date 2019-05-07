import {Component, Input, OnInit} from '@angular/core';
import {FilmService} from '../film.service';

@Component({
    selector: 'app-films-list',
    templateUrl: './films-list.component.html',
    styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

    films: object[];

    constructor(public filmsService: FilmService) {
    }

    ngOnInit() {
        this.loadFilms();
    }

    loadFilms(){
        this.films = this.filmsService.getFilms();
    }
}
