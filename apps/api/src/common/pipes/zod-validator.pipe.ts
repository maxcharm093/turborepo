import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidatorPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: unknown, metadata: ArgumentMetadata) {
    const validateFields = this.schema.safeParse(value);
    if (!validateFields.success)
      throw new BadRequestException({
        errors: validateFields.error.flatten().fieldErrors,
      });
    return validateFields.data;
  }
}
