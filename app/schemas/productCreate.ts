import { z } from "zod";

const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/;

export const productCreateSchema = z.object({
  id: z.number(),
  gvtId: z.number(),
  name: z.string().min(3, "Product name must be at least 3 characters"),
  productTagline: z.string().min(1, "Product tagline is required").refine((val) => urlRegex.test(val), "Please enter a valid URL"),
  shortDescription: z.string().min(1, "Short description is required"),
  longDescription: z.string().min(1, "Long description is required"),
  productUrl: z.string().min(1, "Product URL is required"),
  voucherTypeName: z.string().min(1, "Voucher type name is required"),
  orderUrl: z
    .string()
    .min(1, "Order URL is required")
    .refine((val) => urlRegex.test(val), "Please enter a valid URL"),
  productTitle: z.string().min(1, "Product title is required"),
  __typename: z.string(),
});

export type ProductSchema = z.infer<typeof productCreateSchema>;
