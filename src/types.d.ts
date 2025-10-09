// For Jest/Testing Library
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeDefined(): R;
      toBeChecked(): R;
      toBeDisabled(): R;
      toHaveValue(value: string): R;
      toHaveLength(length: number): R;
      toBe(value: any): R;
      toHaveBeenCalledTimes(times: number): R;
      toHaveBeenCalledWith(...args: any[]): R;
    }
    
    interface Expect {
      <T>(actual: T): Matchers<T>;
    }
    
    interface Mock {
      calls: any[][];
    }
  }
}

// For Storybook support
declare module '@storybook/react-vite' {
  import { Meta as BaseMeta, StoryObj as BaseStoryObj } from '@storybook/react';
  
  export type Meta<T> = BaseMeta<T>;
  export type StoryObj<T> = BaseStoryObj<T>;
}

// For CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

// For Vitest
declare module 'vitest' {
  export interface Assertion<T = any> extends jest.Matchers<void, T> {
    not: Assertion<T>;
  }
  export function describe(name: string, fn: () => void): void;
  export function it(name: string, fn: () => void | Promise<void>): void;
  export function expect<T>(actual: T): Assertion<T>;
  export const vi: {
    fn(): jest.Mock;
  };
}