import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  miembros: any[] = [];

  constructor( private http: HttpClient) { 
  // console.log("Servicio de Info Página listo");

  this.cargarInfo();
  this.cargarEquipo();

  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        //console.log(resp);
      });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-31822.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {
        this.miembros = resp;
        // console.log(this.miembros);
      });
  }

}
