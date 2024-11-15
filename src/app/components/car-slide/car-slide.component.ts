import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-car-slide',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './car-slide.component.html',
  styleUrl: './car-slide.component.scss'
})
export class CarSlideComponent  {

  constructor(private router: Router) { }

  navigateToForm(carType: string): void {
    this.router.navigate(['/form-pickup'], { queryParams: { carType: carType } }).then(() => {
      const element = document.getElementById('formContainer'); 
      if (element) {
        const button = element.querySelector('#reserva');
        if (button) {
          button.classList.add('blink-border');
        }
        element.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    });
  }

}