import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { PlaceholderDirective } from '../placeholder.directive';
import { SdlcServiceService } from '../sdlc-service.service';
import { ViewPhaseComponent } from '../view-phase/view-phase.component';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // compExist = true;
    phaseView:boolean = false;
    sdlcViewed:boolean = false;
    toggle:boolean = false;
  constructor(private cmpFactoryResolver:ComponentFactoryResolver, 
              private sdlcService:SdlcServiceService) { }
  @ViewChild(PlaceholderDirective,{static:false}) sdlcHost :PlaceholderDirective;
  @ViewChild(PlaceholderDirective,{static:false}) viewPhaseHost :PlaceholderDirective;
    



  initInputs:{ pTitle: string, pObjs: string, pMngs:string, budgetInfo:string ,pScope:string }[]=[
  ];

  reqInputs:{ intro: string, purpose: string, inAudience:string, overallDesc:string ,sysFeature:string,usecaseImage:string }[]=[
  ];

  designInputs:{}[] = [
  ];
  
  ngOnInit(): void { 
    this.phaseView = false;
    this.sdlcViewed = false;
    this.initInputs = this.sdlcService.initPhase;
    this.reqInputs = this.sdlcService.reqPhase;
    this.designInputs = this.sdlcService.designPhase;
    
  
  }
  createSdlcComponent() { // show sdlc component & end edit mode & end saving mode 
    this.sdlcService.editInitMode = false;
    this.sdlcService.editReqMode = false;
    this.phaseView = false;
    this.sdlcViewed = true;
    this.sdlcService.phaseSaved = false;
   } 
   /////////////////////////////////////////////////////////////////////////////////////
   // create instance of the view component on each click
   // hide sdlc component & shows view phase component 
   // we set phase type manually from the html template of this component 
   // we get the index by looping throw the array by ngFor in the html template of this component
   // we set index of specific array depending on the phase type of the selected item 
   onLoadView(index:number,phaseType:string){ 
    this.sdlcService.setphaseType(phaseType) ;
    const viewPahseCompFactrory = this.cmpFactoryResolver.resolveComponentFactory(ViewPhaseComponent);
    const hostViewConatinerRef = this.viewPhaseHost.viewContainerRef;
    hostViewConatinerRef.clear();
    hostViewConatinerRef.createComponent(viewPahseCompFactrory);
    this.sdlcViewed = false;
    this.phaseView = true;
    if(phaseType == '1'){
    this.sdlcService.setInitphaseItem(index);
    }else if (phaseType == '2'){
      this.sdlcService.setReqphaseItem(index);
    }else{
      this.sdlcService.setDesignphaseItem(index);
    }
    
   
   }
   
   
   
}
