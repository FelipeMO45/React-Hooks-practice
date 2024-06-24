export const delayImport = <T extends unknown>(importFunc: () => Promise<T>, delay: number): Promise<T> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(importFunc());
    }, delay);
  });
};
