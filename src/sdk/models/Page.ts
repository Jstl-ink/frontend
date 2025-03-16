/* tslint:disable */
/* eslint-disable */
/**
 * Jstl.ink API
 * Jstl.ink gives users the ability to easily create simple pages containing for  them relevant links and their social media profiles
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Link } from './Link';
import {
    LinkFromJSON,
    LinkFromJSONTyped,
    LinkToJSON,
    LinkToJSONTyped,
} from './Link';

/**
 * 
 * @export
 * @interface Page
 */
export interface Page {
    /**
     * ID of page
     * @type {string}
     * @memberof Page
     */
    id: string;
    /**
     * username user page
     * @type {string}
     * @memberof Page
     */
    name: string;
    /**
     * biography for user page
     * @type {string}
     * @memberof Page
     */
    bio?: string;
    /**
     * url for image
     * @type {string}
     * @memberof Page
     */
    img?: string;
    /**
     * links for social media profiles
     * @type {Array<Link>}
     * @memberof Page
     */
    socialLinks?: Array<Link>;
    /**
     * custom definable links
     * @type {Array<Link>}
     * @memberof Page
     */
    links?: Array<Link>;
}

/**
 * Check if a given object implements the Page interface.
 */
export function instanceOfPage(value: object): value is Page {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function PageFromJSON(json: any): Page {
    return PageFromJSONTyped(json, false);
}

export function PageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Page {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'bio': json['bio'] == null ? undefined : json['bio'],
        'img': json['img'] == null ? undefined : json['img'],
        'socialLinks': json['socialLinks'] == null ? undefined : ((json['socialLinks'] as Array<any>).map(LinkFromJSON)),
        'links': json['links'] == null ? undefined : ((json['links'] as Array<any>).map(LinkFromJSON)),
    };
}

export function PageToJSON(json: any): Page {
    return PageToJSONTyped(json, false);
}

export function PageToJSONTyped(value?: Page | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'bio': value['bio'],
        'img': value['img'],
        'socialLinks': value['socialLinks'] == null ? undefined : ((value['socialLinks'] as Array<any>).map(LinkToJSON)),
        'links': value['links'] == null ? undefined : ((value['links'] as Array<any>).map(LinkToJSON)),
    };
}

