import { IHashTable } from '../interfaces/IHashTable';

export class Parser<T> {
  constructor(
    private dictionary: IHashTable<T>,
    private pattern: RegExp,
  ) { }

  public execute(str: string): Map<T, string> {
    const map: Map<T, string> = new Map();
    for (let match = this.pattern.exec(str); match !== null; match = this.pattern.exec(str)) {
      const key = this.dictionary[match[0]];
      if (key) {
        const regExpArr = this.pattern.exec(str);
        const value = regExpArr?.[0] ?? '';
        map.set(key, value);
      }
    }
    return map;
  }
}
