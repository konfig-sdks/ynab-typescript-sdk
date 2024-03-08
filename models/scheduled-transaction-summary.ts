/*
YNAB API Endpoints

Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com

The version of the OpenAPI document: 1.68.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TransactionFlagColor } from './transaction-flag-color';

/**
 * 
 * @export
 * @interface ScheduledTransactionSummary
 */
export interface ScheduledTransactionSummary {
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    'id': string;
    /**
     * The first date for which the Scheduled Transaction was scheduled.
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    'date_first': string;
    /**
     * The next date for which the Scheduled Transaction is scheduled.
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    'date_next': string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    'frequency': ScheduledTransactionSummaryFrequencyEnum;
    /**
     * The scheduled transaction amount in milliunits format
     * @type {number}
     * @memberof ScheduledTransactionSummary
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    'memo'?: string | null;
    /**
     * The transaction flag
     * @type {TransactionFlagColor}
     * @memberof ScheduledTransactionSummary
     */
    'flag_color'?: TransactionFlagColor | null;
    /**
     * The customized name of a transaction flag
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    'flag_name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    'account_id': string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    'payee_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    'category_id'?: string | null;
    /**
     * If a transfer, the account_id which the scheduled transaction transfers to
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    'transfer_account_id'?: string | null;
    /**
     * Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests.
     * @type {boolean}
     * @memberof ScheduledTransactionSummary
     */
    'deleted': boolean;
}

type ScheduledTransactionSummaryFrequencyEnum = 'never' | 'daily' | 'weekly' | 'everyOtherWeek' | 'twiceAMonth' | 'every4Weeks' | 'monthly' | 'everyOtherMonth' | 'every3Months' | 'every4Months' | 'twiceAYear' | 'yearly' | 'everyOtherYear'


