import pick from '../pick';

describe('pick', () => {
  it('returns an empty object when null is provided', () => {
    expect(pick(null, ['a'])).toEqual({});
  });

  it('returns an empty object when an empty keypath is provided', () => {
    expect(pick({propA: 1}, [''])).toEqual({});
  });

  it('does not mutate the original object', () => {
    const obj = {propA: 1};
    expect(pick(obj, ['propA'])).not.toBe(obj);
  });

  it('returns a object with values picked from the provided argument', () => {
    expect(pick({propA: 1, propB: 2, propC: 3}, ['propA', 'propB'])).toEqual({
      propA: 1,
      propB: 2,
    });
  });
});
