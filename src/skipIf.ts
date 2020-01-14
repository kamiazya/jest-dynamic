import { Condition, ITestClosures } from './types';
import { jests } from './utils';

/**
 * Skip the test on condition.
 */
export function skipIf(condition: Condition): ITestClosures {
  const skip = typeof condition === 'boolean' ? condition : condition();
  return skip ? jests.skip : jests.base;
}
