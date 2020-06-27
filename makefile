.DEFAULT_GOAL := default
default: 
	@echo "Please use any of the commands defined in makefile ;-)"

start: 
	pm2 start server.ts --name="deno application" --interpreter="deno" --interpreter-args="run --allow-read --allow-env --allow-net"

restart:
	pm2 restart "deno application"

delete:
	pm2 delete "deno application"

deploy:
	flyctl deploy

logs:
	flyctl deploy