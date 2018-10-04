# Contributing

## How to Start Contributing

Begin by cloning the project.
```shell
$ git clone https://github.com/gustafsilva/noblog-api.git
```

Next, open the project and install node dependencies.
```shell
$ cd noblog-api/
$ npm install
```

Use Docker Compose to start the database.
```shell
$ cd db/
$ docker-compose up -d
```

Finally, navigate to the root folder and run the restify server.
```shell
$ cd ../
$ npm start
```

Now you are ready to work on the project. Once you have some changes, checkout a new branch using Git.
```shell
$ git checkout -b {description of your change}
```

Commit your changes.
```shell
$ git add -A
$ git commit -m “{description of the changes you made}”
```

Next push your changes to GitHub.
```
git push -u origin {same as the description you used for your branch}
```

Now go to GitHub and open a PR for your change. If you are fixing an issue, mention the issue number in your PR.


## How to Open Issues

If you notice a feature this project should have, or a bug that needs to be fixed, head over to GitHub and open a new issue for this project. Make sure you add a detailed description. If the issue is a bug, add the steps necessary to reproduce the bug.



