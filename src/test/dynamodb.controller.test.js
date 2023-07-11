const { PutItem } = require("../database/dynamodb.controller.js");
const { dynamoDBClient } = require("../aws/aws.js");

jest.mock("../aws/aws.js");

dynamoDBClient.send.mockResolvedValue({ isMock: true });

describe("@aws-sdk/client-dynamodb mock", () => {
  it("should successfully mock dynamoDBClient", async () => {
    dynamoDBClient.send.mockResolvedValue({ isMock: true });

    const params = {
      TableName: "CUSTOMER",
      Item: {
        CUSTOMER_ID: { N: "001" },
        CUSTOMER_NAME: { S: "Richard Roe" },
      },
    };

    const response = await PutItem(params);

    expect(response.isMock).toEqual(true);
  });
});
