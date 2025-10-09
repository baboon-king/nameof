function nameof<T extends Function>(fn: T): string;
function nameof<T extends object>(key: keyof T): keyof T;
function nameof<T extends object>(obj: T): keyof T;
function nameof<T, K1 extends keyof T>(obj: T, k1: K1): K1;
function nameof<T, K1 extends keyof T, K2 extends keyof T[K1]>(
  obj: T,
  k1: K1,
  k2: K2
): K2;
function nameof<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2]
>(obj: T, k1: K1, k2: K2, k3: K3): K3;
function nameof<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3]
>(obj: T, k1: K1, k2: K2, k3: K3, k4: K4): K4;

function nameof(...args: any[]): any {
  const lastArg = args.at(-1);

  if (typeof lastArg === "function") {
    return lastArg.name;
  }

  if (typeof lastArg === "object" && lastArg !== null) {
    const k = Object.keys(lastArg).at(0);
    if (k) {
      return k;
    } else {
      throw new Error("Object must have exactly one string-key property");
    }
  }

  return lastArg;
}

export { nameof, nameof as default };
