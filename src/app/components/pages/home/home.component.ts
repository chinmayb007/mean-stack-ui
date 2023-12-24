import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SearchComponent, TagsComponent, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodService: FoodService, actRoute: ActivatedRoute) {
    actRoute.params.subscribe((params) => {
      if (params?.['searchTerm']) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params?.['searchTerm']
        );
      }
      else if (params?.['tag']) {
        this.foods = this.foodService.getAllFoodsByTag(
          params?.['tag']
        );
      }
      else {
        this.foods = foodService.getAll();
      }
    });
  }
}
