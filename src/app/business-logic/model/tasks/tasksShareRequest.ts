/**
 * tasks
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.13
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface TasksShareRequest {
    /**
     * Task IDs
     */
    tasks?: Array<string>;
    /**
     * If set to \'true\' then the tasks will be shared. Otherwise unshared.
     */
    share?: boolean;
}
