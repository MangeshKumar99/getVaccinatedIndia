import { Component, OnInit } from '@angular/core';
import { SlotService } from '../slot.service';

@Component({
  selector: 'app-latlong',
  templateUrl: './latlong.component.html',
  styleUrls: ['./latlong.component.css']
})
export class LatlongComponent implements OnInit {
  data:any

  constructor(private service:SlotService) { }

  ngOnInit(): void {
  }
  showSlotDetailsByLatAndLong(lat:any,long:any){
    this.service.getVaccinationSlotsByLatLong(lat,long).subscribe(data=>{
      console.log(data)
      this.data=data
    })
  }

}
