<div align="left">

[![Visit You need a budget](./header.png)](https://api.youneedabudget.com)

# [You need a budget](https://api.youneedabudget.com)<a id="you-need-a-budget"></a>

Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`ynab.accounts.createNewAccount`](#ynabaccountscreatenewaccount)
  * [`ynab.accounts.getSingleAccount`](#ynabaccountsgetsingleaccount)
  * [`ynab.accounts.listAll`](#ynabaccountslistall)
  * [`ynab.budgets.getBudget`](#ynabbudgetsgetbudget)
  * [`ynab.budgets.getSettings`](#ynabbudgetsgetsettings)
  * [`ynab.budgets.listSummary`](#ynabbudgetslistsummary)
  * [`ynab.categories.getMonthCategoryById`](#ynabcategoriesgetmonthcategorybyid)
  * [`ynab.categories.getSingleCategory`](#ynabcategoriesgetsinglecategory)
  * [`ynab.categories.listByBudgetId`](#ynabcategorieslistbybudgetid)
  * [`ynab.categories.updateCategoryById`](#ynabcategoriesupdatecategorybyid)
  * [`ynab.categories.updateMonthCategory`](#ynabcategoriesupdatemonthcategory)
  * [`ynab.months.getSingle`](#ynabmonthsgetsingle)
  * [`ynab.months.list`](#ynabmonthslist)
  * [`ynab.payeeLocations.getSingle`](#ynabpayeelocationsgetsingle)
  * [`ynab.payeeLocations.listAll`](#ynabpayeelocationslistall)
  * [`ynab.payeeLocations.listByPayee`](#ynabpayeelocationslistbypayee)
  * [`ynab.payees.getSinglePayee`](#ynabpayeesgetsinglepayee)
  * [`ynab.payees.listAll`](#ynabpayeeslistall)
  * [`ynab.scheduledTransactions.getSingleScheduledTransaction`](#ynabscheduledtransactionsgetsinglescheduledtransaction)
  * [`ynab.scheduledTransactions.listAll`](#ynabscheduledtransactionslistall)
  * [`ynab.transactions.createSingleOrMultiple`](#ynabtransactionscreatesingleormultiple)
  * [`ynab.transactions.deleteExistingTransaction`](#ynabtransactionsdeleteexistingtransaction)
  * [`ynab.transactions.getSingleTransaction`](#ynabtransactionsgetsingletransaction)
  * [`ynab.transactions.importLinkedAccounts`](#ynabtransactionsimportlinkedaccounts)
  * [`ynab.transactions.listByAccount`](#ynabtransactionslistbyaccount)
  * [`ynab.transactions.listByCategory`](#ynabtransactionslistbycategory)
  * [`ynab.transactions.listByPayee`](#ynabtransactionslistbypayee)
  * [`ynab.transactions.listTransactions`](#ynabtransactionslisttransactions)
  * [`ynab.transactions.updateExistingTransaction`](#ynabtransactionsupdateexistingtransaction)
  * [`ynab.transactions.updateMultiple`](#ynabtransactionsupdatemultiple)
  * [`ynab.user.infoGet`](#ynabuserinfoget)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=You%20Need%20A%20Budget&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Ynab } from "ynab-typescript-sdk";

const ynab = new Ynab({
  // Defining the base path is optional and defaults to https://api.ynab.com/v1
  // basePath: "https://api.ynab.com/v1",
  accessToken: "ACCESS_TOKEN",
});

const createNewAccountResponse = await ynab.accounts.createNewAccount({
  budgetId: "budgetId_example",
  account: {
    name: "name_example",
    type: "checking",
    balance: 1,
  },
});

console.log(createNewAccountResponse);
```

## Reference<a id="reference"></a>


### `ynab.accounts.createNewAccount`<a id="ynabaccountscreatenewaccount"></a>

Creates a new account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAccountResponse = await ynab.accounts.createNewAccount({
  budgetId: "budgetId_example",
  account: {
    name: "name_example",
    type: "checking",
    balance: 1,
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### account: [`SaveAccount`](./models/save-account.ts)<a id="account-saveaccountmodelssave-accountts"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)

#### 🔄 Return<a id="🔄-return"></a>

[AccountResponse](./models/account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/accounts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.accounts.getSingleAccount`<a id="ynabaccountsgetsingleaccount"></a>

Returns a single account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleAccountResponse = await ynab.accounts.getSingleAccount({
  budgetId: "budgetId_example",
  accountId: "accountId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### accountId: `string`<a id="accountid-string"></a>

The id of the account

#### 🔄 Return<a id="🔄-return"></a>

[AccountResponse](./models/account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/accounts/{account_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.accounts.listAll`<a id="ynabaccountslistall"></a>

Returns all accounts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await ynab.accounts.listAll({
  budgetId: "budgetId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### lastKnowledgeOfServer: `number`<a id="lastknowledgeofserver-number"></a>

The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### 🔄 Return<a id="🔄-return"></a>

[AccountsResponse](./models/accounts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.budgets.getBudget`<a id="ynabbudgetsgetbudget"></a>

Returns a single budget with all related entities.  This resource is effectively a full budget export.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBudgetResponse = await ynab.budgets.getBudget({
  budgetId: "budgetId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### lastKnowledgeOfServer: `number`<a id="lastknowledgeofserver-number"></a>

The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### 🔄 Return<a id="🔄-return"></a>

[BudgetDetailResponse](./models/budget-detail-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.budgets.getSettings`<a id="ynabbudgetsgetsettings"></a>

Returns settings for a budget

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSettingsResponse = await ynab.budgets.getSettings({
  budgetId: "budgetId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

#### 🔄 Return<a id="🔄-return"></a>

[BudgetSettingsResponse](./models/budget-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/settings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.budgets.listSummary`<a id="ynabbudgetslistsummary"></a>

Returns budgets list with summary information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSummaryResponse = await ynab.budgets.listSummary({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### includeAccounts: `boolean`<a id="includeaccounts-boolean"></a>

Whether to include the list of budget accounts

#### 🔄 Return<a id="🔄-return"></a>

[BudgetSummaryResponse](./models/budget-summary-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.categories.getMonthCategoryById`<a id="ynabcategoriesgetmonthcategorybyid"></a>

Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMonthCategoryByIdResponse = await ynab.categories.getMonthCategoryById(
  {
    budgetId: "budgetId_example",
    month: "1970-01-01",
    categoryId: "categoryId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### month: `string | Date`<a id="month-string--date"></a>

The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))

##### categoryId: `string`<a id="categoryid-string"></a>

The id of the category

#### 🔄 Return<a id="🔄-return"></a>

[CategoryResponse](./models/category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/months/{month}/categories/{category_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.categories.getSingleCategory`<a id="ynabcategoriesgetsinglecategory"></a>

Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleCategoryResponse = await ynab.categories.getSingleCategory({
  budgetId: "budgetId_example",
  categoryId: "categoryId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### categoryId: `string`<a id="categoryid-string"></a>

The id of the category

#### 🔄 Return<a id="🔄-return"></a>

[CategoryResponse](./models/category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/categories/{category_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.categories.listByBudgetId`<a id="ynabcategorieslistbybudgetid"></a>

Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByBudgetIdResponse = await ynab.categories.listByBudgetId({
  budgetId: "budgetId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### lastKnowledgeOfServer: `number`<a id="lastknowledgeofserver-number"></a>

The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### 🔄 Return<a id="🔄-return"></a>

[CategoriesResponse](./models/categories-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.categories.updateCategoryById`<a id="ynabcategoriesupdatecategorybyid"></a>

Update a category

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCategoryByIdResponse = await ynab.categories.updateCategoryById({
  budgetId: "budgetId_example",
  categoryId: "categoryId_example",
  category: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: [`SaveCategory`](./models/save-category.ts)<a id="category-savecategorymodelssave-categoryts"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### categoryId: `string`<a id="categoryid-string"></a>

The id of the category

#### 🔄 Return<a id="🔄-return"></a>

[SaveCategoryResponse](./models/save-category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/categories/{category_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.categories.updateMonthCategory`<a id="ynabcategoriesupdatemonthcategory"></a>

Update a category for a specific month.  Only `budgeted` amount can be updated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMonthCategoryResponse = await ynab.categories.updateMonthCategory({
  budgetId: "budgetId_example",
  month: "1970-01-01",
  categoryId: "categoryId_example",
  category: {
    budgeted: 1,
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: [`SaveMonthCategory`](./models/save-month-category.ts)<a id="category-savemonthcategorymodelssave-month-categoryts"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### month: `string | Date`<a id="month-string--date"></a>

The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))

##### categoryId: `string`<a id="categoryid-string"></a>

The id of the category

#### 🔄 Return<a id="🔄-return"></a>

[SaveCategoryResponse](./models/save-category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/months/{month}/categories/{category_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.months.getSingle`<a id="ynabmonthsgetsingle"></a>

Returns a single budget month

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleResponse = await ynab.months.getSingle({
  budgetId: "budgetId_example",
  month: "1970-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### month: `string | Date`<a id="month-string--date"></a>

The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))

#### 🔄 Return<a id="🔄-return"></a>

[MonthDetailResponse](./models/month-detail-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/months/{month}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.months.list`<a id="ynabmonthslist"></a>

Returns all budget months

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await ynab.months.list({
  budgetId: "budgetId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### lastKnowledgeOfServer: `number`<a id="lastknowledgeofserver-number"></a>

The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### 🔄 Return<a id="🔄-return"></a>

[MonthSummariesResponse](./models/month-summaries-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/months` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.payeeLocations.getSingle`<a id="ynabpayeelocationsgetsingle"></a>

Returns a single payee location

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleResponse = await ynab.payeeLocations.getSingle({
  budgetId: "budgetId_example",
  payeeLocationId: "payeeLocationId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### payeeLocationId: `string`<a id="payeelocationid-string"></a>

id of payee location

#### 🔄 Return<a id="🔄-return"></a>

[PayeeLocationResponse](./models/payee-location-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/payee_locations/{payee_location_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.payeeLocations.listAll`<a id="ynabpayeelocationslistall"></a>

Returns all payee locations

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await ynab.payeeLocations.listAll({
  budgetId: "budgetId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

#### 🔄 Return<a id="🔄-return"></a>

[PayeeLocationsResponse](./models/payee-locations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/payee_locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.payeeLocations.listByPayee`<a id="ynabpayeelocationslistbypayee"></a>

Returns all payee locations for a specified payee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByPayeeResponse = await ynab.payeeLocations.listByPayee({
  budgetId: "budgetId_example",
  payeeId: "payeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### payeeId: `string`<a id="payeeid-string"></a>

id of payee

#### 🔄 Return<a id="🔄-return"></a>

[PayeeLocationsResponse](./models/payee-locations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/payees/{payee_id}/payee_locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.payees.getSinglePayee`<a id="ynabpayeesgetsinglepayee"></a>

Returns a single payee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSinglePayeeResponse = await ynab.payees.getSinglePayee({
  budgetId: "budgetId_example",
  payeeId: "payeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### payeeId: `string`<a id="payeeid-string"></a>

The id of the payee

#### 🔄 Return<a id="🔄-return"></a>

[PayeeResponse](./models/payee-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/payees/{payee_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.payees.listAll`<a id="ynabpayeeslistall"></a>

Returns all payees

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await ynab.payees.listAll({
  budgetId: "budgetId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### lastKnowledgeOfServer: `number`<a id="lastknowledgeofserver-number"></a>

The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### 🔄 Return<a id="🔄-return"></a>

[PayeesResponse](./models/payees-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/payees` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.scheduledTransactions.getSingleScheduledTransaction`<a id="ynabscheduledtransactionsgetsinglescheduledtransaction"></a>

Returns a single scheduled transaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleScheduledTransactionResponse =
  await ynab.scheduledTransactions.getSingleScheduledTransaction({
    budgetId: "budgetId_example",
    scheduledTransactionId: "scheduledTransactionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### scheduledTransactionId: `string`<a id="scheduledtransactionid-string"></a>

The id of the scheduled transaction

#### 🔄 Return<a id="🔄-return"></a>

[ScheduledTransactionResponse](./models/scheduled-transaction-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.scheduledTransactions.listAll`<a id="ynabscheduledtransactionslistall"></a>

Returns all scheduled transactions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await ynab.scheduledTransactions.listAll({
  budgetId: "budgetId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### lastKnowledgeOfServer: `number`<a id="lastknowledgeofserver-number"></a>

The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### 🔄 Return<a id="🔄-return"></a>

[ScheduledTransactionsResponse](./models/scheduled-transactions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/scheduled_transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.transactions.createSingleOrMultiple`<a id="ynabtransactionscreatesingleormultiple"></a>

Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSingleOrMultipleResponse =
  await ynab.transactions.createSingleOrMultiple({
    budgetId: "budgetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### transaction: [`NewTransaction`](./models/new-transaction.ts)<a id="transaction-newtransactionmodelsnew-transactionts"></a>

##### transactions: [`NewTransaction`](./models/new-transaction.ts)[]<a id="transactions-newtransactionmodelsnew-transactionts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SaveTransactionsResponse](./models/save-transactions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/transactions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.transactions.deleteExistingTransaction`<a id="ynabtransactionsdeleteexistingtransaction"></a>

Deletes a transaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteExistingTransactionResponse =
  await ynab.transactions.deleteExistingTransaction({
    budgetId: "budgetId_example",
    transactionId: "transactionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### transactionId: `string`<a id="transactionid-string"></a>

The id of the transaction

#### 🔄 Return<a id="🔄-return"></a>

[TransactionResponse](./models/transaction-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/transactions/{transaction_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.transactions.getSingleTransaction`<a id="ynabtransactionsgetsingletransaction"></a>

Returns a single transaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleTransactionResponse =
  await ynab.transactions.getSingleTransaction({
    budgetId: "budgetId_example",
    transactionId: "transactionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### transactionId: `string`<a id="transactionid-string"></a>

The id of the transaction

#### 🔄 Return<a id="🔄-return"></a>

[TransactionResponse](./models/transaction-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/transactions/{transaction_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.transactions.importLinkedAccounts`<a id="ynabtransactionsimportlinkedaccounts"></a>

Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking "Import" on each account in the web application or tapping the "New Transactions" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const importLinkedAccountsResponse =
  await ynab.transactions.importLinkedAccounts({
    budgetId: "budgetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

#### 🔄 Return<a id="🔄-return"></a>

[TransactionsImportResponse](./models/transactions-import-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/transactions/import` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.transactions.listByAccount`<a id="ynabtransactionslistbyaccount"></a>

Returns all transactions for a specified account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByAccountResponse = await ynab.transactions.listByAccount({
  budgetId: "budgetId_example",
  accountId: "accountId_example",
  type: "uncategorized",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### accountId: `string`<a id="accountid-string"></a>

The id of the account

##### sinceDate: `string | Date`<a id="sincedate-string--date"></a>

If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).

##### type: `'uncategorized' | 'unapproved'`<a id="type-uncategorized--unapproved"></a>

If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported.

##### lastKnowledgeOfServer: `number`<a id="lastknowledgeofserver-number"></a>

The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### 🔄 Return<a id="🔄-return"></a>

[TransactionsResponse](./models/transactions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/accounts/{account_id}/transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.transactions.listByCategory`<a id="ynabtransactionslistbycategory"></a>

Returns all transactions for a specified category

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByCategoryResponse = await ynab.transactions.listByCategory({
  budgetId: "budgetId_example",
  categoryId: "categoryId_example",
  type: "uncategorized",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### categoryId: `string`<a id="categoryid-string"></a>

The id of the category

##### sinceDate: `string | Date`<a id="sincedate-string--date"></a>

If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).

##### type: `'uncategorized' | 'unapproved'`<a id="type-uncategorized--unapproved"></a>

If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported.

##### lastKnowledgeOfServer: `number`<a id="lastknowledgeofserver-number"></a>

The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### 🔄 Return<a id="🔄-return"></a>

[HybridTransactionsResponse](./models/hybrid-transactions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/categories/{category_id}/transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.transactions.listByPayee`<a id="ynabtransactionslistbypayee"></a>

Returns all transactions for a specified payee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByPayeeResponse = await ynab.transactions.listByPayee({
  budgetId: "budgetId_example",
  payeeId: "payeeId_example",
  type: "uncategorized",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### payeeId: `string`<a id="payeeid-string"></a>

The id of the payee

##### sinceDate: `string | Date`<a id="sincedate-string--date"></a>

If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).

##### type: `'uncategorized' | 'unapproved'`<a id="type-uncategorized--unapproved"></a>

If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported.

##### lastKnowledgeOfServer: `number`<a id="lastknowledgeofserver-number"></a>

The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### 🔄 Return<a id="🔄-return"></a>

[HybridTransactionsResponse](./models/hybrid-transactions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/payees/{payee_id}/transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.transactions.listTransactions`<a id="ynabtransactionslisttransactions"></a>

Returns budget transactions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTransactionsResponse = await ynab.transactions.listTransactions({
  budgetId: "budgetId_example",
  type: "uncategorized",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### sinceDate: `string | Date`<a id="sincedate-string--date"></a>

If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).

##### type: `'uncategorized' | 'unapproved'`<a id="type-uncategorized--unapproved"></a>

If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported.

##### lastKnowledgeOfServer: `number`<a id="lastknowledgeofserver-number"></a>

The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.

#### 🔄 Return<a id="🔄-return"></a>

[TransactionsResponse](./models/transactions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.transactions.updateExistingTransaction`<a id="ynabtransactionsupdateexistingtransaction"></a>

Updates a single transaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateExistingTransactionResponse =
  await ynab.transactions.updateExistingTransaction({
    budgetId: "budgetId_example",
    transactionId: "transactionId_example",
    transaction: null,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### transaction: [`ExistingTransaction`](./models/existing-transaction.ts)<a id="transaction-existingtransactionmodelsexisting-transactionts"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

##### transactionId: `string`<a id="transactionid-string"></a>

The id of the transaction

#### 🔄 Return<a id="🔄-return"></a>

[TransactionResponse](./models/transaction-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/transactions/{transaction_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.transactions.updateMultiple`<a id="ynabtransactionsupdatemultiple"></a>

Updates multiple transactions, by `id` or `import_id`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMultipleResponse = await ynab.transactions.updateMultiple({
  budgetId: "budgetId_example",
  transactions: [null],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### transactions: [`SaveTransactionWithIdOrImportId`](./models/save-transaction-with-id-or-import-id.ts)[]<a id="transactions-savetransactionwithidorimportidmodelssave-transaction-with-id-or-import-idts"></a>

##### budgetId: `string`<a id="budgetid-string"></a>

The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).

#### 🔄 Return<a id="🔄-return"></a>

[SaveTransactionsResponse](./models/save-transactions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/budgets/{budget_id}/transactions` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ynab.user.infoGet`<a id="ynabuserinfoget"></a>

Returns authenticated user information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const infoGetResponse = await ynab.user.infoGet();
```

#### 🔄 Return<a id="🔄-return"></a>

[UserResponse](./models/user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
