import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FilmDetailsPage } from './movie-details/film-details.page';
import { SerieDetailsPage } from './serie-details/serie-details.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'film-details/:id',
    component: FilmDetailsPage,
  },
  {
    path: 'serie-details/:id',
    component: SerieDetailsPage,
  },
  {
    path: 'film-details',
    loadChildren: () =>
      import('./movie-details/film-details.module').then(
        (m) => m.FilmDetailsPageModule
      ),
  },
  {
    path: 'serie-details',
    loadChildren: () =>
      import('./serie-details/serie-details.module').then(
        (m) => m.SerieDetailsPageModule
      ),
  },
  {
    path: 'movies-page',
    loadChildren: () => import('./movies-page/movies-page.module').then( m => m.MoviesPagePageModule)
  },
  {
    path: 'series-page',
    loadChildren: () => import('./series-page/series-page.module').then( m => m.SeriesPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
