import { onlyOn } from '../onlyOn';

describe.each([['darwin' as NodeJS.Platform], ['win32' as NodeJS.Platform], ['linux' as NodeJS.Platform]])(
  'platform %s',
  platform => {
    onlyOn(platform).describe(`only on ${platform}`, () => {
      it('it', () => {
        expect(true).toBe(true);
      });
    });
  },
);
