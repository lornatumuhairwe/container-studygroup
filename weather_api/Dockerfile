FROM elixir:1.10.3-alpine AS base

ENV MIX_ENV=prod
WORKDIR /usr/src/app

RUN mix local.hex --force && mix local.rebar --force

COPY mix.* ./

RUN mix do deps.get, deps.compile

COPY . .

######################
####   BUILD     #####
######################
FROM base AS build

RUN mix do compile, release

##### RELEASE #######
FROM alpine:3.11 AS release

RUN apk add --no-cache ncurses-libs

WORKDIR /app
COPY --from=build /usr/src/app/_build/prod/rel/weather_api ./

CMD ["bin/weather_api", "start"]
