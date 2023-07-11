const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const dynamoDBClient = new DynamoDBClient({
  region: "local",
});

module.exports = { dynamoDBClient };
