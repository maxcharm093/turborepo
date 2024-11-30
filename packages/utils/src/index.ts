const _concatStr = (strings: (number | string)[], divider?: string): string =>
  strings.join(divider ?? ' ');

export * from './constants';
export * from './safeFetch';
export { _concatStr };
