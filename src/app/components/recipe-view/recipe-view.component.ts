import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  currentFuckingRecipe: any;
  fuckingOptions: any = {

  };

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.currentFuckingRecipe = 
      this.recipeService.getRandomRecipe(this.fuckingOptions)
  }

}
