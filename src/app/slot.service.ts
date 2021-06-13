import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  constructor(private http:HttpClient) { }
  getVaccinationSlotsByPin(pin:any,date:string){
   
    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`)
  }
  getVaccinationSlotsByDistrict(dId:any,date:string){
  
    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${dId}&date=${date}`)
  }
  getVaccinationSlotsByLatLong(lat:any,lon:any){
    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/centers/public/findByLatLong?lat=${lat}&long=${lon}`)
  }

}
