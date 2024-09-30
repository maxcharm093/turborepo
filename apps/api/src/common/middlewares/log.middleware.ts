import { concatStr } from '@/common/utils';
import { LoggerService } from '@/common/utils/logger.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly _logger: LoggerService;
  constructor() {
    this._logger = new LoggerService();
  }
  use(req: Request, res: Response, next: NextFunction) {
    this._logger.log(
      concatStr([req.method, req.originalUrl, res.statusCode]),
      'Request',
    );
    next();
  }
}
