import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom-fifteen', // node12以降なら不要なのでバージョンアップできたら削除する
  testMatch: ["**/src/test/*.ts"],
  transform: {
    "^.+\\.ts$": 'ts-jest'
  }
};

export default config;
