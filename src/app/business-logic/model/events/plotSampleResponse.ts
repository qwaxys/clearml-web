/**
 * events
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 999.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface PlotSampleResponse {
    /**
     * Scroll ID to pass to the next calls to get_plot_sample or next_plot_sample
     */
    scroll_id?: string;
    /**
     * Plot event
     */
    event?: object;
    /**
     * minimal valid iteration for the variant
     */
    min_iteration?: number;
    /**
     * maximal valid iteration for the variant
     */
    max_iteration?: number;
}
