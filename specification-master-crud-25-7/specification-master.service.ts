import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Specification } from './specification';

@Injectable({
  providedIn: 'root'
})
export class SpecificationMasterService {
private _endPoint=environment.baseUrl;

  constructor(private http:HttpClient) { }

  getSpecification(){
    return this.http.get<Specification[]>(this._endPoint + '/get');
  }
  saveSpecification(specification:Specification){
  return this.http.post(this._endPoint + '/save',specification);
  }
  deleteSpecification(id:number){
    return this.http.delete(this._endPoint + '/delete/' + id);

  }
  updateSpecification(specification:Specification){
return this.http.put(this._endPoint + '/update', specification )
  }
 
}
