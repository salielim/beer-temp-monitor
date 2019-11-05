# Beer Temperature Monitoring App

Monitor the current temperature of each container and notify user when the temperatures are outside the correct range.

# Architecture of Application

## Frontend:

React.js

Code repo on `https://github.com/salielim/beer-temp-monitor-frontend`

Deployed on Netlify, `https://beer-temp-monitor.netlify.com/`

## Backend:

Node.js Express Microservice

Code repo on `https://github.com/salielim/beer-temp-monitor-backend`

Deployed on Google Cloud Functions, `https://us-central1-noderite-crawler.cloudfunctions.net/beer-temp-monitor-backend`

Note that the backend microservice does not run locally but deployed directly to the serverless Google Cloud Functions

# Getting started with Frontend App

To get started with the app, clone the repo and then install the needed modules:

```
$ git clone https://github.com/salielim/beer-temp-monitor-frontend.git
$ npm install
```

Single command to run the app:

```
$ npm start
```

Single command to run the tests:

```
$ npm test
```

Deploy frontend to Netlify:

```
$ npm run build

$ npm install netlify-cli -g

$ netlify deploy
```

Also this Git project has been setup with Continuous Deployment from this Git repository.

# Questions I would ask

In a real-life scenario, you would ask questions to clarify any doubts but for this challenge, document the questions you would ask and provide your own answers in the readme file.

Q1. What does the existing application architecture look like and where is the data coming from https://temperature-sensor-service.herokuapp.com/sensor/1?

A1. The data from the API is from a Raspberry Pi connected to temperature sensors.

Q2. Where will this app be primarily used, on a mobile or tablet?

A2. On a tablet horizontally.

Q3. Should this be a native mobile app or a mobile-responsive web app or a Progressive Web Apps (PWA)?

A3. Mobile-responsive web app.

Q4. Is this a static or dynamic range of beers, will more beer types be added in the future?

A4. Static range of beers for now.

## What are the highlights of your logic/code writing style?

- Simple and elegant logic /code
- Refactored the code so that there's little repetition
- As little code as possible to fulfill the task's requirements
- KISS style "keep it stupid simple"
- Setup of React app is minimalistic
- Only installed features or packages that is needed
- Organised the folder structure using components and model (data)

## What could you do better in your code next iteration?

- I only had time to test using Jest the rendering of components, code test coverage is at 66.67% which is acceptable but not ideal and can be improved
- Add unit tests to ensure that the live temperature is indeed within the min and max range
- Add unit tests on the backend for the method
- Add custom CSS styles instead of using Bootstrap CDN
- Use serverless to deploy backend and enable the function to be run locally

# Constraints

[x] You must use JavaScript technology for most of the solution

[x] The solution must be implemented with an acceptable level of automated tests; we
should be able to verify it from the command line.

[x] There must be a web front-end component as well as a back-end component.

[x] Your back-end component must integrate with our temperature service available at https://temperature-sensor-service.herokuapp.com/sensor/{id} ​with ​{id} being any ​string ​value you pass through. The service will return a JSON containing the string value you passed as ​id ​plus a ​temperature ​value between ​-2 ​and ​10​. Your back-end component must then be the data provider for your front-end component.

[x] You must not use a code generator (e.g. create-react-app, Angular-CLI, Rails etc.) because we want to see how you do it and how you create your own setup (not how the frameworks does it for you), so that we can assess your own software design skills.

[x] You are free to use libraries (eg. React, Jest, ExpressJS) but you cannot use anything that creates the structure/scaffolding for you, for the same reason above

[x] The solution must run via the command-line and we should be able to boot it with a single command. The less dependencies on the operating system, the better. Once the minimum requirements are met, we must be able to boot it with a one-liner.

[x] A database server isn’t required, if needed, mock the data in any application layer.
