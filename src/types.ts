export interface ITestClosures {
  describe: jest.Describe;
  test: jest.It;
  it: jest.It;
}

export type Condition = boolean | (() => boolean);
