import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { compare, hash } from 'bcrypt';

@Injectable()
export class BcryptService {
  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return hash(password, salt);
  }

  async validate(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return compare(plainPassword, hashedPassword);
  }
}
