import dataFetcher from '../../src/data-fetcher';

describe('dataFetcher', () => {
  it('should return true when called', () => {
    expect(dataFetcher.test()).toBe(true);
  });
});
