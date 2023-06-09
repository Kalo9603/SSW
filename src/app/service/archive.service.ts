import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable ({
  providedIn: 'root'
})
export class ArchiveService {

  private key = "8afc54ce";
  private URL = "https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/";

  constructor(private http: HttpClient) {}

  public new(): Observable<string> {
    return this.http.get<string>(this.URL + "new?secret=ssw2022");
  }

  public get(): Observable<string> {
    return this.http.get<string>(this.URL + "get?key=" + this.key);
  }

  public set(newData: string): Observable<string> {
    return this.http.post<string>(this.URL + "set?key=" + this.key, JSON.stringify(newData));
  }
  
}
