# Simple Blog API with Node Postgres + Restify
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

## More Informations
* [Database](./docs/database/DATABASE.md)

## Dependencies
* [Node](https://nodejs.org/)
* [NPM](https://www.npmjs.com/)
* [Docker](https://www.docker.com/)
* [docker-compose](https://docs.docker.com/compose/)

## Contributing
If you have found an error or want to improve the example, create an `issue` or `pull request`.

More information: [contributing](.github/CONTRIBUTING.md), [code of conduct](.github/CODE_OF_CONDUCT.md) and [contributors](.github/CONTRIBUTORS.md).


## Licence
The contents of this repository are covered under the [MIT License](https://github.com/gustafsilva/noblog-api/blob/master/LICENSE).