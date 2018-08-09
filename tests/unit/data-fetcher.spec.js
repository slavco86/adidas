import dataFetcher from '../../src/data-fetcher';

describe('dataFetcher', () => {
  it('homeContent should return mens data for /men', () => {
    const route = {
      path: '/men',
    };

    expect(dataFetcher.homeContent(route)).toEqual({
      franchises: 'Men',
    });
  });

  it('homeContent should return womens data for /women', () => {
    const route = {
      path: '/women',
    };

    expect(dataFetcher.homeContent(route)).toEqual({
      franchises: 'Women',
    });
  });

  it('franchiseContent should return correct data depending on route params', () => {
    const route = {
      params: {
        gender: 'women',
        franchise: 'pod',
      },
    };

    const content = {
      men: [
        {
          franchise: 'pod',
          content: {
            test: true,
          },
        },
        {
          franchise: 'incorrect',
          content: {
            test: false,
          },
        },
      ],
      women: [
        {
          franchise: 'pod',
          content: {
            test: true,
          },
        },
        {
          franchise: 'incorrect',
          content: {
            test: false,
          },
        },
      ],
    };

    expect(dataFetcher.franchiseContent(route, content)).toEqual({
      content: {
        test: true,
      },
    });
  });
});
