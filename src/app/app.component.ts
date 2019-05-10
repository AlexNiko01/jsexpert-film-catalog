import {Component} from '@angular/core';
import {FilmService} from './film-catalog/film.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    links: object[] = [
        {path: '/main', label: 'Главная', active: 'button-active', icon: 'home'},
        {path: '/films', label: 'Все фильмы', active: 'button-active', icon: 'list_alt'}
    ];

    search: string;

    constructor(public filmService: FilmService) {

    }
}
