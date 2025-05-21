type O = object;

function nameof<T extends O, K extends keyof T = keyof T>(obj: T, key: K): K;
function nameof<T extends object, K extends keyof T = keyof T>(key: K): K;
function nameof<T extends O>(obj: T): T extends O ? keyof T : never;
function nameof(arg1: any, arg2?: any): any {
  if (arguments.length === 1 && typeof arg1 === "object" && arg1 !== null) {
    const keys = Object.keys(arg1);
    if (keys.length !== 1) {
      throw new Error("Object must have exactly one property");
    }
    return keys[0];
  }
  return arg2 ?? arg1;
}

export { nameof, nameof as default };
