[![GitHub Action](https://github.com/kamiazya/ts-graphviz/workflows/NodeCI/badge.svg)](https://github.com/kamiazya/ts-graphviz/actions?workflow=NodeCI) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Test Coverage](https://api.codeclimate.com/v1/badges/0ec7daa6470b162e8775/test_coverage)](https://codeclimate.com/github/kamiazya/jest-dynamic/test_coverage) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors-)<!-- ALL-CONTRIBUTORS-BADGE:END -->

# @kamiazya/jest-dynamic

An extension to dynamically switch the [Jest](https://jestjs.io/) test suite according to the environment (such as platform).

## Objectives

When writing a platform-dependent test like [this issue](https://github.com/facebook/jest/issues/3652), it provides an option to flexibly change the test configuration.

## Installation

This jest plugin can then be installed using [npm](https://www.npmjs.com/):

[![NPM](https://nodei.co/npm/@kamiazya/jest-dynamic.png)](https://nodei.co/npm/@kamiazya/jest-dynamic/)

```bash
# yarn
yarn add -D @kamiazya/jest-dynamic
# or npm
npm install --save-dev @kamiazya/jest-dynamic
```

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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://blog.kamiazya.tech/"><img src="https://avatars0.githubusercontent.com/u/35218186?v=4" width="100px;" alt=""/><br /><sub><b>Yuki Yamazaki</b></sub></a><br /><a href="https://github.com/kamiazya/jest-dynamic/commits?author=kamiazya" title="Code">💻</a> <a href="#example-kamiazya" title="Examples">💡</a> <a href="https://github.com/kamiazya/jest-dynamic/commits?author=kamiazya" title="Tests">⚠️</a> <a href="https://github.com/kamiazya/jest-dynamic/commits?author=kamiazya" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
