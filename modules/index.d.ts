/**
 * A proxy object that represents undefined
 */
export const Undefined: object;

/**
 * Returns val if it's not Undefined, otherwise, returns fallback.
 * @param val The value to obtain if it's not Undefined.
 * @param fallback The fallback value if val is Undefined.
 */
export function either<TValue, TFallback>(val: TValue, fallback: TFallback): TValue | TFallback;

/**
 * Encapsulates an object in a Proxy for safe Object property access.
 * @param object The object to encapsulate
 */
export default function safe<T extends object>(obj: T): T;
