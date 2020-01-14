import { Condition, ITestClosures } from './types';
import { jests, judge } from './utils';

/**
 * Skip the test on condition.
 */
export function skipIf(condition: Condition): ITestClosures {
  const skip = judge(condition);
  return skip ? jests.skip : jests.base;
}
