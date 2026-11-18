import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_STORE_URL: z
    .string()
    .url()
    .default("https://huertana.mitiendanube.com/"),
  NEXT_PUBLIC_INSTAGRAM_URL: z
    .string()
    .url()
    .default("https://www.instagram.com/huertana.alimentos/"),
  NEXT_PUBLIC_WHATSAPP_URL: z
    .string()
    .url()
    .default("https://wa.me/5492613432657"),
  NEXT_PUBLIC_MAPS_URL: z
    .string()
    .url()
    .default(
      "https://www.google.com/maps/search/?api=1&query=Pedro+Vargas+1765,+Russell,+Maipu,+Mendoza,+Argentina"
    ),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_STORE_URL: process.env.NEXT_PUBLIC_STORE_URL,
  NEXT_PUBLIC_INSTAGRAM_URL: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  NEXT_PUBLIC_WHATSAPP_URL: process.env.NEXT_PUBLIC_WHATSAPP_URL,
  NEXT_PUBLIC_MAPS_URL: process.env.NEXT_PUBLIC_MAPS_URL,
});
