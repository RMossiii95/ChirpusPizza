import { Component } from '@angular/core';
import { menuItem } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';
  item : menuItem[] = [new menuItem("Meat Lover's", "Pizza", 17.99 ), new menuItem("Spaghetti", "Pasta", 11.99), new menuItem("Steak and Potatoes", "Dinner Plate", 21.99), 
  new menuItem("Lobster", "Seafood", 23.99), new menuItem("Salmon Filet", "Seafood", 19.99), new menuItem("Ice Cream", "Dessert", 6.99)];
}
