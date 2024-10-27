import * as bcrypt from 'bcrypt';
import { compare, hash } from 'bcrypt';

const _hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return hash(password, salt);
};

const _comparePassword = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return compare(plainPassword, hashedPassword);
};

export { _comparePassword, _hashPassword };
