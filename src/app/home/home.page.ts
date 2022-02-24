import { Component } from '@angular/core';
import { ScreenRecorder } from 'capacitor-screen-recorder';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  startRecording(){
    ScreenRecorder.start().then((res:any)=>{
      console.log(res)
    })
  }

  stopRecording(){
    ScreenRecorder.stop().then((res)=>{
      console.log(res)
    })
  }

}
