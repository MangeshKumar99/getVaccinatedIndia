import { Component, OnInit } from '@angular/core';
import { SlotService } from '../slot.service';
@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {
  data:any

  constructor(private service:SlotService) { }

  ngOnInit(): void {
  }
  showSlotDetailsByPin(myPin:any,myDate:string){
    this.service.getVaccinationSlotsByPin(myPin,myDate).subscribe(data=>{
      console.log(data)
      this.data=data
    })
  }

}
