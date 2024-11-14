export interface Ads {
    ad_id: string;
    ad_name: string;
    campaign_id: string;
    campaign_name: string;
    impressions: string;
    reach: string;
    spend: string;
    unique_clicks: string;
    created_time: string;
    actions_post_engagement: string
    actions_video_view: string | undefined;
    actions_post_reaction: string;
    actions_link_click: string;
    website_ctr_link_click: string;
    cost_per_unique_action_type_link_click: string;
    cost_per_action_type_video_view: string | undefined;
    cost_per_action_type_link_click: string;
    cost_per_action_type_post_engagement: string
}