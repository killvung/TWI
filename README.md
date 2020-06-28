# TWI
The application would fetch recent tweets with Twitter API, regarding to its intention and its future let's remain in secret for now ;-)

# Motivation
The future is near, with Deno released v1.0 recently, more and more people will start getting into Deno, so it is a great time to get my hand dirty on it by building a quick application in DORM stack for social purposes. DORM stands for:

D - Deno 

O - Oak

R - React

M - MongoDB 

# Deno?
Deno is an JavaScript runtime environment authored by the creator of NodeJS Ryan Dahl, motivated by his [regrets with NodeJS](https://www.youtube.com/watch?v=M3BM9TB-8yA). From his vision, I can see how Deno runtime would be better than NodeJS for future development.

# How to run this (To be continued)?
Prerequisites:
-   Make sure you have Deno installed, you can run `brew install deno` if you have brew installed
-   After installed Deno, make sure you have [denon](https://deno.land/x/denon), the nodemon by for NodeJS, installed.
-   Make sure you have [pm2](https://github.com/Unitech/pm2) installed

After clonning the repo, run `make start` to build the static files for frontend, then run denon within pm2 for the server.

# Structure (To be continued)
The application is running on Deno server on the backend with Oak web server framework. It serves static files for the frontend built in React. The frontend fetches data through React Suspense.
