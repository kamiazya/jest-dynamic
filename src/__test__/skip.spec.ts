import { only, skip } from '../index';

only('darwin').describe('describe on darwin', () => {
  describe('skipOn', () => {
    skip('win32').describe('skipOn', () => {
      it('it 2', () => {
        expect(true).toBe(true);
      });
    });
  });
});
