import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Routes } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-form-pickup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-pickup.component.html',
  styleUrl: './form-pickup.component.scss'
})

export class FormPickupComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  selectedCarType: string = '';
  pickupLocation: string = 'estacion1';
  destination: string = '';
  passengers: string = '';
  
  cityControl = new FormControl('');
  cities: string[] = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Murcia', 'Bilbao'];
  filteredCities!: Observable<string[]>;

  ngAfterViewInit(): void  {
    if (isPlatformBrowser(this.platformId)) {
      this.setupCarSelection();
      this.setupCityAutocomplete();
    }
  }

  setupCarSelection() {
    const carouselItems = document.querySelectorAll('.carousel-item img');
    carouselItems.forEach(img => {
      img.addEventListener('click', (event) => {
        const carType = (event.target as HTMLImageElement).getAttribute('data-car-type');
        if (carType) {
          this.selectedCarType = carType;
        }
      });
    });
  }

  setupCityAutocomplete() {
    this.filteredCities = this.cityControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(city => city.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    console.log('Reserva realizada:', {
      carType: this.selectedCarType,
      pickupLocation: this.pickupLocation,
      destination: this.destination,
      passengers: this.passengers
    });
    
    // Aquí la lógica para procesar la reserva


  }
}

  

  


