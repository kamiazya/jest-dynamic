import { skip, only } from '../index'

only("darwin").describe("describe on darwin", () => {
  describe("skipOn", () => {
    skip("win32").describe("skipOn('win32')", () => {
      it("it 2", () => {
        expect(true).toBe(true);
      });
    });
  });
});
