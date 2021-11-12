import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  personas:Persona[] = [];
  persona:Persona = new Persona();
  constructor(private service:ServiceService, private router:Router) { }


  ngOnInit(){
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }

  NOSE(){
    
  }

}
