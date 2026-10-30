export async function onRequestPost(context) {

  const data = await context.request.json();

  const id = crypto.randomUUID();

  await context.env.RANKING.put(
    id,
    JSON.stringify(data)
  );

  return Response.json({
    success: true
  });

}
