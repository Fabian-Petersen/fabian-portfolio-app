import * as z from "zod";

export const presignedURLSchema = z.object({
  key: z.string(),
  url: z.string(),
  filename: z.string(),
});

// $ Import Schemas
import { loginSchema, type LoginFormData } from "./authSchema";
import {
  contactFormSchema,
  type ContactAPIResponse,
  type ContactFormData,
} from "./contactSchema";
import {
  projectsFormSchema,
  type ProjectsAPIResponse,
  type ProjectsFormData,
} from "./projectSchema";
import {
  testimonialFormSchema,
  type TestimonialFormData,
  type TestimonialAPIResponse,
} from "./testimonialSchema";

// $ Export Schemas
export {
  contactFormSchema,
  projectsFormSchema,
  testimonialFormSchema,
  loginSchema,
};

// $ Export Types
export type {
  ContactFormData,
  LoginFormData,
  ProjectsFormData,
  TestimonialFormData,
  TestimonialAPIResponse,
  ContactAPIResponse,
  ProjectsAPIResponse,
};
