const flowUpdate = {
  "id": "/flowUpdate",
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "description": {"type": "string"},
    "isActive": {"type": "boolean"},
    "isSelected": {"type": "boolean"}
  }
};

module.exports = {
  mainSchemas: [flowUpdate],
  innerSchemas: []
};