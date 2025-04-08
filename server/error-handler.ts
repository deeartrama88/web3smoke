import { H3Error } from "h3";

export default function (error: H3Error, event: any) {
  console.error("Nitro error:", error);

  return {
    statusCode: error.statusCode || 500,
    statusMessage: error.statusMessage || "Internal Server Error",
    data: error.data || null,
  };
}
