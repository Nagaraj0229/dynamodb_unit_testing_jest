const { PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { dynamoDBClient } = require("../aws/aws.js");

const PutItem = async (params) => {
  try {
    return await dynamoDBClient.send(new PutItemCommand(params));
  } catch (error) {
    return { statusCode: 500 };
  }
};

module.exports = { PutItem };
