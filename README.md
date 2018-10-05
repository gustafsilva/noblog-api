# Simple Blog API with Node Postgres + Restify 
[![Build Status](https://travis-ci.org/gustafsilva/noblog-api.svg?branch=master)](https://travis-ci.org/gustafsilva/noblog-api)
[![dependencies Status](https://david-dm.org/gustafsilva/noblog-api/status.svg)](https://david-dm.org/gustafsilva/noblog-api)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ed7443a1b3f34bdd938de6524f7b69b9)](https://app.codacy.com/app/gustafsilva/noblog-api?utm_source=github.com&utm_medium=referral&utm_content=gustafsilva/noblog-api&utm_campaign=Badge_Grade_Dashboard)


Simple Blog API Rest, using Node, Restify, PostgreSQL, Docker and docker-compose.

## Getting Started :rocket:
First we'll clone the project.
```shell
$ git clone https://github.com/gustafsilva/noblog-api.git
```

Open the project and install node dependencies.
```shell
$ cd noblog-api/
$ npm install
```

Run the database in the container.
```shell
$ cd db/
$ docker-compose up -d
```

Go back to the initial project folder and run the restify server.
```shell
$ cd ../
$ npm start
```

### Ready! :+1: You can already hack the project. :sunglasses:

## Dependencies
* [Node](https://nodejs.org/)
* [NPM](https://www.npmjs.com/)
* [Docker](https://www.docker.com/)
* [docker-compose](https://docs.docker.com/compose/)

## More Informations
* [Database](./docs/database/DATABASE.md)
* [Instructions Testing](.github/TESTING.md)

## Contributing
If you have found an error or want to improve the example, create an `issue` or `pull request`.

More information: [contributing](.github/CONTRIBUTING.md), [code of conduct](.github/CODE_OF_CONDUCT.md) and [contributors](.github/CONTRIBUTORS.md).

## Licence
The contents of this repository are covered under the [MIT License](https://github.com/gustafsilva/noblog-api/blob/master/LICENSE).