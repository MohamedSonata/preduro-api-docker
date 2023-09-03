module.exports = {
    definition: `
      type User {
        id: ID!
        username: String!
        email: String!
        firstName: String
        lastName: String
        favIdString: String!
        # ...other fields
      }
    `,
    // ... other export properties
  };