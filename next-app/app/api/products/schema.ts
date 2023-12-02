import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  price: z.number().min(1).max(10)
});

export default schema;
