import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private apiUrl = 'http://localhost:3000/cars';
  private token = 'mock-token'; // Replace with your actual token

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  getCars() {
    return this.http.get(this.apiUrl, { headers: this.getHeaders() });
  }

  getCarById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  createCar(car: any) {
    return this.http.post(this.apiUrl, car, { headers: this.getHeaders() });
  }

  updateCar(car: any) {
    return this.http.put(`${this.apiUrl}/${car.id}`, car, { headers: this.getHeaders() });
  }

  deleteCar(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}