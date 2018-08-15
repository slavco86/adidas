let path = [];

function firstItem(item) {
  if (item.indexOf('-') === -1) {
    return item;
  }
  return `['${item}']`;
}

function reducer(accumulator, currentVal) {
  if (currentVal.indexOf('-') === -1) {
    return accumulator = accumulator + '.' + currentVal;
  }
  return accumulator = accumulator + `['${currentVal}']`;
}

function pathFinder(obj) {
  const key = Object.getOwnPropertyNames(obj);
  if (typeof obj[key[0]] === 'object') {
    path.push(key[0]);
    return pathFinder(obj[key]);
  }
  path.push(key[0]);
  console.info(path);
  return path.reduce(reducer, '');
}

describe('ContentEditor', () => {
  it('create a path from an object key', () => {
    const object = {
      'test-1': {
        'test-2': {
          test3: {
            hello: 'world',
          },
        },
      },
    };

    expect(pathFinder(object)).toBe("['test-1']['test-2'].test3.hello");
  });
});
