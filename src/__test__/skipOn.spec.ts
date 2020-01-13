import { skipOn } from '../skipOn';

describe.each([['darwin' as NodeJS.Platform], ['win32' as NodeJS.Platform], ['linux' as NodeJS.Platform]])(
  'platform %s',
  platform => {
    skipOn(platform).describe(`skip on ${platform}`, () => {
      it('it', () => {
        expect(true).toBe(true);
      });
    });
  },
);
