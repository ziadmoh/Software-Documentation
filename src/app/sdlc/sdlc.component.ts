import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SdlcServiceService } from '../sdlc-service.service';

@Component({
  selector: 'app-sdlc',
  templateUrl: './sdlc.component.html',
  styleUrls: ['./sdlc.component.css']
})
export class SdlcComponent implements OnInit {
  phaseSaved:boolean = false;
  constructor(private sdlcService:SdlcServiceService) { }
  phasesForm:FormGroup;

  ngOnInit(): void {
    
    this.phasesForm = new FormGroup ({
      'phaseSelection' : new FormControl('',Validators.required)
    });
    this.phasesForm.get('phaseSelection').setValue('');
  }
  ////////////////////////////////////////////////////////////////
  //click the close button to close the phase we are currently on by setting the value of the selection equal null
  onClosePhase(){ 
    this.phasesForm.get('phaseSelection').setValue('');
  }
  //check when the save button clicked in any phase to close the sdlc component 
  isPhaseSaved(){
    if(this.sdlcService.phaseSaved == true){
      this.phasesForm.get('phaseSelection').setValue('');
     return this.phaseSaved = true;
     
    }else{
      return this.phaseSaved = false;
    }
  }

}
