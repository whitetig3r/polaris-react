import {GeneralObject} from '../types';

function get(obj: GeneralObject | undefined, keypath: string) {
  if (obj == null) return undefined;

  const keys = keypath.split('.');
  let acc = obj;
  for (let i = 0; i < keys.length; i++) {
    const val = acc[keys[i]];
    if (val === undefined) return val;
    acc = val;
  }

  return acc;
}

export default get;
