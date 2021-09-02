import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema();

  constructor(
    private router: Router,
    private temaService: Tema
  ) { }

  ngOnInit(){
    if(environment.token == ""){
      // alert("Sua sessão expirou, faça o login novamente.")
      this.router.navigate(["/entrar"])
    }
  }

  // cadastrarTema(){
  //   this.temaService.postTema(this.tema).subscribe((resp: Tema) =>{
  //     this.tema.
  //   })
  // }

}
