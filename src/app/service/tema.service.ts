import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://blogpessoaldojotape.herokuapp.com/temas`, this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://blogpessoaldojotape.herokuapp.com/temas/${id}`, this.token)
  }

  getByTemaDescricao(descricao: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`${environment.apiURL}/temas/descricao/${descricao}`)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>(`${environment.apiURL}/temas`, tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>(`${environment.apiURL}/temas`, tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`${environment.apiURL}/temas/${id}`, this.token)
  }
}