import reps from "./representatives_raw.json" assert { type: "json" };
import { writeFileSync } from "fs";

const res = reps.flat().map((rep, index) => ({ ...rep, id: index + 1 }));

writeFileSync("rep_data.json", JSON.stringify(res, null, 2));
