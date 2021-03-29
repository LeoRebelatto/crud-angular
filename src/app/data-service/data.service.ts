import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Usuario} from './usuario'

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  usuariosLink = 'https://crudcrud.com/api/7b55ec2d7849422f94dae3b53ea7f8c5/usuarios';

  constructor(private http: HttpClient) { }

  public async saveUsuario(user: Usuario): Promise<Usuario>{
    console.log(user)
    var res = await this.http.post<Usuario>(this.usuariosLink, user).toPromise();

    return res;
  }

  public async removeUsuario(id: string | undefined): Promise<Usuario>{
    console.log(id)
    var res = await this.http.delete<Usuario>(this.usuariosLink+'/'+id).toPromise();

    return res;
  }

  public listarUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.usuariosLink)
  }

}
