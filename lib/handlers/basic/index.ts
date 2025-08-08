import { APIGatewayEvent, APIGatewayRequestSimpleAuthorizerHandlerV2, ProxyResult } from "aws-lambda";


export const handler = async(event: APIGatewayEvent): Promise<ProxyResult> => {
    return {
        statusCode: 200,
        body: "HelloWorld",
    }
}