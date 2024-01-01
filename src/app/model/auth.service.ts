import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthService{

  constructor(private restService: RestService) {}

  authenticate(username: string, password: string): Observable<boolean> {
    return this.restService.authentication(username, password);
  }

  get authenticated(): boolean {
    return this.restService.token !== null && this.restService.token !== undefined;
  }

  clear() {
    this.restService.token = undefined;
  }
}
