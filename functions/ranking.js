export async function onRequestGet(context) {

  const list = await context.env.RANKING.list();

  let records = [];

  for (const key of list.keys) {

    const value =
      await context.env.RANKING.get(key.name);

    if (value) {
      records.push(JSON.parse(value));
    }
  }

  records.sort(
    (a, b) => a.time - b.time
  );

  return Response.json(records);
}
