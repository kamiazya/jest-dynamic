import { Condition, ITestClosures } from './types';
import { jests, judge } from './utils';

/**
 * Run one test of the block targeted on condition.
 */
export function onlyIf(condition: Condition): ITestClosures {
  const only = judge(condition);
  return only ? jests.only : jests.base;
}
