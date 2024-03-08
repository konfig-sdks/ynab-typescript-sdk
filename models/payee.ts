/*
YNAB API Endpoints

Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com

The version of the OpenAPI document: 1.68.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Payee
 */
export interface Payee {
    /**
     * 
     * @type {string}
     * @memberof Payee
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Payee
     */
    'name': string;
    /**
     * If a transfer payee, the `account_id` to which this payee transfers to
     * @type {string}
     * @memberof Payee
     */
    'transfer_account_id'?: string | null;
    /**
     * Whether or not the payee has been deleted.  Deleted payees will only be included in delta requests.
     * @type {boolean}
     * @memberof Payee
     */
    'deleted': boolean;
}
