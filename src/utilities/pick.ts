import {GeneralObject} from '../types';

function pick(obj: GeneralObject | null, keyPaths: string[]) {
  if (obj == null || keyPaths.length === 0) return {};
  return keyPaths.reduce((acc, key) => ({...acc, [key]: obj[key]}), {});
}

export default pick;
