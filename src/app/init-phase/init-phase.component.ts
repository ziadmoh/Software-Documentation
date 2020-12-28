import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SdlcServiceService } from '../sdlc-service.service';

@Component({
  selector: 'app-init-phase',
  templateUrl: './init-phase.component.html',
  styleUrls: ['./init-phase.component.css']
})
export class InitPhaseComponent implements OnInit {

  constructor(private sldcService:SdlcServiceService) { }
  initForm: FormGroup; 
  editMode = false;
  phaseType:string;
  ngOnInit(): void { // get the editMOde from the service and checking it's value
                    // if it's true then the editForm is loaded with the item values
    this.editMode = this.sldcService.editInitMode;
    if(this.editMode == true){
      this.editForm();
    }else {
      this.createForm();
    }
  }
  // initialize the form with empty values 
  createForm(){
    this.initForm = new FormGroup(
      {
         pTitle: new FormControl(null, Validators.required),
         pObjs: new FormControl(null, Validators.required),
         pMngr: new FormControl(null, Validators.required),
         budgetInfo: new FormControl(null, Validators.required),
         pScope: new FormControl(null, Validators.required),
      }, 
      Validators.required
    );
  }

  //submit the form 
  // close sdlc component by making phase saved = true
  onCreateSubmit(){
    this.sldcService.addInitPhase(
      this.initForm.value.pTitle,
      this.initForm.value.pObjs,
      this.initForm.value.pMngr,
      this.initForm.value.budgetInfo,
      this.initForm.value.pScope
    );
    this.sldcService.phaseSaved = true;
  }
  
////////////////////////////////////////////////////////// Edit ///////////////////////////

// initialize form with the previous values from the array
editForm(){
    this.initForm = new FormGroup(
      {
         pTitle: new FormControl(this.sldcService.initPhase[this.sldcService.initphaseItemindex].pTitle, Validators.required),
         pObjs: new FormControl(this.sldcService.initPhase[this.sldcService.initphaseItemindex].pObjs, Validators.required),
         pMngr: new FormControl(this.sldcService.initPhase[this.sldcService.initphaseItemindex].pMngs, Validators.required),
         budgetInfo: new FormControl(this.sldcService.initPhase[this.sldcService.initphaseItemindex].budgetInfo, Validators.required),
         pScope: new FormControl(this.sldcService.initPhase[this.sldcService.initphaseItemindex].pScope, Validators.required),
      }, 
      Validators.required
    );
}
// submit the new values
onEditSubmit(){
    this.sldcService.updateInitPhase(
      this.sldcService.initphaseItemindex,
      this.initForm.value.pTitle,
      this.initForm.value.pObjs,
      this.initForm.value.pMngr,
      this.initForm.value.budgetInfo,
      this.initForm.value.pScope,
    );
  
}



}
