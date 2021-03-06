import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './film-catalog/main/main.component';
import {FilmsListComponent} from './film-catalog/films-list/films-list.component';
import {DetailsComponent} from './film-catalog/details/details.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'main'},
    {path: 'main', component: MainComponent},
    {path: 'films', component: FilmsListComponent},
    {path: 'film/:id', component: DetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
