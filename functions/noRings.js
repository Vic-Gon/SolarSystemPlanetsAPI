exports = function() {
   const mongodb = context.services.get("mongodb-atlas");
   const mycollection = mongodb.db("sample_guides").collection("planets");
   return mycollection.find({hasRings: false}).sort({orderFromSun: 1}).toArray();
};