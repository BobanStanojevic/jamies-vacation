# jamies-vacation

Download the project either via git or download button, run `yarn` and `yarn serve`;
API provided used in the project requires the API key to be set. Creation of the API key can be achieved on [Register for API KEY](https://developer.accuweather.com/)
In the root of the project create a `.env` file and setup

```
VUE_APP_ACCURATE_WEATHER_API_KEY
```

## Tech stack

- Vue
- Vuex
- Typescript
- SCSS

## Architecture and folder structure

I've split the scripts according to their use:

- services are as providers
- styles for general styles, mixins, variables, grid
- factories are for reusable functions
- stores are used for all logic regarding the view/model communication, I choosed Root Store Pattern for bundling up stores
- enums are used for storing hard coded values
- components are organized according to Atomic Design Pattern

## Approach

My reasoning while building this user case is about the choice, so I decided to format and present data so he could make this choice based on his preferance. I've came to the conclusion that his decision will probably be based on 2 factors, number of sunny days and average temperature. I've used 5 day forecast, since this is the maximum number of days provided by the API in basic/free version.
I've decided that I should focus on two fronts, technical exelence and VueJS mastery

## List of potential improvements

### Current APP improvements:

- Unit tests for the services, factories, and vuex actions.
- Better error handling
- Logging and debugging service on the level of the API (Sentry integration for example)
- Improve typings
- Better UI/UX interface

### Future Development

- Provide a user input about the desired location
- Better visualization of the presentation data (graph, long term weather prognosis)
