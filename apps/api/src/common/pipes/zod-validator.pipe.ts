import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodSchema, z } from 'zod';

export class ZodValidatorPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  transform(
    value: unknown,
    // metadata: ArgumentMetadata,
  ): z.infer<typeof this.schema> {
    const validateFields = this.schema.safeParse(value);
    if (!validateFields.success)
      throw new BadRequestException({
        errors: validateFields.error.flatten().fieldErrors,
      });
    return validateFields.data;
  }
}
