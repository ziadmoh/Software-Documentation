import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SdlcServiceService {
  
  constructor() {
  }
  
  ////////////////////////////////// index of each Form object inside it's array /////////////////////////////////////////
  initphaseItemindex: number;
  reqphaseItemindex :number;
  designphaseItemIndex: number;

  setInitphaseItem(index:number){
    return this.initphaseItemindex = index;
   }
  
  setReqphaseItem(index:number){
     return this.reqphaseItemindex = index;
  }

  setDesignphaseItem(index:number){
     return this.designphaseItemIndex = index;
  }
  /////////////////////////////////// Forms interfaces ///////////////////////////////////////////
  initPhase:{ pTitle: string, 
    pObjs: string, 
    pMngs:string, 
    budgetInfo:string,
    pScope:string }[]=[
  ];

  reqPhase:{ intro: string, 
    purpose: string, 
    inAudience:string,
    overallDesc:string,
    sysFeature:string,
    usecaseImage:string }[]=[
  ];

  designPhase:{}[]=[];

//////////////////////////////////////////////// File names ///////////////////////////////////////
  designInputsFilesName:{}[] = [];
  reqInputsFileName:string[] = [];
//////////////////////////////////////////////// phase type 1 OR 2 OR 3 ///////////////////////////////////////////
  phaseType :string;

  setphaseType(phaseType:string){
    this.phaseType = phaseType;
  }
  getphaseType(){
    return this.phaseType;

  }

//////////////////////////////////////////////// Edit mode ///////////////////////////////////////////
  editInitMode:boolean;
  editReqMode:boolean;
//////////////////////////////////////////////// phase save and close ////////////////////////////////
  phaseSaved:boolean;
//////////////////////////////////////////////// Add new Form object inside each array ////////////////////////////////
  addInitPhase(pTitle: string,
              pObjs: string, 
              pMngs:string, 
              budgetInfo:string,
              pScope:string ){
    this.initPhase.push({pTitle:pTitle,
                         pObjs:pObjs,
                         pMngs:pMngs,
                         budgetInfo:budgetInfo,
                         pScope:pScope});
  }

  addreqPhase(intro: string,
              purpose: string, 
              inAudience:string, 
              overallDesc:string,
              sysFeature:string,
              usecaseImage:string ){
    this.reqPhase.push({intro:intro,
                        purpose:purpose,
                        inAudience:inAudience,
                        overallDesc:overallDesc,
                        sysFeature:sysFeature,
                        usecaseImage:usecaseImage});
  }

  adddesignPhase(inputs:{}[]
  ){
    this.designPhase.push(inputs);
  }
//////////////////////////////////////////////// Edit an existing Form in phase 1 & 2 ////////////////////////////////

  updateInitPhase(id:number,
                  pTitle: string, 
                  pObjs: string, 
                  pMngs:string, 
                  budgetInfo:string,
                  pScope:string ){
    this.initPhase[id].pTitle = pTitle;
    this.initPhase[id].pObjs = pObjs;
    this.initPhase[id].pMngs = pMngs;
    this.initPhase[id].budgetInfo = budgetInfo;
    this.initPhase[id].pScope = pScope;
  }

  updatereqPhase(id:number,
                 intro: string, 
                 purpose: string, 
                 inAudience:string, 
                 overallDesc:string ,
                 sysFeature:string,
                 usecaseImage:string ){
    this.reqPhase[id].intro = intro;
    this.reqPhase[id].purpose = purpose;
    this.reqPhase[id].inAudience = inAudience;
    this.reqPhase[id].overallDesc = overallDesc;
    this.reqPhase[id].sysFeature = sysFeature;
    this.reqPhase[id].usecaseImage = usecaseImage;
  }

//////////////////////////////////////////////// Deleting an existing Form in phase 1 , 2 and 3 ////////////////////////////////


  deleteinitPhase(id:number,
  ){
    this.initPhase.splice(id,1);
  }

  deletereqPhase(id:number,
  ){
      this.reqPhase.splice(id,1);
   }
  
  deletedesignPhase(id:number,
  ){
        this.designPhase.splice(id,1);
    }
///////////////////////////////////////////////Add FILE Names ////////////////////////////////////
addRequirmentFileName(fileName:string){
  this.reqInputsFileName.push(fileName);
}
addDesignFileNames(fileNames:{}[]){
  this.designInputsFilesName.push(fileNames);
}

  
}
