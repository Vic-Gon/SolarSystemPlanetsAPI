exports = async function({query}) {
  const {q} = query;
  const mongodb = context.services.get("mongodb-atlas");
  const mycollection = mongodb.db("sample_guides").collection("planets");
  return await mycollection.find({name: q}).toArray();
};
