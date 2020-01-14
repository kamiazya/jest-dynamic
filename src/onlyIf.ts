import { Condition, ITestClosures } from './types';
import { jests } from './utils';

/**
 * Run one test of the block targeted on condition.
 */
export function onlyIf(condition: Condition): ITestClosures {
  const only = typeof condition === 'boolean' ? condition : condition();
  return only ? jests.only : jests.base;
}
