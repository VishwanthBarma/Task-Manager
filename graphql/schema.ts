import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./types"

export const schema = makeSchema({
    types,
    outputs: {
      typegen: join(process.cwd(), 'node_modules', '@types', 'nexus-typegen', 'index.d.ts'),
      schema: join(process.cwd(), 'graphql', 'schema.graphql'),
    },
    contextType: {
      export: 'Context',
      module: join(process.cwd(), 'graphql', 'context.ts'),
    },
})


// import { gql } from 'apollo-server-micro';


// export const typeDefs = gql `
//     scalar Date

//     type User {
//         id: Int
//         email: String
//         name: String
//         username: String
//         image: String
//         notes: [Note]
//     }

//     type Note {
//         id: Int
//         createdAt: Date
//         updatedAt: Date
//         userId: Int
//         user: User
//         content: String
//         tag: Tag
//         detailNote: DetailNote
//     }

//     type DetailNote {
//         id: Int
//         noteId: Int
//         note: Note
//         detailContent: String
//     }

//     enum Tag {
//         STARTED
//         INPROGRESS
//         PENDING
//         COMPLETED
//     }

//     type Query {
//         user(id: Int!): User!
//         notes: [Note]!
//         note(id: Int!): Note!
//         detailNote(id: Int!): DetailNote!
//     }

//     type Mutation {
//         createUser(email: String!, name: String!, username: String!, image: String!) : User!
//         createNote(userId: Int!, content: String, tag: Tag!): Note!
//         createDetailNote(noteId: Int!, detailContent: String!): DetailNote!
//         deleteNote(id: Int!, userId: Int!): Note!
//         deleteDetailNote(id: Int!, noteId: Int!): DetailNote!
//     }
// `;