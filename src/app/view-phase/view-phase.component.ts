import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { PlaceholderDirective } from '../placeholder.directive';
import { SdlcServiceService } from '../sdlc-service.service';

@Component({
  selector: 'app-view-phase',
  templateUrl: './view-phase.component.html',
  styleUrls: ['./view-phase.component.css']
})
export class ViewPhaseComponent implements OnInit {

  constructor(private cmpFactoryResolver:ComponentFactoryResolver,
    private sdlc:SdlcServiceService) { }

    editMode = false;
    phaseType:string ;
    deleted = false;
  pTitle:string;
  pObjs:string;
  pMngr:string;
  budgetInfo:string;
  pScope:string;
  intro: string;
  purpose: string; 
  inAudience:string; 
  overallDesc:string; 
  sysFeature:string; 
  usecaseImage:string;
  designInputs:{}[] = [];


  ngOnInit(): void {
    this.editMode = false;
    this.deleted = false;
    this.phaseType = this.sdlc.getphaseType();
    this.compLoading(this.phaseType); // loading the component with the selcted item data
  }
  ////////////////////////////////////////////////////
  // loading the component of the item which has been selected in the home onLoadView() 
  // get the specified item from the array by its index which we passed from the home component 
  //we set the values of the properties equal to the values in the array 
  compLoading(phaseType:string){ 
    if(phaseType == '1' ){
      this.pTitle = this.sdlc.initPhase[this.sdlc.initphaseItemindex].pTitle;
      this.pObjs = this.sdlc.initPhase[this.sdlc.initphaseItemindex].pObjs;
      this.pMngr = this.sdlc.initPhase[this.sdlc.initphaseItemindex].pMngs;
      this.budgetInfo = this.sdlc.initPhase[this.sdlc.initphaseItemindex].budgetInfo;
      this.pScope = this.sdlc.initPhase[this.sdlc.initphaseItemindex].pScope;
    }else if(phaseType == '2'){
      this.intro = this.sdlc.reqPhase[this.sdlc.reqphaseItemindex].intro;
      this.purpose = this.sdlc.reqPhase[this.sdlc.reqphaseItemindex].purpose;
      this.inAudience = this.sdlc.reqPhase[this.sdlc.reqphaseItemindex].inAudience;
      this.overallDesc = this.sdlc.reqPhase[this.sdlc.reqphaseItemindex].overallDesc;
      this.sysFeature = this.sdlc.reqPhase[this.sdlc.reqphaseItemindex].sysFeature;
      this.usecaseImage = this.sdlc.reqPhase[this.sdlc.reqphaseItemindex].usecaseImage;
    }else {
      this.designInputs[this.sdlc.designphaseItemIndex] = this.sdlc.designPhase[this.sdlc.designphaseItemIndex];
    }

  }
  ///////////////////////////////////////////////////////////////////////
  // we turn to edit mode
  // phases 1 or 2 shown when edit mode is true to edit the form
  onEdit(){
    this.editMode = true;
    this.deleted = false;
    if(this.phaseType =='1'){
      this.sdlc.editInitMode = this.editMode;
    }else if(this.phaseType == '2'){
      this.sdlc.editReqMode = this.editMode;
    }
  }

 ///////////////////////////////////////////////////////////////////////
  // call the delete method to delet the item by it's index from the array
  // then set delet to true and check it with ngIf 
  onDelete(phaseType:string){
    if(phaseType == '1' ){
      this.sdlc.deleteinitPhase(this.sdlc.initphaseItemindex);
    }else if (phaseType == '2' ){
      this.sdlc.deletereqPhase(this.sdlc.reqphaseItemindex);
    }else{
      this.sdlc.deletedesignPhase(this.sdlc.designphaseItemIndex);
    }
    this.deleted = true;
  }
  
}
