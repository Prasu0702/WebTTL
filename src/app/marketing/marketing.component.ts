import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent {

  constructor(private el: ElementRef) { }

  // Function to check if the element is in the viewport
  isElementInView(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= window.innerHeight);
  }

  // HostListener to call a function every time the user scrolls
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const logos = this.el.nativeElement.querySelectorAll('.fade-in');

    logos.forEach((logo: HTMLElement) => {
        if (this.isElementInView(logo)) {
            logo.classList.add('active');
        } else {
            logo.classList.remove('active');
        }
    });
  }
}
