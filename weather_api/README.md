# WeatherApi
Makes calls to the [OpenWeatherMap API](https://openweathermap.org/api).

Note: To run these commands, make sure you are in this directory

## Build
- development image
  `docker image build --target base --tag wapi:dev .` 

- production image
  `docker image build -t wapi:prod .`

## Run
- prod container
  `docker container run --rm --name api -p 4001:4000 --env-file .env.local wapi:prod`

- dev container
  `docker container run --rm --name api -p 4001:4000 --env-file .env.local -e MIX_ENV=dev -v $(PWD):/usr/src/app -v /usr/src/app/deps wapi:dev mix phx.server`

 