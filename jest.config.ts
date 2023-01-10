import type {Config} from 'jest';

/** @type {import('ts-jest').JestConfigWithTsJest} */

const config: Config = {
  verbose:true,
  preset:'ts-jest',
  testEnvironment:'node',
  rootDir:'./',
  transform:{
    '^.+\\.ts?$':'ts-jest'
  },
  coverageDirectory:'./coverage',
  collectCoverageFrom:[
    '<rootDir/core/Domain/**/*.ts>',
    '<rootDir/packages/**/*.ts>',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns:['<rootDir>/node_modules'],
  moduleFileExtensions:['ts','js'],
  projects:[
    {
      displayName:{
        name:'core',
        color:'blue'
      },
      testEnvironment:'node',
      transform:{
        '^.+\\.ts?$':'ts-jest'
      },
      testMatch:['<rootDir>/core/Domain/**/**/*.spec.ts']
    },
    {
      displayName:{
        name:'packages',
        color:'green'
      },
      testEnvironment:'node',
      transform:{
        '^.+\\.ts?$':'ts-jest'
      },
      testMatch:['<rootDir>/packages/**/*.spec.ts']
    }
  ]
};

export default config;

