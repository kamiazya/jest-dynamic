import { IJest } from './interface';
/**
 * Run one test of the block targeted for the specified platform.
 */
export function onlyOn(platform: NodeJS.Platform): IJest;
export function onlyOn(...platforms: NodeJS.Platform[]): IJest;
export function onlyOn(...platforms: NodeJS.Platform[]): IJest {
  const onlyOnPlatform = platforms.includes(process.platform);
  return {
    describe: onlyOnPlatform ? describe.only : describe,
    test: onlyOnPlatform ? test.only : test,
    it: onlyOnPlatform ? it.only : it,
  };
}
