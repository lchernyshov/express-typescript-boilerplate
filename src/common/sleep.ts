export const sleep = (ms: number) =>
  new Promise((r) => {
    const timeout = setTimeout(() => {
      r(true);
      clearTimeout(timeout);
    }, ms);
  });
