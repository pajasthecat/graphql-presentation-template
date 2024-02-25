import states from "../src/db/state_data.json" assert { type: "json" };
import fs from "fs";

const res = states.map((state, index) => {
  const population = Object.entries(state.population).map((pop) => ({
    year: pop[0],
    value: pop[1],
  }));

  const gdp = Object.entries(state.gdp).map((pop) => ({
    year: pop[0],
    value: pop[1],
  }));

  return { ...state, population, gdp };
});

fs.writeFileSync("us_states_complete.json", JSON.stringify(res, null, 2));
