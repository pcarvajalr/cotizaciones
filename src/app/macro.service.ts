import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { ObservacionService } from './observacion.service';
import { Observacion } from './observacion';
import { OBSERVACIONES } from './mock-observaciones';

@Injectable({
  providedIn: 'root'
})
export class MacroService {

  macros: Observacion[] = OBSERVACIONES;
  url = 'api/observaciones'
  constructor(private observacionService: ObservacionService, private http: HttpClient) { }
  
  obtenerObservaciones(): Observable<Observacion[]>{
    return this.http.get<Observacion[]>(this.url).pipe(
      tap(_ => this.log('obtener lista observaciones')),
      catchError(this.handleError<Observacion[]>('obtenerObservaciones', []))
    );
  }
  log(observacion: string) {
    this.observacionService.agregar(observacion);
  }

  handleError<T>(operation = 'operation', result?: T) {
    console.log('handleError');
    return (error: any): Observable<T> => {

      console.log('handleError return');
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} error: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
