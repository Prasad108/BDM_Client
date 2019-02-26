import { HttpHeaders } from '@angular/common/http';
import {environment } from '../environments/environment';;

export class AppSettings {
    public static API_ENDPOINT = environment.url;

    public static HTTP_OPTIONS = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
 }
