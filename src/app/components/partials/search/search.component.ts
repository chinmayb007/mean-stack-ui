import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchTerm: string = '';
  constructor(actRoute: ActivatedRoute, private router: Router) {
    actRoute.params.subscribe((params) => {
      if (params?.['searchTerm']) {
        this.searchTerm = params?.['searchTerm'];
      }
    });
  }

  search(term: string): void {
    if (term) {
      this.router.navigateByUrl(`/search/${term}`);
    }else{
      this.reset();
    }
  }

  reset(): void {
      this.router.navigateByUrl(`/`);
  }
}
