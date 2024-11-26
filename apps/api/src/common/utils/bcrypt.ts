import * as bcrypt from 'bcryptjs';
import { compare, hash } from 'bcryptjs';

const _hashString = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return hash(password, salt);
};

const _validateString = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await compare(plainPassword, hashedPassword);
};

export { _hashString, _validateString };
