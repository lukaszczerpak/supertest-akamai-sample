
## About

Example how to use [supertest-akamai](https://github.com/lukaszczerpak/supertest-akamai) and [chai-akamai](https://github.com/lukaszczerpak/chai-akamai).

## How to run

As a pre-requisite you need to have latest version of Node installed (LTS is enough).

First, install all dependencies:

```bash
npm install
```

and run the test suite by executing the following command:

```bash
npm run test
```

In the output you should see results of each test:

```
$ npm run test

> supertest-akamai-sample@1.0.0 test /Users/lczerpak/projects.aka/supertest-akamai-example
> mocha --reporter spec --timeout 5000 --slow 1000 test/*.spec.js



  Given I am spoofed to Akamai Staging Network
    When I go to the website
      â Then I should get 200 OK from Akamai Staging Network (1102ms)


  1 passing (1s)
```

In case something goes wrong, response headers as well as response body will be printed out along with detailed reason of test failure.
