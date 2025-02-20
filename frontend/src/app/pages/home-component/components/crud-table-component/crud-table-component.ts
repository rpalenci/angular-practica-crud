import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-table-component',
  imports: [CommonModule],
  templateUrl: './crud-table-component.html',
  styleUrl: './crud-table-component.css'
})
export class CrudTableComponent {
  cars = [
    { id: '10221', marca: "Peugeot", modelo: '208 GT', total:"22000" },
    { id: '10222', marca: "Peugeot", modelo: '208 GT Line', total:"20000" },
    { id: '10223', marca: "Peugeot", modelo: '208', total:"16000" },
  ];

  addCar(){
    console.log("add");
  }

  editCar(car:any ) {
    console.log(car.id+"edit");
  }

  deleteCar(car:any){
    console.log(car.id+"delete");
  }

  detailCar(car: any){
    console.log(car.id +"detail");
  }
}