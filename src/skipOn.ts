import { skipIf } from './skipIf';
import { ITestClosures } from './types';

/**
 * Skip the test on the specified platform.
 */
export function skipOn(platform: NodeJS.Platform): ITestClosures;
export function skipOn(...platforms: NodeJS.Platform[]): ITestClosures;
export function skipOn(...platforms: NodeJS.Platform[]): ITestClosures {
  return skipIf(platforms.includes(process.platform));
}
