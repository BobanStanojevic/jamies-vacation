# jamies-vacation

Download the project either via git or download button, run `yarn` and `yarn serve`;
API provided used in the project requires API key to be set. Creation of the API key can be achieved on [Register for API KEY](https://developer.accuweather.com/)
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

I've splitted the scripts acording to their use:

- services are used for async actions
- styles for general styles, mixins, variables, grid
- factories are for reusable functions
- stores are used for all logic regarding the view/model communication, I choosed Root Store Pattern for bundling up stores
- enums are used for storing hardcoded values
- components are organized according to Atomic Design Pattern
