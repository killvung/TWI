.DEFAULT_GOAL := default
default: 
	@echo "Please use any of the commands defined in makefile ;-)"

start: 
	make build
	pm2 start server.ts --name="Deno application" --interpreter="denon" --interpreter-args="run --allow-read --allow-env --allow-net"

restart:
	pm2 restart "Deno application"

stop:
	pm2 stop "Deno application"

delete:
	pm2 delete "Deno application"

deploy:
	flyctl deploy

logs:
	flyctl --app twi logs

build:
	npm run build --prefix frontend/

open:
	@flyctl open /