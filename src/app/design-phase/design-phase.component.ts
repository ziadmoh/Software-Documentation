import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormArray, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { SdlcServiceService } from '../sdlc-service.service';

@Component({
  selector: 'app-design-phase',
  templateUrl: './design-phase.component.html',
  styleUrls: ['./design-phase.component.css']
})
export class DesignPhaseComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private sdlc:SdlcServiceService) { }
  
  inputsArray = []; //holds the form when submit
  designInputsFilesName:string[] = []  //holds files' names
  designForm:FormGroup; 
  loopCounter:number = 0;

  ngOnInit(): void {
    this.designForm = this.fb.group({
      newFiles: this.fb.array([
        this.fb.control(null,Validators.required)
      ],Validators.required)
    });
  }
  get newFiles() {
    return this.designForm.get('newFiles') as FormArray;
  }
  addNewFiles() { //triggerd when click button to add new input
    this.newFiles.push(this.fb.control(null,Validators.required));
  }
  onSubmit(){ // save form
    this.sdlc.addDesignFileNames(this.designInputsFilesName);
    this.sdlc.adddesignPhase(this.inputsArray); // push the form to the array in the service
    this.sdlc.phaseSaved = true; // change the mode to saved to close sdlc component
  }

showPreviewImage(event: any) { //use observables to get the file names b
  return new Observable<any>(obs => {
    let i = 0;
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      for( i = this.loopCounter ; i <this.newFiles.length ; i++){
        const reader = new FileReader();
        reader.onload = (event: any) => {
            this.inputsArray[i] = event.target.result;
            obs.next({
              name: file.name,
              result: reader.result,
            });
        }
        reader.readAsDataURL(event.target.files[0]);
        
      }
      this.loopCounter = i;
    }
  });
}
inputChange(document:any) { // we can access the fiie name from here file.name
  this.showPreviewImage(document).subscribe((file: any) => {
    const name :string = file.name
    this.designInputsFilesName.push(name.replace(/\.[^/.]+$/, ""));
  });
}

}
