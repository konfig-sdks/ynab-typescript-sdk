/*
YNAB API Endpoints

Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com

The version of the OpenAPI document: 1.68.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Account } from './account';

/**
 * 
 * @export
 * @interface AccountsResponseData
 */
export interface AccountsResponseData {
    /**
     * 
     * @type {Array<Account>}
     * @memberof AccountsResponseData
     */
    'accounts': Array<Account>;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof AccountsResponseData
     */
    'server_knowledge': number;
}

