/*
YNAB API Endpoints

Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com

The version of the OpenAPI document: 1.68.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Account } from './account';
import { BudgetDetailAllOf } from './budget-detail-all-of';
import { BudgetSummary } from './budget-summary';
import { Category } from './category';
import { CategoryGroup } from './category-group';
import { CurrencyFormat } from './currency-format';
import { DateFormat } from './date-format';
import { MonthDetail } from './month-detail';
import { Payee } from './payee';
import { PayeeLocation } from './payee-location';
import { ScheduledSubTransaction } from './scheduled-sub-transaction';
import { ScheduledTransactionSummary } from './scheduled-transaction-summary';
import { SubTransaction } from './sub-transaction';
import { TransactionSummary } from './transaction-summary';

/**
 * @type BudgetDetail
 * @export
 */
export type BudgetDetail = BudgetDetailAllOf & BudgetSummary;


