/**
 * projects
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { MultiFieldPatternData } from '././multiFieldPatternData';


export interface ProjectsGetAllExRequest {
    /**
     * List of IDs to filter by
     */
    id?: Array<string>;
    /**
     * Get only projects whose name matches this pattern (python regular expression   syntax)
     */
    name?: string;
    /**
     * Get only projects whose description matches this pattern (python regular   expression syntax)
     */
    description?: string;
    /**
     * User-defined tags list used to filter results. Prepend \'-\' to tag name to   indicate exclusion
     */
    tags?: Array<string>;
    /**
     * System tags list used to filter results. Prepend \'-\' to system tag name to   indicate exclusion
     */
    system_tags?: Array<string>;
    /**
     * List of field names to order by. When search_text is used, \'@text_score\' can be   used as a field representing the text score of returned documents. Use \'-\'   prefix to specify descending order. Optional, recommended when using page
     */
    order_by?: Array<string>;
    /**
     * Page number, returns a specific page out of the resulting list of projects
     */
    page?: number;
    /**
     * Page size, specifies the number of results returned in each page (last page may   contain fewer results)
     */
    page_size?: number;
    /**
     * Free text search query
     */
    search_text?: string;
    /**
     * List of document\'s field names (nesting is supported using \'.\', e.g.   execution.model_labels). If provided, this list defines the query\'s projection   (only these fields will be returned for each result entry)
     */
    only_fields?: Array<string>;
    _all_?: MultiFieldPatternData;
    _any_?: MultiFieldPatternData;
    /**
     * If true, include project statistic in response.
     */
    include_stats?: boolean;
    /**
     * Report stats include only statistics for tasks in the specified state. If Null   is provided, stats for all task states will be returned.
     */
    stats_for_state?: ProjectsGetAllExRequest.StatsForStateEnum;
    /**
     * Return only non-public projects
     */
    non_public?: boolean;
    active_users?: Array<string>;
    /**
     * If set to \'true\' then the search with the specified criteria is performed among top level projects only (or if parents specified, among the direct children of the these parents). Otherwise the search is performed among all the company projects (or among all of the descendants of the specified parents).
     */
    shallow_search?: boolean;
    /**
     * If set to \'true\' and project ids are passed to the query then for these projects their own tasks and models are counted
     */
    check_own_contents?: boolean;
    /**
     * If set to \'true\' then hidden projects are included in the search results
     */
    search_hidden?: boolean;
    /**
     * Scroll ID returned from the previos calls to get_all
     */
    scroll_id?: string;
    /**
     * If set then all the data received with this scroll will be requeried
     */
    refresh_scroll?: boolean;
    /**
     * The number of projects to retrieve
     */
    size?: number;
  stats_with_children?: boolean;
  include_stats_filter?: any;
    /**
     * If true, include project dataset statistic in response
     */
    include_dataset_stats?: boolean;
}
export namespace ProjectsGetAllExRequest {
    export type StatsForStateEnum = 'active' | 'archived';
    export const StatsForStateEnum = {
        Active: 'active' as StatsForStateEnum,
        Archived: 'archived' as StatsForStateEnum
    }
}
