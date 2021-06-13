import { Component, OnInit } from '@angular/core';
import { SlotService } from '../slot.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  data:any

  constructor(private service:SlotService) { }

  ngOnInit(): void {
  }
  showSlotDetailsByDistrict(dId:any,myDate:string){
    this.service.getVaccinationSlotsByDistrict(dId,myDate).subscribe(data=>{
      console.log(data)
      this.data=data
    })
  }

}
