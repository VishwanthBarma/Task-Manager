import { objectType, extendType } from "nexus";
import { resolve } from "path";
import { Note } from './Note'

export const User = objectType({
    name: 'User',
    definition(u){
        u.int('id')
        u.string('email')
        u.string('name')
        u.string('username')
        u.string('image')
        u.list.field('notes', {
            type: Note,
            async resolve(_parent: any, _args, ctx){
                return await ctx.prisma.user
                    .findUnique({
                        where: {
                            id: _parent.id,
                        }
                    })
                    .notes()
            },
        })
    },
})