import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  res:any;
  Name:any;
  p:number = 1;
  constructor(public ref:PlayerService){}
  ngOnInit()
  {
 this.ref.getPlayers().subscribe(
   (resp:any)=>
   {
     this.res=resp;
     console.log(resp);
   }
 )
  }
  search()
  {
    if(this.Name =="")
    {
      this.ngOnInit();
    }
    else{
      this.res=this.res.filter((rej: any)=>
        {
          return rej.Name.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
        });
    }
  }


}
