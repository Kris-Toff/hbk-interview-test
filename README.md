# HBK Interview Test 2 #

One challenge I encountered before working on this is how to have one repository for both frontend and backend. To solve this issue I used Inertiajs, which I am still new.

- This is my setup, I am using Laravel 12 + Docker + Sail + Inertia + Vuejs 3 and MySQL in a Windows Machine.
- These steps are based on the Laravel documentation: https://laravel.com/docs/12.x/installation

## Setup Instructions ##

- git clone https://github.com/Kris-Toff/hbk-interview-test.git
- `cd hbk-interview-test` folder
- run `npm install && npm run build`
- run `npm run dev` ( this will start the frontend server, do not close )
- Start docker
- Open new terminal `cd hbk-interview-test` folder
- run `docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs`
- run `./vendor/bin/sail up` ( this will start the server, do not close )
- Open new terminal then `cd hbk-interview-test` folder
- run `./vendor/bin/sail artisan migrate`
- open http://localhost in browser
