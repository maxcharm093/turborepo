import { concatStr } from '@/common/utils';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ReqLogInterceptor implements NestInterceptor {
  private readonly _logger: Logger;
  constructor() {
    this._logger = new Logger('REQUEST INTERCEPTOR');
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const _startTime = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          this._logger.log(
            concatStr([
              req.method,
              req.originalUrl,
              concatStr(['+', Date.now() - _startTime, 'ms'], ''),
            ]),
          ),
        ),
      );
  }
}
