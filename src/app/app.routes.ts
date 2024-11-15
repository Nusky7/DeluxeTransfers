import { Routes } from '@angular/router';
import { CarSlideComponent } from './components/car-slide/car-slide.component';
import { FormPickupComponent } from './components/form-pickup/form-pickup.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path: 'cars', component: CarSlideComponent },
    {path: 'about', component: AboutComponent },
    {path: 'form-pickup', component: FormPickupComponent },

];
