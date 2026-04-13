import * as z from "zod";

// $ Schema for the Login Form
export const loginSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(1, {
      message: "Please enter a valid password",
    })
    .refine(
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/g.test(
          value,
        ),
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)",
      },
    ),
});

export type LoginFormData = z.infer<typeof loginSchema>;
