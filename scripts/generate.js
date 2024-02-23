import fs from "fs";
// Function to generate dummy population data
function generatePopulationData() {
  const populationData = {};
  const states = [
    ["Alabama", "AL"],
    ["Alaska", "AK"],
    ["Arizona", "AZ"],
    ["Arkansas", "AR"],
    ["California", "CA"],
    ["Colorado", "CO"],
    ["Connecticut", "CT"],
    ["Delaware", "DE"],
    ["Florida", "FL"],
    ["Georgia", "GA"],
    ["Hawaii", "HI"],
    ["Idaho", "ID"],
    ["Illinois", "IL"],
    ["Indiana", "IN"],
    ["Iowa", "IA"],
    ["Kansas", "KS"],
    ["Kentucky", "KY"],
    ["Louisiana", "LA"],
    ["Maine", "ME"],
    ["Maryland", "MD"],
    ["Massachusetts", "MA"],
    ["Michigan", "MI"],
    ["Minnesota", "MN"],
    ["Mississippi", "MS"],
    ["Missouri", "MO"],
    ["Montana", "MT"],
    ["Nebraska", "NE"],
    ["Nevada", "NV"],
    ["New Hampshire", "NH"],
    ["New Jersey", "NJ"],
    ["New Mexico", "NM"],
    ["New York", "NY"],
    ["North Carolina", "NC"],
    ["North Dakota", "ND"],
    ["Ohio", "OH"],
    ["Oklahoma", "OK"],
    ["Oregon", "OR"],
    ["Pennsylvania", "PA"],
    ["Rhode Island", "RI"],
    ["South Carolina", "SC"],
    ["South Dakota", "SD"],
    ["Tennessee", "TN"],
    ["Texas", "TX"],
    ["Utah", "UT"],
    ["Vermont", "VT"],
    ["Virginia", "VA"],
    ["Washington", "WA"],
    ["West Virginia", "WV"],
    ["Wisconsin", "WI"],
    ["Wyoming", "WY"],
  ];
  for (let i = 0; i < states.length; i++) {
    const [state, abbreviation] = states[i];
    populationData[state] = {};
    let population =
      Math.floor(Math.random() * (10000000 - 100000 + 1)) + 100000; // Generating random population
    for (let year = 1789; year <= 2017; year++) {
      populationData[state][year] = population;
      population = Math.floor(
        population * (Math.random() * (1.03 - 1.001) + 1.001)
      ); // Increasing population randomly
    }
  }
  return populationData;
}

// Function to generate dummy GDP data
function generateGDPData() {
  const gdpData = {};
  const states = [
    ["Alabama", "AL"],
    ["Alaska", "AK"],
    ["Arizona", "AZ"],
    ["Arkansas", "AR"],
    ["California", "CA"],
    ["Colorado", "CO"],
    ["Connecticut", "CT"],
    ["Delaware", "DE"],
    ["Florida", "FL"],
    ["Georgia", "GA"],
    ["Hawaii", "HI"],
    ["Idaho", "ID"],
    ["Illinois", "IL"],
    ["Indiana", "IN"],
    ["Iowa", "IA"],
    ["Kansas", "KS"],
    ["Kentucky", "KY"],
    ["Louisiana", "LA"],
    ["Maine", "ME"],
    ["Maryland", "MD"],
    ["Massachusetts", "MA"],
    ["Michigan", "MI"],
    ["Minnesota", "MN"],
    ["Mississippi", "MS"],
    ["Missouri", "MO"],
    ["Montana", "MT"],
    ["Nebraska", "NE"],
    ["Nevada", "NV"],
    ["New Hampshire", "NH"],
    ["New Jersey", "NJ"],
    ["New Mexico", "NM"],
    ["New York", "NY"],
    ["North Carolina", "NC"],
    ["North Dakota", "ND"],
    ["Ohio", "OH"],
    ["Oklahoma", "OK"],
    ["Oregon", "OR"],
    ["Pennsylvania", "PA"],
    ["Rhode Island", "RI"],
    ["South Carolina", "SC"],
    ["South Dakota", "SD"],
    ["Tennessee", "TN"],
    ["Texas", "TX"],
    ["Utah", "UT"],
    ["Vermont", "VT"],
    ["Virginia", "VA"],
    ["Washington", "WA"],
    ["West Virginia", "WV"],
    ["Wisconsin", "WI"],
    ["Wyoming", "WY"],
  ];
  for (let i = 0; i < states.length; i++) {
    const [state, abbreviation] = states[i];
    gdpData[state] = {};
    let gdp = Math.floor(Math.random() * (1000000000 - 1000000 + 1)) + 1000000; // Generating random GDP
    for (let year = 1789; year <= 2017; year++) {
      gdpData[state][year] = gdp;
      gdp = Math.floor(gdp * (Math.random() * (1.03 - 1.001) + 1.001)); // Increasing GDP randomly
    }
  }
  return gdpData;
}

// Generate population and GDP data
const populationData = generatePopulationData();
const gdpData = generateGDPData();

// Combine all data into an array
const combinedData = [];
const states = Object.keys(populationData); // Get states from populationData keys
for (let i = 0; i < states.length; i++) {
  const state = states[i];
  const abbreviation = state.slice(0, 2).toUpperCase(); // Extract abbreviation
  combinedData.push({
    abbreviation: abbreviation,
    full_name: state,
    population: populationData[state],
    gdp: gdpData[state],
  });
}

// Save data to a JSON file
fs.writeFileSync("us_states_data.json", JSON.stringify(combinedData, null, 2));
console.log("Data saved to us_states_data.json");
