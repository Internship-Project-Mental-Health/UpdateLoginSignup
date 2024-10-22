const { z } = require("zod");

const signupSchema = z.object({
    username: z
    .string({required_error:"Name is Required"})
    .trim()
    .min(3, {message : "Name must be atleast of 3 chars."})
    .max(255, {message: "Name must not be more than 255 characters"}),
    email: z
    .string({required_error:"Email is Required"})
    .trim()
    .min(3, {message : "Invalid Email address"})
    .max(255, {message: "Email must not be more than 255 characters"}),
    phone: z
    .string({required_error:"Phone is Required"})
    .trim()
    .min(10, {message : "Phone must be atleast of 10 chars."})
    .max(10, {message: "Phone must not be more than 10 characters"}),
    password: z
    .string({required_error:"Password is Required"})
    .min(7, {message : "Password must be atleast of 6 chars."})
    .max(255, {message: "Password must not be more than 255 characters"}),
});

module.exports = signupSchema;