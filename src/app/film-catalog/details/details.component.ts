import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmService} from '../film.service';
import {Film} from '../models/film';

@Component({
    selector: 'details-inner',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    filmData: Film;

    constructor(private route: ActivatedRoute,
                public filmService: FilmService) {
    }

    ngOnInit() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.filmData = this.filmService.getFilmData(id);
    }

}
