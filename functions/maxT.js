exports = async function({query}) {
  const {q} = query;
  const n = parseFloat(q);
  const mongodb = context.services.get("mongodb-atlas");
  const mycollection = mongodb.db("sample_guides").collection("planets");
  return await mycollection.find({"surfaceTemperatureC.max": n}).toArray();
};  
