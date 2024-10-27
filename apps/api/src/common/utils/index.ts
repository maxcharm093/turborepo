const isEmptyObj = (obj: object) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

const concatStr = (strings: (number | string)[], divider?: string): string =>
  strings.join(divider ?? ' ');

const getRandomInt = (min: number, max: number) => {
  const minCelled = Math.ceil(min),
    maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCelled) + minCelled); // The maximum is exclusive and the minimum is inclusive
};

export { concatStr, getRandomInt, isEmptyObj };

export * from './bcrypt';
export * from './env';
