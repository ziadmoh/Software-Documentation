import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { PlaceholderDirective } from '../placeholder.directive';
import { SdlcServiceService } from '../sdlc-service.service';
import { ViewFileComponent } from '../view-file/view-file.component';

@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})
export class AllFilesComponent implements OnInit {

  constructor(private sdlcService:SdlcServiceService, private cmpFactoryResolver:ComponentFactoryResolver,) { }
////////////////////////////////////////// create viewContainerRef //////////////////////////////////////////
  @ViewChild(PlaceholderDirective,{static:false}) viewPhaseHost :PlaceholderDirective;
  
  designFiles:{}[]=[]; // design phase files
  usecaseImage:{}[]; // requirment files 
  ngOnInit(): void {
    this.usecaseImage = this.sdlcService.reqPhase; 
      this.designFiles = this.sdlcService.designPhase ;
  }
////////////////////////////////////////// create a deatailed view of the selected item /////////////////////////////////////////
// create instance of the viewFIle component on each click
// we set phase type manually from the html template of this component 
//we get the index by looping throw the array by ngFor in the html template of this component
//we set index of specific array depending on the phase type of the selected item   

onLoadView(index:number,phaseType:string){
  
    this.sdlcService.setphaseType(phaseType);
    const viewPahseCompFactrory = this.cmpFactoryResolver.resolveComponentFactory(ViewFileComponent);
    const hostViewConatinerRef = this.viewPhaseHost.viewContainerRef;
    hostViewConatinerRef.clear();
    hostViewConatinerRef.createComponent(viewPahseCompFactrory);
    if (phaseType == '2'){
      this.sdlcService.setReqphaseItem(index);
    }else{  
      this.sdlcService.setDesignphaseItem(index);
    }
   }
   
}
