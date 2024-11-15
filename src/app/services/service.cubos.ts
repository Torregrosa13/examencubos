import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'; // Importa el archivo de configuración
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCubos {

  private token: string | null = localStorage.getItem('token');

  constructor(private _http: HttpClient) { }

  getCubos(): Observable<any>{
    let request = "api/cubos"
    let url = environment.apiUrl + request
    return this._http.get(url)
    }

    getCubo(id: number):Observable<any>{
        let request = "api/cubos/" + id
        let url = environment.apiUrl + request
        return this._http.get(url)
    }

    getMarcas(): Observable<any>{
        let request = "api/cubos/marcas"
        let url = environment.apiUrl + request
        return this._http.get(url)
    }
//   getCubo(id: number) {
//     return new Promise((resolve, reject) => {
//       const request = `api/cubos/${id}`;
//       const url = environment.apiUrl + request;  // Usa la URL desde el environment
//       axios.get(url)
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   getMarcas() {
//     return new Promise((resolve, reject) => {
//       const request = 'api/cubos/marcas';
//       const url = environment.apiUrl + request;  // Usa la URL desde el environment
//       axios.get(url)
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   getCubosMarca(marca: string) {
//     return new Promise((resolve, reject) => {
//       const request = `api/cubos/cubosmarca/${marca}`;
//       const url = environment.apiUrl + request;  // Usa la URL desde el environment
//       axios.get(url)
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   getToken(user: any) {
//     return new Promise((resolve, reject) => {
//       const request = 'api/manage/login';
//       const url = environment.apiUrl + request;
//       axios.post(url, user)
//         .then((response) => {
//           this.token = response.data.response;  // Aquí estamos usando `this` de manera correcta con función de flecha
//           localStorage.setItem('token', this.token as string);
//           resolve(this.token);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }
  

//   getPerfilUsuario() {
//     return new Promise((resolve, reject) => {
//       if (!this.token) {
//         return reject('No se ha podido autenticar');
//       }
//       const request = 'api/manage/perfilusuario';
//       const url = environment.apiUrl + request;  // Usa la URL desde el environment
//       axios.get(url, {
//         headers: {
//           'Authorization': `Bearer ${this.token}`
//         }
//       })
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   getComentarios(id: number) {
//     return new Promise((resolve, reject) => {
//       const request = `/api/ComentariosCubo/GetComentariosCubo/${id}`;
//       const url = environment.apiUrl + request;  // Usa la URL desde el environment
//       axios.get(url)
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   getCompras() {
//     return new Promise((resolve, reject) => {
//       const request = 'api/compra/comprasusuario';
//       const url = environment.apiUrl + request;  // Usa la URL desde el environment
//       axios.get(url, {
//         headers: {
//           'Authorization': `Bearer ${this.token}`
//         }
//       })
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }
}
