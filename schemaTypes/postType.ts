import { defineField, defineType } from "sanity";

export const postType = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    groups: [
        { name: 'info', title: 'Information' },
        { name: 'post', title: 'Postagem' }
    ],
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'subject',
            type: 'string',
            options: {
                list: ['filosofia', 'design', 'código'],
                layout: 'radio'
            }
        }),
        defineField({
            name: 'date',
            type: 'datetime',
            hidden: ({ document }) => !document?.name
        }),
        defineField({
            name: 'post',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (rule) => rule
                .required()
                .error("Necessário adicionar um texto")
        }),
        defineField({
            name: 'image',
            type: 'image',

        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }],
            // validation: (rule) =>
            //     rule.custom((value, context) => {
            //         if (value && context?.document?.subject === 'filosofia') {
            //             return 'Vai falar de filosofia, é?'
            //         }

            //         return true
            //     }),
        })
        ,
        defineField({
            name: 'Tags',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'slug',
            type: 'string'
        })

    ]
})