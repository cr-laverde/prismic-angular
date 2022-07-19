import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';
import { PrismicGraphqlService } from 'src/prismic-graphql/prismic-graphql.service';
import { ContenidoCardDTO, ContenidoCardResponde } from '../dto/contenido-card-dto';
import { getCardQuery } from '../querys/contenido-card.query';

@Injectable({
  providedIn: 'root',
})
export class ContenidoHomeService {
  constructor(
    private prismicService: PrismicGraphqlService,
  ) {}

  getContenidoCard(): Observable<ContenidoCardDTO> {
    return from(
      this.prismicService.executeQuery(getCardQuery())
    ).pipe(
      first(),
      map(
        (response: ContenidoCardResponde): ContenidoCardDTO => {
          return response.data.allCards.edges[0].node as ContenidoCardDTO
        }
      ),
      catchError(error => {
        return throwError(
          new Error(
            'No se pudo obtener el contenido del documento'
          )
        );
      })
    );
  }
}
