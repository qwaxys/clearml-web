/**
 * login
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.13
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { WhitelistEntryUser } from '././whitelistEntryUser';


export interface WhitelistEntry {
    /**
     * Email address
     */
    email?: string;
    /**
     * Time that the entry was added
     */
    added?: string;
    /**
     * Entry status
     */
    status?: WhitelistEntry.StatusEnum;
    /**
     * Time the entry was accepted
     */
    accepted?: string;
    user?: WhitelistEntryUser;
}
export namespace WhitelistEntry {
    export type StatusEnum = 'pending' | 'accepted';
    export const StatusEnum = {
        Pending: 'pending' as StatusEnum,
        Accepted: 'accepted' as StatusEnum
    }
}
