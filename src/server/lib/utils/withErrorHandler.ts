import { BaseError } from "../../../shared/errors/BaseError";

export function withErrorHandler(
  handler: (req: Request) => Promise<Response>
): (req: Request) => Promise<Response> {
  return async (req: Request) => {
    try {
      return await handler(req);
    } catch (error) {
      if (error instanceof BaseError) {
        return Response.json(
          {
            message: error.message,
            statusCode: error.statusCode,
            field: error.field,
          },
          { status: error.statusCode }
        );
      }

      console.error("Unhandled error:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  };
}