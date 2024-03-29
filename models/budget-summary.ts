/*
YNAB API Endpoints

Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com

The version of the OpenAPI document: 1.68.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Account } from './account';
import { CurrencyFormat } from './currency-format';
import { DateFormat } from './date-format';

/**
 * 
 * @export
 * @interface BudgetSummary
 */
export interface BudgetSummary {
    /**
     * 
     * @type {string}
     * @memberof BudgetSummary
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof BudgetSummary
     */
    'name': string;
    /**
     * The last time any changes were made to the budget from either a web or mobile client
     * @type {string}
     * @memberof BudgetSummary
     */
    'last_modified_on'?: string;
    /**
     * The earliest budget month
     * @type {string}
     * @memberof BudgetSummary
     */
    'first_month'?: string;
    /**
     * The latest budget month
     * @type {string}
     * @memberof BudgetSummary
     */
    'last_month'?: string;
    /**
     * 
     * @type {DateFormat}
     * @memberof BudgetSummary
     */
    'date_format'?: DateFormat | null;
    /**
     * 
     * @type {CurrencyFormat}
     * @memberof BudgetSummary
     */
    'currency_format'?: CurrencyFormat | null;
    /**
     * The budget accounts (only included if `include_accounts=true` specified as query parameter)
     * @type {Array<Account>}
     * @memberof BudgetSummary
     */
    'accounts'?: Array<Account>;
}

