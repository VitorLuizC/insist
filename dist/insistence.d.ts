/**
 * A function that checks if it don't need to keep insisting.
 * Assumes `false` if an error is thrown.
 */
declare type InsistΛ = () => boolean | Promise<boolean>;
/**
 * Insistently runs a callback and only resolves the promise when its result is truthy.
 * @param λ A function that checks if it don't need to keep insisting.
 * @param time Time in millisencons to insist again.
 */
declare function Insistence(λ: InsistΛ, time?: number): Promise<void>;
export { Insistence as default, InsistΛ };
