import {GeneralObject} from '../types';

export default function merge(...objs: GeneralObject[]) {
  const final = {};

  for (const obj of objs) {
    mergeRecursively(final, obj);
  }

  return final;
}

function mergeRecursively(objA: GeneralObject, objB: GeneralObject) {
  for (const key in objB) {
    if (!objB.hasOwnProperty(key)) {
      continue;
    } else if (isMergableValue(objB[key]) && isMergableValue(objA[key])) {
      objA[key] = mergeRecursively(objA[key], objB[key]);
    } else {
      objA[key] = objB[key];
    }
  }

  return objA;
}

function isMergableValue(value: any) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
