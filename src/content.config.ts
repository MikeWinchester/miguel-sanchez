import { z, defineCollection } from 'astro:content';

const experiences = defineCollection({
  schema: z.object({
    id: z.string(),
    position: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string(),
    technologies: z.array(z.string()).optional(),
    slug: z.string(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
    githubUrl: z.string(),
    liveUrl: z.string().optional(),
    featured: z.boolean(),
    slug: z.string(),
  }),
});