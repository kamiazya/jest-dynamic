import { IJest } from './interface';
export function skip(platform: NodeJS.Platform): IJest;
export function skip(...platforms: NodeJS.Platform[]): IJest;
export function skip(...platforms: NodeJS.Platform[]): IJest {
  const skipOnPlatform = platforms.includes(process.platform);
  return {
    describe: skipOnPlatform ? describe.skip : describe,
    test: skipOnPlatform ? test.skip : test,
    it: skipOnPlatform ? it.skip : it,
  };
}
