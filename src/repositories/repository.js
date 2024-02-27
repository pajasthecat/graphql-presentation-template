import representatives from "../db/representatives.json" assert { type: "json" };
import state_data from "../db/us_state_data.json" assert { type: "json" };
import state_capital_data from "../db/us_state_capitals.json" assert { type: "json" };
import { writeFileSync } from "fs";

export const getAllStateData = state_data.map((state) => ({
  ...state,
  id: state.abbreviation,
}));

export const getAllRepresentatives = representatives;

export const getAllStateCapitalData = state_capital_data;

export const saveRepresentative = (representative) => {
  const id = getAllRepresentatives[getAllRepresentatives.length - 1].id + 1;

  const rep = { ...representative, id };
  getAllRepresentatives.push(rep);

  writeFileSync(
    "./src/db/representatives.json",
    JSON.stringify(getAllRepresentatives)
  );

  return rep;
};

export const getRepresentativeById = (id) =>
  getAllRepresentatives.find((rep) => rep.id.toString() === id.toString());

export const getStateDataById = (id) =>
  getAllStateData.find((state) => state.id.toString() === id.toString());
