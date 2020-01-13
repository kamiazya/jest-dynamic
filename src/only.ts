import { IJest } from './interface';
export function only(platform: NodeJS.Platform): IJest;
export function only(...platforms: NodeJS.Platform[]): IJest;
export function only(...platforms: NodeJS.Platform[]): IJest {
  const onlyOnPlatform = platforms.includes(process.platform);
  return {
    describe: onlyOnPlatform ? describe.only : describe,
    test: onlyOnPlatform ? test.only : test,
    it: onlyOnPlatform ? it.only : it,
  };
}
