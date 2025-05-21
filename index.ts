type O = object;

function nameof<T extends O, K extends keyof T = keyof T>(obj: T, key: K): K;
function nameof<T extends object, K extends keyof T = keyof T>(key: K): K;
function nameof(arg1: any, arg2?: any): any {
  return arg2 ?? arg1;
}

export { nameof, nameof as default };
