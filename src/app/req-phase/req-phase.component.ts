import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SdlcServiceService } from '../sdlc-service.service';

@Component({
  selector: 'app-req-phase',
  templateUrl: './req-phase.component.html',
  styleUrls: ['./req-phase.component.css']
})
export class ReqPhaseComponent implements OnInit {

  constructor(private sdlcService:SdlcServiceService) { }
  reqForm: FormGroup; 
  editMode:boolean = false;
  reqInputsFileName: string ='';
  image:string;
  ngOnInit(): void { // get the editMOde from the service and checking it's value
  // if it's true then the editForm is loaded with the item values
    this.editMode = this.sdlcService.editReqMode;
    if(this.editMode == true){
      this.editForm();
    }else {
      this.createForm();
    }
    
  }
  // initialize the form with empty values 
  createForm(){
    this.reqForm = new FormGroup(
      {
         intro: new FormControl(null, Validators.required),
         purpose: new FormControl(null, Validators.required),
         inAudience: new FormControl(null, Validators.required),
         overallDesc: new FormControl(null, Validators.required),
         sysFeature: new FormControl(null, Validators.required),
         usecaseImage: new FormControl(null, Validators.required),
      }, 
      Validators.required
    );
  }
 
  // creating file reader input to upload file 
  //getting the data input and set the image property = to the inpu value encoded in base 64 with readAsDataUrl
  //use observables to get the file names 
  showPreviewImage(event: any) { 
    return new Observable<any>(obs => {
      const file = (event.target as HTMLInputElement).files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = (event: any) => {
             this.image = event.target.result; 
              obs.next({
                name: file.name,
                result: reader.result,
              });
          }
          reader.readAsDataURL(event.target.files[0]);
      }
      
    });
   
  }
  inputChange(document:any) { // we can access the fiie name from here file.name
    this.showPreviewImage(document).subscribe((file: any) => {
     // const name :string = file.name
      this.reqInputsFileName = (file.name).replace(/\.[^/.]+$/, ""); //for deleting the extinsion from file name 
    });
  }




  //submit the form 
  // close sdlc component by making phase saved = true
  onCreateSubmit(){
    this.sdlcService.addRequirmentFileName(this.reqInputsFileName);
    this.sdlcService.addreqPhase(
      this.reqForm.value.intro,
      this.reqForm.value.purpose,
      this.reqForm.value.inAudience,
      this.reqForm.value.overallDesc,
      this.reqForm.value.sysFeature,
      this.image
    );
    console.log(this.image);
    this.sdlcService.phaseSaved = true;
  }

//////////////////////////////////////////  EDIT  /////////////////////////////////

// initialize form with the previous values from the array
  editForm(){
    this.reqForm = new FormGroup(
      {
         intro: new FormControl(this.sdlcService.reqPhase[this.sdlcService.reqphaseItemindex].intro, Validators.required),
         purpose: new FormControl(this.sdlcService.reqPhase[this.sdlcService.reqphaseItemindex].purpose, Validators.required),
         inAudience: new FormControl(this.sdlcService.reqPhase[this.sdlcService.reqphaseItemindex].inAudience, Validators.required),
         overallDesc: new FormControl(this.sdlcService.reqPhase[this.sdlcService.reqphaseItemindex].overallDesc, Validators.required),
         sysFeature: new FormControl(this.sdlcService.reqPhase[this.sdlcService.reqphaseItemindex].sysFeature, Validators.required),
         usecaseImage: new FormControl(this.sdlcService.reqPhase[this.sdlcService.reqphaseItemindex].usecaseImage, Validators.required),
      }, 
      Validators.required
    );
      this.image = this.reqForm.get('usecaseImage').value;
  
  }
// submit the new values
  onEditSubmit(){
    this.sdlcService.updatereqPhase(
      this.sdlcService.reqphaseItemindex,
      this.reqForm.value.intro,
      this.reqForm.value.purpose,
      this.reqForm.value.inAudience,
      this.reqForm.value.overallDesc,
      this.reqForm.value.sysFeature,
      this.image,
    );
  }

}
