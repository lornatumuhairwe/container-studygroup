build:
	docker-compose build

build-dev:
	docker-compose -f docker-compose.dev.yaml build

run: 
	docker-compose up

run-dev:
	docker-compose -f docker-compose.dev.yaml up 

stop:
	docker-compose down

stop-dev:
	docker-compose -f docker-compose.dev.yaml down

