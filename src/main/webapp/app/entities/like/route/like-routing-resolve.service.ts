import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ILike } from '../like.model';
import { LikeService } from '../service/like.service';

export const likeResolve = (route: ActivatedRouteSnapshot): Observable<null | ILike> => {
  const id = route.params['id'];
  if (id) {
    return inject(LikeService)
      .find(id)
      .pipe(
        mergeMap((like: HttpResponse<ILike>) => {
          if (like.body) {
            return of(like.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default likeResolve;
