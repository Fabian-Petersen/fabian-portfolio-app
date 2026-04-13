import * as z from "zod";
import { presignedURLSchema } from "./index";

// $ Project Request Form Schema
export const projectsFormSchema = z.object({
  title: z.string().min(1, { message: "Please enter a project title" }),
  description: z
    .string()
    .min(0, { message: "Please enter a valid description" }),
  aim: z.string().min(0, { message: "Please enter a valid aim" }),
  typeOfProject: z.string().min(0, {
    message: "Please select a valid project type",
  }),
  websiteLink: z.string().url({ message: "Please enter a valid URL" }),
  githubLink: z.string().url({ message: "Please enter a valid URL" }),
  projectDetails: z.string().min(0, {
    message: "Please enter a valid description",
  }),
  challenges: z.string().min(0, { message: "Please enter a valid challenges" }),
  projectStack: z.array(z.string()).min(1, {
    message: "Please enter a valid skills set",
  }),
  images: z.array(z.instanceof(File)).default([]).optional(),
});

export type ProjectsFormData = z.infer<typeof projectsFormSchema>;

// $ Project API Response Schema
export const projectResponseSchema = projectsFormSchema
  .omit({
    images: true,
  })
  .extend({
    id: z.string(),
    projectCreated: z.string(),
    projectUpdated: z.string().optional(),
    images: z.array(presignedURLSchema).default([]),
  });

export type ProjectsAPIResponse = z.infer<typeof projectResponseSchema>;
