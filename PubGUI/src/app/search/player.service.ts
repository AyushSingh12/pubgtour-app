import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  constructor(private httpref:HttpClient) { }
  public getPlayers()
  {
    return this.httpref.get("https://my-json-server.typicode.com/narendra894/data/players");
  }
}
