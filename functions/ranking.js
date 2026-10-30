export async function onRequestGet(context) {

  const list =
    await context.env.RANKING.list();

  const records = [];

  for(const key of list.keys){

    const value =
      await context.env.RANKING.get(key.name);

    records.push(JSON.parse(value));
  }

  records.sort(
    (a,b)=>a.time-b.time
  );

  return Response.json(records);
}
