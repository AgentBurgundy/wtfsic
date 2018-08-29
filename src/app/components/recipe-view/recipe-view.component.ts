import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  currentFuckingRecipe: any = {
    id: '',
    key: ''
  };
  fuckingOptions: any = {

  };

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log('Getting info from server...');
    this.currentFuckingRecipe = 
      this.recipeService.getRandomRecipe(this.fuckingOptions);
  }

}
