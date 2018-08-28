import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { appRoutes } from './app-routes';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RecipeViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
