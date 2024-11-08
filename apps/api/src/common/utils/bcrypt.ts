import * as bcrypt from 'bcryptjs';
import { compare, hash } from 'bcryptjs';

const _hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return hash(password, salt);
};

const _validatePassword = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return compare(plainPassword, hashedPassword);
};

export { _hashPassword, _validatePassword };
