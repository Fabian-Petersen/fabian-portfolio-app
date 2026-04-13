import * as z from "zod";

// $ Contact Request Form Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Please enter your name" })
    .max(15, { message: "Name cannot exceed 15 characters" }),
  email: z.email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Please enter a valid message" })
    .max(150, { message: "Message cannot exceed 150 characters" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// $ Contact API Response Schema
export const contactResponseSchema = contactFormSchema.extend({
  id: z.string(),
  contactCreated: z.string(),
});

export type ContactAPIResponse = z.infer<typeof contactResponseSchema>;
