import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }


  loggingservice(message:string) {
    console.log("A method has been executed " + message)
  }
}
