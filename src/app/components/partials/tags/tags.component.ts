import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tag } from '../../../shared/models/Tags';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent {
  tags?: Tag[];
  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
  }

}
