/**
 * Returns a Promise which is resolved after delay.
 * @param time Delay time in milliseconds.
 */
function delay(time: number): Promise<any> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * A function that checks if it don't need to keep insisting.
 * Assumes `false` if an error is thrown.
 */
type InsistΛ = () => boolean | Promise<boolean>;

/**
 * Returns check result or `false` if an error is thrown.
 * @param λ A function that checks if it don't need to keep insisting.
 */
function getSuccess(λ: InsistΛ): boolean | Promise<boolean> {
  try {
    return λ();
  } catch (_) {
    return false;
  }
}

/**
 * Insistently runs a callback and only resolves the promise when its result is truthy.
 * @param λ A function that checks if it don't need to keep insisting.
 * @param time Time in millisencons to insist again.
 */
function Insistence(λ: InsistΛ, time: number = 200): Promise<void> {
  return new Promise((resolve) => {
    const insist = (): Promise<any> => {
      const success = getSuccess(λ);
      return Promise.resolve(success)
        .then((success) => {
          if (!success)
            throw new Error('Success not achieved. Keep insisting.');
          resolve();
        })
        .catch(() => delay(time).then(insist));
    };
    return insist();
  });
}

export { Insistence as default, InsistΛ };
