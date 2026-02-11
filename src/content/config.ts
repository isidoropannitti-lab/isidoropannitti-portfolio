import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		year: z.string(),
		location: z.string(),
		summary: z.string(),
		order: z.number(),
	}),
});

const photography = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		alt: z.string(),
		image: z.string(),
		order: z.number(),
	}),
});

export const collections = {
	projects,
	photography,
};
