import { IJest } from './interface';

/**
 * Skip the test on the specified platform.
 */
export function skipOn(platform: NodeJS.Platform): IJest;
export function skipOn(...platforms: NodeJS.Platform[]): IJest;
export function skipOn(...platforms: NodeJS.Platform[]): IJest {
  const skipOnPlatform = platforms.includes(process.platform);
  return {
    describe: skipOnPlatform ? describe.skip : describe,
    test: skipOnPlatform ? test.skip : test,
    it: skipOnPlatform ? it.skip : it,
  };
}
