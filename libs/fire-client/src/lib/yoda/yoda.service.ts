import { Injectable } from '@angular/core';
import { Functions, httpsCallableData } from '@angular/fire/functions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YodaService {
  yada: (data: any) => Observable<any>;

  constructor(functions: Functions) {
    this.yada = httpsCallableData(functions, 'yada', { timeout: 3_000 });
  }
}
