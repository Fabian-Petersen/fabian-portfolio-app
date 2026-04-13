import * as z from "zod";
import { presignedURLSchema } from ".";

// $ Testimonial Request Form Schema
export const testimonialFormSchema = z.object({
  name: z.string().min(1, { message: "Please enter a project title" }),
  email: z.email({ message: "Please enter a valid description" }),
  position: z.string().min(1, { message: "Please enter a valid position" }),
  company: z.string().min(1, { message: "Please enter a valid company" }),
  message: z.string().min(0, { message: "Please enter a valid message" }),
  image: z.union([z.instanceof(File), z.string().url()]).optional(),
});

export type TestimonialFormData = z.infer<typeof testimonialFormSchema>;

// $ Testimonial API Response Schema
export const testimonialResponseSchema = testimonialFormSchema
  .omit({ image: true })
  .extend({
    id: z.string(),
    testimonialCreated: z.string(),
    image: presignedURLSchema.transform((data) => data.url), // Extract the URL from the presignedURLSchema
  });

export type TestimonialAPIResponse = z.infer<typeof testimonialResponseSchema>;
