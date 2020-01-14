[![GitHub Action](https://github.com/kamiazya/ts-graphviz/workflows/NodeCI/badge.svg)](https://github.com/kamiazya/ts-graphviz/actions?workflow=NodeCI) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Test Coverage](https://api.codeclimate.com/v1/badges/0ec7daa6470b162e8775/test_coverage)](https://codeclimate.com/github/kamiazya/jest-dynamic/test_coverage)

# @kamiazya/jest-dynamic

An extension to dynamically switch the [Jest](https://jestjs.io/) test suite according to the environment (such as platform).

## Objectives

When writing a platform-dependent test like [this issue](https://github.com/facebook/jest/issues/3652), it provides an option to flexibly change the test configuration.

## API

### Importing

```typescript
import { onlyIf, onlyOn, skipIf, skipOn } from '@kamiazya/jest-dynamic';
```

### Skip

### `skipOn(...platforms: NodeJS.Platform)`

Using `skipOn` will skip the test on the specified platform.

**Example**

```typescript
skipOn('darwin')
  .describe('Tests not run on Mac', () => {
    it('is sample test', () => {
      expect(true).toBe(true);
    });
  });
```

### `skipIf(condition: boolean | (() => boolean))`

Using `skipIf` will skip the test on condition.

**Example**

```typescript
skipIf(process.env.NODE_ENV === 'CI')
  .describe('This run on local test', () => {
      expect(true).toBe(true);
  });
```

### Only

### `onlyOn(...platforms: NodeJS.Platform)`

Use `onlyOn` to run one test of the block targeted for the specified platform.

**Example**

```typescript
onlyOn('darwin', 'linux')
  .describe('Run on Mac or Linux', () => {
    test('sample', () => {
      expect(true).toBe(true);
    });
  });

onlyOn('win32')
  .describe('Run on Windows', () => {
    test('sample', () => {
      expect(false).toBe(false);
    });
  });
```

### `onlyIf(condition: boolean | (() => boolean))`

Use `onlyIf` to run one test of the block targeted on condition.

**Example**

```typescript
describe('Tests', () => {
  onlyIf(process.platform === 'win32')
    .it('should be run on Windows', () => {
      expect(false).toBe(false);
    });

  onlyIf(() => process.platform === 'linux')
    .test('Run on Linux', () => {
      expect(1).toBe(1);
    });
});
```

### Advanced Usage

**Example**

Conditions can also be set on variables to increase reusability.

```typescript
const onlyOnLinuxAndMac = onlyOn('linux', 'darwin');
const skipOnLinux = skipOn('linux');
const skipOnMac = skipOn('darwin');

onlyOnLinuxAndMac
  .describe('Tests', () => {
    skipOnLinux
      .test('sample', () => {
        expect(false).toBe(false);
      });

    skipOnMac
      .test('sample', () => {
        expect(false).toBe(false);
      });
  });
```

## License

This software is released under the MIT License, see LICENSE.

## Author

[kamiazya(Yuki Yamazaki)](https://github.com/kamiazya)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W5VDNO)
