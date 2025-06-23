import {z} from "zod";

export const RegistrationSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(12),
    email: z.string().email(),
})