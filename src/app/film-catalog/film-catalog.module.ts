import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {FilmItemComponent} from './film-item/film-item.component';
import {FilmsListComponent } from './films-list/films-list.component';
import {DetailsComponent} from './details/details.component';
import {FilmsComponent} from './films/films.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        MatSelectModule
    ],
    declarations: [
        MainComponent,
        FilmItemComponent,
        FilmsListComponent,
        FilmsComponent,
        DetailsComponent
    ]
})
export class FilmCatalogModule {
}
