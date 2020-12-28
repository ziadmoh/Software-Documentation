import { Component, OnInit } from '@angular/core';
import { SdlcServiceService } from '../sdlc-service.service';

@Component({
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.css']
})
export class ViewFileComponent implements OnInit {
  phaseType:string ;
  usecaseImage:string;
  reqInputsFileName:string[] = [];
  designInputs:{}[] = [];
  designInputsFilesName:{}[]=[];
  constructor(private sdlc:SdlcServiceService) { }

  ngOnInit(): void {
    this.designInputsFilesName[this.sdlc.designphaseItemIndex] = this.sdlc.designInputsFilesName[this.sdlc.designphaseItemIndex];
    this.reqInputsFileName[this.sdlc.reqphaseItemindex] = this.sdlc.reqInputsFileName[this.sdlc.reqphaseItemindex];
    console.log(this.designInputsFilesName);
    this.phaseType = this.sdlc.getphaseType();
    this.compLoading(this.phaseType);
   // console.log(this.designInputs);
  }
    ////////////////////////////////////////////////////
  // loading the component of the item which has been selected in the allfiles onLoadView() 
  // get the specified item from the array by its index which we passed from the allfiles component 
  //we set the values of the properties equal to the values in the array 
  compLoading(phaseType:string){
     if(phaseType == '2'){
      this.usecaseImage = this.sdlc.reqPhase[this.sdlc.reqphaseItemindex].usecaseImage;
    }else {
      this.designInputs[this.sdlc.designphaseItemIndex] = this.sdlc.designPhase[this.sdlc.designphaseItemIndex];
    }

  }
  
}
