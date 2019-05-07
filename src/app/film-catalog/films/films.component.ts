import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FilmService} from '../film.service';

@Component({
    selector: '.films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

    description = 'Middle card description';
    films: object[];

    constructor(public filmsService: FilmService) {

    }

    ngOnInit() {
        this.films = this.filmsService.getFilms();
    }

}
