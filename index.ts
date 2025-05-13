export function nameof<T, K extends keyof T = keyof T>(obj: T, key: K): K {
  return key;
}

export default nameof;
