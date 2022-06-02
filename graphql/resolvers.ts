export const resolvers = {
    Query: {
        notes: () => {
            return [
                {
                    id: 1,
                    userId: 2,
                    user: {
                        id: 1,
                        email: "Vishwanthbsavp@gmail.com",
                        name: "VishwanthBarma",
                        username: "barmavishwanth",
                        image: "none",
                    },
                    content: "This is my first note in graphql resolvers"
                }
            ]
        }
    }
}