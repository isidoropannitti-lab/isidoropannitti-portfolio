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

const featuredProjects = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		teaser: z.string(),
		cover: z.string(),
		coverCaption: z.string(),
		coverAlt: z.string(),
		images: z.array(
			z.object({
				src: z.string(),
				alt: z.string(),
				caption: z.string(),
				span: z.enum(["sm", "md", "lg"]).default("md"),
			}),
		),
	}),
});

export const collections = {
	projects,
	photography,
	featuredProjects,
};
