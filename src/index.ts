export interface IJest {
  describe: jest.Describe;
  test: jest.It;
  it: jest.It;
}

export function skip(platform: NodeJS.Platform): IJest;
export function skip(...platforms: NodeJS.Platform[]): IJest;
export function skip(...platforms: NodeJS.Platform[]): IJest {
  const skipOnPlatform = platforms.includes(process.platform);
  return {
    describe: skipOnPlatform ? describe.skip : describe,
    test: skipOnPlatform ? test.skip : test,
    it: skipOnPlatform ? it.skip : it
  };
}

export function only(platform: NodeJS.Platform): IJest;
export function only(...platforms: NodeJS.Platform[]): IJest;
export function only(...platforms: NodeJS.Platform[]): IJest {
  const onlyOnPlatform = platforms.includes(process.platform);
  return {
    describe: onlyOnPlatform ? describe.only : describe,
    test: onlyOnPlatform ? test.only : test,
    it: onlyOnPlatform ? it.only : it
  };
}

