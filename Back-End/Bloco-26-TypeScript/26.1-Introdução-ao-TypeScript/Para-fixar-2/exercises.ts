export function greeter(name: string):string {
  return `Olá ${name}!`;
};

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
};

export function add(x: number, y: number): number {
  return x + y;
};

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
};

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
};

export function square(side: number): number {
  return side ** 2;
};

export function rectangle(base: number, height: number): number {
  return base * height;
};

export function losangle(diagD: number, diagd: number): number {
  return (diagD * diagd) / 2;
};

export function trapeze(largerBase: number, smallerBase: number, height: number): number {
  return ((largerBase + smallerBase) * height) / 2;
};

export function circle(ray: number): number {
  return (ray ** 2) * 3.14;
};