import get from '../get';

describe('get', () => {
  it('returns undefined when the path does not exist', () => {
    expect(get({}, 'a')).toBeUndefined();
  });

  it('returns a value for a single keypath', () => {
    expect(get({hello: 'polaris'}, 'hello')).toBe('polaris');
  });

  it('returns the value for a complex keypath', () => {
    expect(get({keyA: {keyB: {keyC: 'polaris'}}}, 'keyA.keyB.keyC')).toBe(
      'polaris',
    );
  });

  it('returns undefined when the object is not provided', () => {
    expect(get(undefined, 'keyA.keyB.keyC')).toBeUndefined();
  });
});
