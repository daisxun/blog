import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(message: string, errcode?: number) {
    super(
      { message: message, code: errcode ? errcode : HttpStatus.OK },
      HttpStatus.OK,
    );
  }
}
