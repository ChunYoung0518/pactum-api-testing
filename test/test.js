const pactum = require("pactum");

it("should save a new coffee", async () => {
  await pactum
    .spec()
    .post("http://localhost:3000/coffees")
    .withHeaders("Authorization", "Mgv4bmqurf")
    .withJson({
      name: "Coffee #8",
      brand: "DY8",
      flavors: ["choclate", "milk"],
    })
    .expectStatus(201);
});

it("should be a coffee", async () => {
  await pactum
    .spec()
    .get("http://localhost:3000/coffees/8")
    .withHeaders("Authorization", "Mgv4bmqurf")
    .expectStatus(200);
});
