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
 * @interface CategoryGroup
 */
export interface CategoryGroup {
    /**
     * 
     * @type {string}
     * @memberof CategoryGroup
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof CategoryGroup
     */
    'name': string;
    /**
     * Whether or not the category group is hidden
     * @type {boolean}
     * @memberof CategoryGroup
     */
    'hidden': boolean;
    /**
     * Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests.
     * @type {boolean}
     * @memberof CategoryGroup
     */
    'deleted': boolean;
}

