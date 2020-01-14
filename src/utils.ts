import { Condition, ITestClosures } from './types';

function createTestClosures(mode?: 'skip' | 'only'): ITestClosures {
  switch (mode) {
    case 'only':
    case 'skip':
      return {
        describe: describe[mode],
        test: test[mode],
        it: it[mode],
      };
    default:
      return { describe, test, it };
  }
}

export const jests: { only: ITestClosures; skip: ITestClosures; base: ITestClosures } = {
  base: createTestClosures(),
  skip: createTestClosures('skip'),
  only: createTestClosures('only'),
};

export function judge(condition: Condition): boolean {
  return typeof condition === 'boolean' ? condition : condition();
}
