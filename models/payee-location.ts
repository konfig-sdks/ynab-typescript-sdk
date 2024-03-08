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
 * @interface PayeeLocation
 */
export interface PayeeLocation {
    /**
     * 
     * @type {string}
     * @memberof PayeeLocation
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof PayeeLocation
     */
    'payee_id': string;
    /**
     * 
     * @type {string}
     * @memberof PayeeLocation
     */
    'latitude': string;
    /**
     * 
     * @type {string}
     * @memberof PayeeLocation
     */
    'longitude': string;
    /**
     * Whether or not the payee location has been deleted.  Deleted payee locations will only be included in delta requests.
     * @type {boolean}
     * @memberof PayeeLocation
     */
    'deleted': boolean;
}

