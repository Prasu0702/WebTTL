import 'bootstrap/dist/js/bootstrap.min.js';
import { Component, ViewEncapsulation} from '@angular/core';


import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
  export class HeaderComponent {
    searchTerm: string = '';
    searchNotFound: boolean = false;

    executeSearch() {
        this.searchNotFound = false; // Reset the value
        if (this.searchTerm) {
            let found = (window as any).find(this.searchTerm);
            if (!found) {
                this.searchNotFound = true; // Set to true if term is not found
            }
        }
    }

    clearSearch() {
        this.searchTerm = '';       
        this.searchNotFound = false; 
    }

    onSearchChange() {
        if (!this.searchTerm) {
            this.clearSearch();
        }
    }
    checkInput() {
      if (!this.searchTerm.trim()) {
          this.searchNotFound = false;
      }
  }
  
}
