import server from "../src/server";

export default async function handler(req: Request) {
  try {
    return await server.fetch(req, {}, {});
  } catch (e: any) {
    return new Response(
      `ERRO DE DEPURAÇÃO: ${e.message}\n\nStack: ${e.stack}`,
      { status: 500, headers: { "content-type": "text/plain; charset=utf-8" } }
    );
  }
}
