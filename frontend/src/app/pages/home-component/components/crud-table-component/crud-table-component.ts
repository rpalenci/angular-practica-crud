import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsService } from '../../../../services/cars-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-crud-table-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [CarsService],
  templateUrl: './crud-table-component.html',
  styleUrl: './crud-table-component.css',
})
export class CrudTableComponent implements OnInit {
  cars: any[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.carsService.getCars().subscribe(
      (data: any) => {
        this.cars = data;
        console.log('Coches obtenidos:', this.cars);
      },
      (error) => {
        console.log('Error al obtener los coches:', error);
      }
    );
  }

  addCar() {
    console.log('add');
  }

  editCar(car: any) {
    console.log(car.id + 'edit');
  }

  deleteCar(car: any) {
    console.log(car.id + 'delete');
  }

  detailCar(car: any) {
    console.log(car.id + 'detail');
  }
}
