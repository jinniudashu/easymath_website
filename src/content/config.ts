import { z, defineCollection } from 'astro:content';

const course = defineCollection({
    schema: z.object({
        title: z.string().max(60),
        description: z.string().max(160).optional(),
        thumbnail: z.string().optional(),
        image: z.object({
            src: z.string(),
            alt: z.string().optional(),
        })
    }),
});

export const collections = { 'course': course };