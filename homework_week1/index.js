const difference = (a, b) => a.filter(elem => !b.includes(elem));

const uniq = array =>
  array.reduce((result, elem) => (result.includes(elem) ? result : [...result, elem]), []);

const flatten = array =>
  array.reduce(
    (result, elem) => (Array.isArray(elem) ? [...result, ...flatten(elem)] : [...result, elem]),
    [],
  );

const groupBy = (array, value) => {
  return array.reduce((result, elem) => {
    if (!result[elem[value]]) {
      result[elem[value]] = [];
    }
    result[elem[value]] = [...result[elem[value]], elem];
    return result;
  }, {});
};

const chunk = (array, size) =>
  array.reduce(
    (result, elem, index) =>
      index % size === 0 ? [...result, array.slice(index, index + size)] : result,
    [],
  );

console.log(
  groupBy(
    [
      { gender: 'male', name: 'Max' },
      { gender: 'male', name: 'Fred' },
      { gender: 'female', name: 'Jane' },
    ],
    'gender',
  ),
);
console.log(
  difference([-4, -12, 18, -2, -6, -14, 8, 7, -10, -7, -4, -16, 0, -13, 9, -4, -14], [-12, -14]),
);
console.log(chunk(['a', 'b', 'c', 'd'], 3));
console.log(uniq([2, 1, 2, 1, 3, 3, 3, 4, 0]));
console.log(flatten([1, [2, [3, [4]], 5]]));
