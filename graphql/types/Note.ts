import { objectType, extendType, enumType } from "nexus";
import { User } from "./User";
import { DetailNote } from "./DetailNote";

export const Note = objectType({
    name: 'Note',
    definition(n){
        n.int('id')
        n.int('userId')
        n.string('content')
        n.field('tag', {type: Tag})
        n.field('user', {type: User})
        n.field('detailNote', {type: DetailNote})
    }
})

const Tag = enumType({
    name: 'Tag',
    members: ['STARTED', 'INPROGRESS', 'PENDING', 'COMPLETED'],
})

export const NotesQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('notes', {
            type: Note,
            resolve(_parent, _args, ctx){
                return ctx.prisma.note.findMany()
            },
        })
    },
})