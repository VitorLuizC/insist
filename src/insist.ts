/**
 * Waits the received time in milliseconds.
 * @param time - The delay time in milliseconds.
 */
function wait(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * Function that returns `boolean` or a `Promise` that resolves to `boolean`.
 */
export type Condition = () => boolean | Promise<boolean>;

/**
 * Runs condition asynchronously. Assumes `false` if condition throws an error.
 * @param condition - The condition function.
 */
function check(condition: Condition): Promise<boolean> {
  try {
    return Promise.resolve(condition()).catch(() => false);
  } catch {
    return Promise.resolve(false);
  }
}

/**
 * Insists on a condition until it is satisfied. When the condition is not
 * satisfied there is a delay, defined in milliseconds, for it to be checked
 * again.
 * @example
 * ```js
 * insist(() => window.document.readyState === 'complete').then(() => {
 *   console.log('The DOM is ready!');
 * });
 * ```
 * @param condition - The condition function.
 * @param time - The delay time, in milliseconds, to execute condition again.
 */
function insist(condition: Condition, time = 200): Promise<void> {
  return check(condition).then((success) => {
    if (success) return;
    return wait(time).then(() => insist(condition, time));
  });
}

export default insist;
