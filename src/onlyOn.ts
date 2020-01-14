import { onlyIf } from './onlyIf';
import { ITestClosures } from './types';

/**
 * Run one test of the block targeted for the specified platform.
 */
export function onlyOn(platform: NodeJS.Platform): ITestClosures;
export function onlyOn(...platforms: NodeJS.Platform[]): ITestClosures;
export function onlyOn(...platforms: NodeJS.Platform[]): ITestClosures {
  const onlyOnPlatform = platforms.includes(process.platform);
  return onlyIf(onlyOnPlatform);
}
