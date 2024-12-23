const schema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      name: {
        type: "string",
      },
      data: {
        type: ["object", "null"],
        properties: {
          color: {
            type: "string",
          },
          capacity: {
            type: ["string", "number"],
          },
          price: {
            type: "number",
          },
          generation: {
            type: "string",
          },
          year: {
            type: "number",
          },
          "CPU model": {
            type: "string",
          },
          "Hard disk size": {
            type: "string",
          },
          "Strap Colour": {
            type: "string",
          },
          "Case Size": {
            type: "string",
          },
          Description: {
            type: "string",
          },
          Capacity: {
            type: "string",
          },
          "Screen size": {
            type: "number",
          },
        },
        additionalProperties: true,
      },
    },
    required: ["id", "name", "data"],
    additionalProperties: false,
  },
};

pm.test("Validate JSON Schema", function () {
  pm.response.to.have.jsonSchema(schema);
});
