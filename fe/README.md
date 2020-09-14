## Build
- dev image
`docker image build --target dev -t fe:dev .`

- prod image
`docker image build -t fe:prod .`

## Run
- dev container
 `docker container run -it --rm -p 3001:3000 -v $(PWD):/usr/src/fe -v /usr/src/fe/node_modules fe:dev npm start`

- prod container
`docker run -p 8080:80 fe:prod`
