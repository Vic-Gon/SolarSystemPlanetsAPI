exports = async function (request, response) {
  try {
    if (request.body === undefined) {
      throw new Error(`Request body was not defined.`);
    }
    const body = JSON.parse(request.body.text());

    const {insertedId} = await context.services
      .get("mongodb-atlas")
      .db("myDb")
      .collection("myCollection")
      .insertOne(body);

    response.setStatusCode(201);
    response.setBody(
      JSON.stringify({
        insertedId,
        message: "Successfully saved the request body",
      })
    );
  } catch (error) {
    response.setStatusCode(400);
    response.setBody(error.message);
  }
};
