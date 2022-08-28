import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'x-rapidapi-key': 'Put Your x-rapidapi-key',
        'x-rapidapi-host': 'Put Your x-rapidapi-host',
      },
      setParams: {
        key: 'Put Your API Key',
      },
    });
    return next.handle(request);
  }
}
