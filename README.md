# @kamiazya/jest-dynamic

An extension to dynamically switch the Jest test suite according to the environment (such as platform).

## Objectives

When writing a platform-dependent test like [this issue](https://github.com/facebook/jest/issues/3652), it provides an option to flexibly change the test configuration.

## API

### `skipOn(...platforms: NodeJS.Platform)`

Using `skipOn` will skip the test on the specified platform.

```typescript
import { skipOn } from '@kamiazya/jest-dynamic';

skipOn('darwin').describe('Tests not run on Mac', () => {
  it('is sample test', () => {
    expect(true).toBe(true);
  });
});

describe('Tests', () => {
  skipOn('win32').it('should be skipped on Windows', () => {
    expect(false).toBe(false);
  });

  skipOn('linux').test('Skipped on Linux', () => {
    expect(1).toBe(1);
  });
});
```

### `onlyOn(...platforms: NodeJS.Platform)`

Use `onlyOn` to run one test of the block targeted for the specified platform.

```typescript
import { onlyOn } from '@kamiazya/jest-dynamic';

onlyOn('darwin', 'linux').describe('Run on Mac or Linux', () => {
  test('sample', () => {
    expect(true).toBe(true);
  });
});

onlyOn('win32').describe('Run on Windows', () => {
  test('sample', () => {
    expect(false).toBe(false);
  });
});
```

## License

This software is released under the MIT License, see LICENSE.

## Author

[kamiazya(Yuki Yamazaki)](https://github.com/kamiazya)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W5VDNO)
