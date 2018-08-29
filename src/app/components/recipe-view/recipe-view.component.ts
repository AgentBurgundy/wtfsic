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
    title: ''
  };
  fuckingOptions: any = {

  };

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log('Getting info from server...');
    this.recipeService.getRandomRecipe(this.fuckingOptions)
      .subscribe(data => 
        {
          this.currentFuckingRecipe = data;
          console.log(`Received data - ${this.currentFuckingRecipe.id} ${this.currentFuckingRecipe.key}`);
        });
    
  }

}
