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



export interface EventsGetPlotSampleRequest {
    /**
     * Task ID
     */
    task: string;
    /**
     * Metric name
     */
    metric: string;
    /**
     * Metric variant
     */
    variant: string;
    /**
     * The iteration to bring plot from. If not specified then the latest reported   plot is retrieved
     */
    iteration?: number;
    /**
     * If set then scroll state will be refreshed to reflect the latest changes in the   plots
     */
    refresh?: boolean;
    /**
     * Scroll ID from the previous call to get_plot_sample or empty
     */
    scroll_id?: string;
    /**
     * If set then subsequent navigation with next_plot_sample is done on the plots   for the passed metric only. Otherwise for all the metrics
     */
    navigate_current_metric?: boolean;
}
