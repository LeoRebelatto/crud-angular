import { Usuario } from './../data-service/usuario';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import {} from '../data-service/data.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  
  user: Usuario = {
    nome:'',
    _id: undefined
  };
  usuarios: Usuario[] = [];

  adicionarUsuario(){
    this.data.saveUsuario(this.user).then(x=>{
      this.ListarUsuarios();
    })
    
  }
  RemoverUsuario(id:string | undefined){
    this.data.removeUsuario(id).then(x=>{
      this.ListarUsuarios();
    })
  }

  ListarUsuarios(){
    this.data.listarUsuarios().subscribe(data=>{
      this.usuarios=data;
    })
  }

  constructor(private data: DataService) { 
    this.ListarUsuarios()
  }

  ngOnInit(): void {
  }

}
