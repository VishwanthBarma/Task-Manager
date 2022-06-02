export const resolvers = {
    Query: {
        notes: (_parent:any, _args:any, ctx:any) => {
            return ctx.prisma.note.findMany()
        },
    },
}