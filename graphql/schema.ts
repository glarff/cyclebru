// graphql/schema.ts

export const typeDefs = `
  type Workout {
    id: ID
    name: String
    overview: String
    objective: String
    training_phase: String
  }

  type Query {
    links: [Workout]!
  }
`