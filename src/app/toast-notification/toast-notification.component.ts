import { Component } from "@angular/core";
import {NotificationsService, SimpleNotificationsComponent} from "angular2-notifications";


@Component( {
    selector: "toast-message",
    templateUrl: "toast-notification.component.html"
})

export class ToastNotificationComponent{
   options = {
        position: ["bottom", "right"],
        timeOut: 5000,
        lastOnBottom: true,
        pauseOnHover: true
    };
    
    constructor(private _service: NotificationsService){
        
    }
    success(title:string, message: string){
        this._service.success(title,message);
    }
    error(title:string, message: string){
        this._service.error(title,message);
    }
    alert(title:string, message: string){
        this._service.alert(title,message);
    }
    info(title:string, message: string){
        this._service.info(title,message);
    }
}