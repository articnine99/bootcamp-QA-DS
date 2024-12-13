const schema = {
  type: "object",
  properties: {
    page: {
      type: "number",
    },
    per_page: {
      type: "number",
    },
    total: {
      type: "number",
    },
    total_pages: {
      type: "number",
    },
    data: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "number",
          },
          email: {
            type: "string",
          },
          first_name: {
            type: "string",
          },
          last_name: {
            type: "string",
          },
          avatar: {
            type: "string",
          },
        },
      },
    },
    support: {
      type: "object",
      properties: {
        url: {
          type: "string",
        },
        text: {
          type: "string",
        },
      },
    },
  },
};

const schemaSingleUser = {
  type: "object",
  properties: {
    data: {
      type: "object",
      properties: {
        id: {
          type: "number",
        },
        email: {
          type: "string",
        },
        first_name: {
          type: "string",
        },
        last_name: {
          type: "string",
        },
        avatar: {
          type: "string",
        },
      },
    },
    support: {
      type: "object",
      properties: {
        url: {
          type: "string",
        },
        text: {
          type: "string",
        },
      },
    },
  },
};

const schemaUpdateUser = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    job: {
      type: "string",
    },
    updatedAt: {
      type: "string",
    },
  },
};

pm.test("Validate JSON Schema", function () {
  pm.response.to.have.jsonSchema(schema);
});
