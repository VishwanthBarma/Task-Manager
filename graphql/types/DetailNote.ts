import { objectType, extendType, enumType } from "nexus";
import { Note } from "./Note";

export const DetailNote = objectType({
    name: 'DetailNote',
    definition(d){
        d.int('id')
        d.int('noteId')
        d.field('note', {type: Note})
        d.string('detailContent')
    },
})