import representativesData from "./db/representatives.json" assert { type: "json" };
import states from "./db/state_data.json" assert { type: "json" };
import stateCapitals from "./db/us_state_capitals.json" assert { type: "json" };

export const resolvers = {
  Query: {
    representatives: (parent, args, contextValue, info) => {
      console.log("Fetching top object");
      const { id } = args;
      return id
        ? [representativesData.find((rep) => rep.id === id)]
        : representativesData;
    },

    states: () => {
      return states;
    },
  },
  Term: {
    state: (parent) => {
      console.log("Fetching state data");
      const { yearEnd, yearStart } = parent;
      const result = states.find((state) => state.abbreviation == parent.state);
      return { ...result, yearEnd, yearStart };
    },
  },
  State: {
    capital: (parent) => {
      console.log("Fetching state capital data");
      const { abbreviation } = parent;

      const { lat, long, capital } = stateCapitals[abbreviation];

      return { name: capital, lat, long };
    },
    population: (parent, args) => {
      console.log("Fetching population data");

      const filter = getPopulationFilter(parent, args);

      return getPopulation(filter, parent);
    },
  },
};

const getPopulationFilter = (parent, args) => {
  const { yearEnd: yearEndArgs, yearStart: yearStartArgs } = args;

  const { yearEnd: yearEndParent, yearStart: yearStartParent } = parent;

  const yearEnd = yearEndArgs ?? yearEndParent;
  const yearStart = yearStartArgs ?? yearStartParent;

  return { yearEnd, yearStart };
};

const getPopulation = (filter, parent) => {
  const { yearStart, yearEnd } = filter;
  const { population } = parent;

  if (!yearStart && !yearEnd) {
    const res = Object.entries(population).map((pop) => {
      const [year, value] = pop;

      return { year, value };
    });

    return res;
  }

  const yearEndPop = population[yearEnd];

  const yearStartPop = population[yearStart];

  return [
    {
      year: yearStart,
      value: yearStartPop,
    },
    {
      year: yearEnd,
      value: yearEndPop,
    },
  ];
};
