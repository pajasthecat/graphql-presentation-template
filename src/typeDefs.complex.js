export const typeDefs = `#graphql

type Representative {
    id: Int!
    terms: [Term!]
    firstName: String!
    lastName:String!
    middleName: String
}

type Term{
    party: String!
    state: State!
    yearStart: Int!
    yearEnd: Int!
}

type State {
    name: String!
    capital: StateCapital!
    population(yearEnd:String, yearStart: String): [Population!]
}

type Population{
    year: Int!
    value:Int!
}

type StateCapital{
    name: String!
    lat: String!
    long: String!
}

type Query{
    representatives(id: Int): [Representative!]
    states:[State]
}
`;
