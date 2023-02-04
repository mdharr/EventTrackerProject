import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Arcade } from '../models/arcade';

@Injectable({
  providedIn: 'root'
})
export class ArcadeService {

  url = environment.baseUrl + 'api/arcades';

  constructor(private http: HttpClient) { }

  index(): Observable<Arcade[]> {
    return this.http.get<Arcade[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('ArcadeService.index(): error retrieving arcades: ' + err)
        );
      })
    );
  }

    //TODO: show, create, update, destroy
  show(arcadeId: number): Observable<Arcade> {
    return this.http.get<Arcade>(this.url + "/" + arcadeId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('ArcadeService.show(): error retrieving arcade: ' + err)
        );
      })
    );
  }


  create(arcade: Arcade): Observable<Arcade> {
    // arcade.completed = false;
    arcade.description = '';
      return this.http.post<Arcade>(this.url, arcade).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () =>
            new Error(
              "ArcadeService.create(): error creating arcade: " + err
            )
          );
        })
      );
  }


  update(arcade: Arcade):Observable<Arcade> {
    // if(arcade.completed) {
    //   arcade.completeDate = this.datePipe.transform(Date.now(), 'shortDate');
    // }
    return this.http.put<Arcade>(this.url + "/" + arcade.id, arcade).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
          new Error(
            "ArcadeService.update(): error updating arcade: " + err
          )
        );
      })
    );
  }


  destroy(id: number):Observable<void> {
    return this.http.delete<void>(this.url + "/" + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
          new Error(
            "ArcadeService.destroy(): error deleting arcade: " + err
          )
        )
      })
    );
  }

}


