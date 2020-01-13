import { only } from '../index';

only('darwin').describe('describe on darwin', () => {
  describe('onlyOn', () => {
    only('darwin').describe('onlyOn', () => {
      it('it 1', () => {
        expect(true).toBe(true);
      });
    });
  });
});
