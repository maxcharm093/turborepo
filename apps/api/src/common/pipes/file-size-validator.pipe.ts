import { FileValidator } from '@nestjs/common';
import { IFile } from '@nestjs/common/pipes/file/interfaces';

export interface FileSizeValidatorOptions {
  fileSize: number;
}

/**
 * Defines the built-in FileType File Validator. It validates incoming files mime-type
 * matching a string or a regular expression. Note that this validator uses a naive strategy
 * to check the mime-type and could be fooled if the client provided a file with renamed extension.
 * (for instance, renaming a 'malicious.bat' to 'malicious.jpeg'). To handle such security issues
 * with more reliability, consider checking against the file's [magic-numbers](https://en.wikipedia.org/wiki/Magic_number_%28programming%29)
 *
 * @see [File Validators](https://docs.nestjs.com/techniques/file-upload#validators)
 *
 * @publicApi
 */
export class FileSizeValidatorPipe extends FileValidator<
  FileSizeValidatorOptions,
  IFile
> {
  buildErrorMessage(): string {
    return `Max file size is ${(this.validationOptions.fileSize * 0.000001).toFixed()} Mb`;
  }

  isValid(file?: IFile): boolean {
    if (!this.validationOptions) {
      return true;
    }

    return (
      !!file &&
      'mimetype' in file &&
      +file.size < this.validationOptions.fileSize
    );
  }
}
