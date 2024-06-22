import { defineField, defineType } from "sanity";

export const authorType = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'bio',
            type: 'string'
        }),
        defineField({
            name: 'avatar',
            type: 'image'
        })
    ]
})