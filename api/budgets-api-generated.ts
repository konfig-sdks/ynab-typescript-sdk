/* tslint:disable */
/* eslint-disable */
/*
YNAB API Endpoints

Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com

The version of the OpenAPI document: 1.68.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BudgetDetailResponse } from '../models';
// @ts-ignore
import { BudgetSettingsResponse } from '../models';
// @ts-ignore
import { BudgetSummaryResponse } from '../models';
// @ts-ignore
import { ErrorResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * BudgetsApi - axios parameter creator
 * @export
 */
export const BudgetsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a single budget with all related entities.  This resource is effectively a full budget export.
         * @summary Single budget
         * @param {string} budgetId The id of the budget. \&quot;last-used\&quot; can be used to specify the last used budget and \&quot;default\&quot; can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
         * @param {number} [lastKnowledgeOfServer] The starting server knowledge.  If provided, only entities that have changed since &#x60;last_knowledge_of_server&#x60; will be included.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBudget: async (budgetId: string, lastKnowledgeOfServer?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'budgetId' is not null or undefined
            assertParamExists('getBudget', 'budgetId', budgetId)
            const localVarPath = `/budgets/{budget_id}`
                .replace(`{${"budget_id"}}`, encodeURIComponent(String(budgetId !== undefined ? budgetId : `-budget_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (lastKnowledgeOfServer !== undefined) {
                localVarQueryParameter['last_knowledge_of_server'] = lastKnowledgeOfServer;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/budgets/{budget_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns settings for a budget
         * @summary Budget Settings
         * @param {string} budgetId The id of the budget. \&quot;last-used\&quot; can be used to specify the last used budget and \&quot;default\&quot; can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSettings: async (budgetId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'budgetId' is not null or undefined
            assertParamExists('getSettings', 'budgetId', budgetId)
            const localVarPath = `/budgets/{budget_id}/settings`
                .replace(`{${"budget_id"}}`, encodeURIComponent(String(budgetId !== undefined ? budgetId : `-budget_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/budgets/{budget_id}/settings',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns budgets list with summary information
         * @summary List budgets
         * @param {boolean} [includeAccounts] Whether to include the list of budget accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSummary: async (includeAccounts?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/budgets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (includeAccounts !== undefined) {
                localVarQueryParameter['include_accounts'] = includeAccounts;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/budgets',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BudgetsApi - functional programming interface
 * @export
 */
export const BudgetsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BudgetsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a single budget with all related entities.  This resource is effectively a full budget export.
         * @summary Single budget
         * @param {BudgetsApiGetBudgetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBudget(requestParameters: BudgetsApiGetBudgetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BudgetDetailResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBudget(requestParameters.budgetId, requestParameters.lastKnowledgeOfServer, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns settings for a budget
         * @summary Budget Settings
         * @param {BudgetsApiGetSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSettings(requestParameters: BudgetsApiGetSettingsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BudgetSettingsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSettings(requestParameters.budgetId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns budgets list with summary information
         * @summary List budgets
         * @param {BudgetsApiListSummaryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSummary(requestParameters: BudgetsApiListSummaryRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BudgetSummaryResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listSummary(requestParameters.includeAccounts, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BudgetsApi - factory interface
 * @export
 */
export const BudgetsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BudgetsApiFp(configuration)
    return {
        /**
         * Returns a single budget with all related entities.  This resource is effectively a full budget export.
         * @summary Single budget
         * @param {BudgetsApiGetBudgetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBudget(requestParameters: BudgetsApiGetBudgetRequest, options?: AxiosRequestConfig): AxiosPromise<BudgetDetailResponse> {
            return localVarFp.getBudget(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns settings for a budget
         * @summary Budget Settings
         * @param {BudgetsApiGetSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSettings(requestParameters: BudgetsApiGetSettingsRequest, options?: AxiosRequestConfig): AxiosPromise<BudgetSettingsResponse> {
            return localVarFp.getSettings(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns budgets list with summary information
         * @summary List budgets
         * @param {BudgetsApiListSummaryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSummary(requestParameters: BudgetsApiListSummaryRequest = {}, options?: AxiosRequestConfig): AxiosPromise<BudgetSummaryResponse> {
            return localVarFp.listSummary(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getBudget operation in BudgetsApi.
 * @export
 * @interface BudgetsApiGetBudgetRequest
 */
export type BudgetsApiGetBudgetRequest = {
    
    /**
    * The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
    * @type {string}
    * @memberof BudgetsApiGetBudget
    */
    readonly budgetId: string
    
    /**
    * The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
    * @type {number}
    * @memberof BudgetsApiGetBudget
    */
    readonly lastKnowledgeOfServer?: number
    
}

/**
 * Request parameters for getSettings operation in BudgetsApi.
 * @export
 * @interface BudgetsApiGetSettingsRequest
 */
export type BudgetsApiGetSettingsRequest = {
    
    /**
    * The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
    * @type {string}
    * @memberof BudgetsApiGetSettings
    */
    readonly budgetId: string
    
}

/**
 * Request parameters for listSummary operation in BudgetsApi.
 * @export
 * @interface BudgetsApiListSummaryRequest
 */
export type BudgetsApiListSummaryRequest = {
    
    /**
    * Whether to include the list of budget accounts
    * @type {boolean}
    * @memberof BudgetsApiListSummary
    */
    readonly includeAccounts?: boolean
    
}

/**
 * BudgetsApiGenerated - object-oriented interface
 * @export
 * @class BudgetsApiGenerated
 * @extends {BaseAPI}
 */
export class BudgetsApiGenerated extends BaseAPI {
    /**
     * Returns a single budget with all related entities.  This resource is effectively a full budget export.
     * @summary Single budget
     * @param {BudgetsApiGetBudgetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetsApiGenerated
     */
    public getBudget(requestParameters: BudgetsApiGetBudgetRequest, options?: AxiosRequestConfig) {
        return BudgetsApiFp(this.configuration).getBudget(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns settings for a budget
     * @summary Budget Settings
     * @param {BudgetsApiGetSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetsApiGenerated
     */
    public getSettings(requestParameters: BudgetsApiGetSettingsRequest, options?: AxiosRequestConfig) {
        return BudgetsApiFp(this.configuration).getSettings(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns budgets list with summary information
     * @summary List budgets
     * @param {BudgetsApiListSummaryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetsApiGenerated
     */
    public listSummary(requestParameters: BudgetsApiListSummaryRequest = {}, options?: AxiosRequestConfig) {
        return BudgetsApiFp(this.configuration).listSummary(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
