import statesAbb from "./../src/db/state-abb.json" assert { type: "json" };
import states from "../src/db/us-states.json" assert { type: "json" };
import fs from "fs";

const res = states.map((state) => {
  const { code } = statesAbb.find(
    (_) => _.name.toLocaleLowerCase() == state.name.toLocaleLowerCase()
  );

  return { ...state, abbreviation: code };
});

fs.writeFileSync("us_states_complete.json", JSON.stringify(res, null, 2));
