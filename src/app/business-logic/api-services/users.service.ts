/**
 * users
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.9
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/member-ordering */

import {HTTP} from '../../app.constants';
import {SmApiRequestsService} from "./api-requests.service";

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { UsersCreateRequest } from '../model/users/usersCreateRequest';
import { UsersDeleteRequest } from '../model/users/usersDeleteRequest';
import { UsersGetAllExRequest } from '../model/users/usersGetAllExRequest';
import { UsersGetAllExResponse } from '../model/users/usersGetAllExResponse';
import { UsersGetAllRequest } from '../model/users/usersGetAllRequest';
import { UsersGetAllResponse } from '../model/users/usersGetAllResponse';
import { UsersGetByIdRequest } from '../model/users/usersGetByIdRequest';
import { UsersGetByIdResponse } from '../model/users/usersGetByIdResponse';
import { UsersGetCurrentUserResponse } from '../model/users/usersGetCurrentUserResponse';
import { UsersGetPreferencesResponse } from '../model/users/usersGetPreferencesResponse';
import { UsersSetPreferencesRequest } from '../model/users/usersSetPreferencesRequest';
import { UsersSetPreferencesResponse } from '../model/users/usersSetPreferencesResponse';
import { UsersUpdateRequest } from '../model/users/usersUpdateRequest';
import { UsersUpdateResponse } from '../model/users/usersUpdateResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {UsersGetTermsOfUseResponse} from '../model/users/usersGetTermsOfUseResponse';
import {UsersGetTermsOfUseRequest} from '../model/users/usersGetTermsOfUseRequest';


@Injectable()
export class ApiUsersService {

    protected basePath = HTTP.API_BASE_URL;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected apiRequest: SmApiRequestsService, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     *
     * Internal. Create a new user object. Reserved for internal use.
     * @param request request body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersCreate(request: UsersCreateRequest, options?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling usersCreate.');
        }

        let headers = this.defaultHeaders;
        if (options && options.async_enable) {
            headers = headers.set(this.configuration.asyncHeader, '1');
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

	return this.apiRequest.post<object>(`${this.basePath}/users.create`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Internal. Delete a user
     * @param request request body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersDelete(request: UsersDeleteRequest, options?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling usersDelete.');
        }

        let headers = this.defaultHeaders;
        if (options && options.async_enable) {
            headers = headers.set(this.configuration.asyncHeader, '1');
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

	return this.apiRequest.post<object>(`${this.basePath}/users.delete`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Internal. Get all user objects
     * @param request request body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersGetAll(request: UsersGetAllRequest, options?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling usersGetAll.');
        }

        let headers = this.defaultHeaders;
        if (options && options.async_enable) {
            headers = headers.set(this.configuration.asyncHeader, '1');
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

	return this.apiRequest.post<UsersGetAllResponse>(`${this.basePath}/users.get_all`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Internal. Get all user objects
     * @param request request body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersGetAllEx(request: UsersGetAllExRequest, options?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling usersGetAllEx.');
        }

        let headers = this.defaultHeaders;
        if (options && options.async_enable) {
            headers = headers.set(this.configuration.asyncHeader, '1');
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

	return this.apiRequest.post<UsersGetAllExResponse>(`${this.basePath}/users.get_all_ex`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Internal. Gets user information
     * @param request request body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersGetById(request: UsersGetByIdRequest, options?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling usersGetById.');
        }

        let headers = this.defaultHeaders;
        if (options && options.async_enable) {
            headers = headers.set(this.configuration.asyncHeader, '1');
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

	return this.apiRequest.post<UsersGetByIdResponse>(`${this.basePath}/users.get_by_id`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Internal. Gets current user information, based on the authenticated user making   the call.
     * @param request request body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersGetCurrentUser(request: object, options?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling usersGetCurrentUser.');
        }

        let headers = this.defaultHeaders;
        if (options && options.async_enable) {
            headers = headers.set(this.configuration.asyncHeader, '1');
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

	return this.apiRequest.post<UsersGetCurrentUserResponse>(`${this.basePath}/users.get_current_user`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Internal. Get user preferences
     * @param request request body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersGetPreferences(request: object, options?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling usersGetPreferences.');
        }

        let headers = this.defaultHeaders;
        if (options && options.async_enable) {
            headers = headers.set(this.configuration.asyncHeader, '1');
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

	return this.apiRequest.post<UsersGetPreferencesResponse>(`${this.basePath}/users.get_preferences`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Internal. Set user preferences
     * @param request request body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersSetPreferences(request: UsersSetPreferencesRequest, options?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling usersSetPreferences.');
        }

        let headers = this.defaultHeaders;
        if (options && options.async_enable) {
            headers = headers.set(this.configuration.asyncHeader, '1');
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

	return this.apiRequest.post<UsersSetPreferencesResponse>(`${this.basePath}/users.set_preferences`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Internal. Update a user object
     * @param request request body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersUpdate(request: UsersUpdateRequest, options?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling usersUpdate.');
        }

        let headers = this.defaultHeaders;
        if (options && options.async_enable) {
            headers = headers.set(this.configuration.asyncHeader, '1');
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

	return this.apiRequest.post<UsersUpdateResponse>(`${this.basePath}/users.update`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Internal. Get terms of use information
     * @param request request body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersGetTermsOfUse(request: UsersGetTermsOfUseRequest, options?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling usersGetTermsOfUse.');
        }

        let headers = this.defaultHeaders;
        if (options && options.async_enable) {
            headers = headers.set(this.configuration.asyncHeader, '1');
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.apiRequest.post<UsersGetTermsOfUseResponse>(`${this.basePath}/users.get_terms_of_use`,
          request,
          {
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
          }
        );
    }
}
