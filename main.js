
  (function(d){
      var s = d.createElement('script');
      s.async = true;
      s.src = "https://adsagentclientafd-b7hqhjdrf3fpeqh2.b01.azurefd.net/frontendInjection.js";
      var firstScript = d.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(s, firstScript);
  })(document);


    (function() {
        var loaded = false;

        function asyncLoad() {
            if (loaded) return;
            loaded = true;
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = url;
            document.head.appendChild(s);
        }

        asyncLoad();

        window.addEventListener('pageshow', function(event) {
            if (event.persisted) {
                loaded = false;
                asyncLoad();
            }
        });
    })();

window.jdgmSettings={"pagination":5,"disable_web_reviews":false,"badge_no_review_text":"No reviews","badge_n_reviews_text":"{{ n }} review/reviews","hide_badge_preview_if_no_reviews":true,"badge_hide_text":false,"enforce_center_preview_badge":false,"widget_title":"Customer Reviews","widget_open_form_text":"Write a review","widget_close_form_text":"Cancel review","widget_refresh_page_text":"Refresh page","widget_summary_text":"Based on {{ number_of_reviews }} review/reviews","widget_no_review_text":"Be the first to write a review","widget_name_field_text":"Display name","widget_verified_name_field_text":"Verified Name (public)","widget_name_placeholder_text":"Display name","widget_required_field_error_text":"This field is required.","widget_email_field_text":"Email address","widget_verified_email_field_text":"Verified Email (private, can not be edited)","widget_email_placeholder_text":"Your email address","widget_email_field_error_text":"Please enter a valid email address.","widget_rating_field_text":"Rating","widget_review_title_field_text":"Review Title","widget_review_title_placeholder_text":"Give your review a title","widget_review_body_field_text":"Review content","widget_review_body_placeholder_text":"Start writing here...","widget_pictures_field_text":"Picture/Video (optional)","widget_submit_review_text":"Submit Review","widget_submit_verified_review_text":"Submit Verified Review","widget_submit_success_msg_with_auto_publish":"Thank you! Please refresh the page in a few moments to see your review. You can remove or edit your review by logging into \u003ca href='https://judge.me/login' target='_blank' rel='nofollow noopener'\u003eJudge.me\u003c/a\u003e","widget_submit_success_msg_no_auto_publish":"Thank you! Your review will be published as soon as it is approved by the shop admin. You can remove or edit your review by logging into \u003ca href='https://judge.me/login' target='_blank' rel='nofollow noopener'\u003eJudge.me\u003c/a\u003e","widget_show_default_reviews_out_of_total_text":"Showing {{ n_reviews_shown }} out of {{ n_reviews }} reviews.","widget_show_all_link_text":"Show all","widget_show_less_link_text":"Show less","widget_author_said_text":"{{ reviewer_name }} said:","widget_days_text":"{{ n }} days ago","widget_weeks_text":"{{ n }} week/weeks ago","widget_months_text":"{{ n }} month/months ago","widget_years_text":"{{ n }} year/years ago","widget_yesterday_text":"Yesterday","widget_today_text":"Today","widget_replied_text":"\u003e\u003e {{ shop_name }} replied:","widget_read_more_text":"Read more","widget_reviewer_name_as_initial":"","widget_rating_filter_color":"#fbcd0a","widget_rating_filter_see_all_text":"See all reviews","widget_sorting_most_recent_text":"Most Recent","widget_sorting_highest_rating_text":"Highest Rating","widget_sorting_lowest_rating_text":"Lowest Rating","widget_sorting_with_pictures_text":"Only Pictures","widget_sorting_most_helpful_text":"Most Helpful","widget_open_question_form_text":"Ask a question","widget_reviews_subtab_text":"Reviews","widget_questions_subtab_text":"Questions","widget_question_label_text":"Question","widget_answer_label_text":"Answer","widget_question_placeholder_text":"Write your question here","widget_submit_question_text":"Submit Question","widget_question_submit_success_text":"Thank you for your question! We will notify you once it gets answered.","verified_badge_text":"Verified","verified_badge_bg_color":"","verified_badge_text_color":"","verified_badge_placement":"left-of-reviewer-name","widget_review_max_height":"","widget_hide_border":false,"widget_social_share":false,"widget_thumb":false,"widget_review_location_show":false,"widget_location_format":"","all_reviews_include_out_of_store_products":true,"all_reviews_out_of_store_text":"(out of store)","all_reviews_pagination":100,"all_reviews_product_name_prefix_text":"about","enable_review_pictures":true,"enable_question_anwser":false,"widget_theme":"default","review_date_format":"dd/mm/yyyy","default_sort_method":"most-recent","widget_product_reviews_subtab_text":"Product Reviews","widget_shop_reviews_subtab_text":"Shop Reviews","widget_other_products_reviews_text":"Reviews for other products","widget_store_reviews_subtab_text":"Store reviews","widget_no_store_reviews_text":"This store hasn't received any reviews yet","widget_web_restriction_product_reviews_text":"This product hasn't received any reviews yet","widget_no_items_text":"No items found","widget_show_more_text":"Show more","widget_write_a_store_review_text":"Write a Store Review","widget_other_languages_heading":"Reviews in Other Languages","widget_translate_review_text":"Translate review to {{ language }}","widget_translating_review_text":"Translating...","widget_show_original_translation_text":"Show original ({{ language }})","widget_translate_review_failed_text":"Review couldn't be translated.","widget_translate_review_retry_text":"Retry","widget_translate_review_try_again_later_text":"Try again later","show_product_url_for_grouped_product":false,"widget_sorting_pictures_first_text":"Pictures First","show_pictures_on_all_rev_page_mobile":false,"show_pictures_on_all_rev_page_desktop":false,"floating_tab_hide_mobile_install_preference":false,"floating_tab_button_name":"★ Reviews","floating_tab_title":"Let customers speak for us","floating_tab_button_color":"","floating_tab_button_background_color":"","floating_tab_url":"","floating_tab_url_enabled":false,"floating_tab_tab_style":"text","all_reviews_text_badge_text":"Customers rate us {{ shop.metafields.judgeme.all_reviews_rating | round: 1 }}/5 based on {{ shop.metafields.judgeme.all_reviews_count }} reviews.","all_reviews_text_badge_text_branded_style":"{{ shop.metafields.judgeme.all_reviews_rating | round: 1 }} out of 5 stars based on {{ shop.metafields.judgeme.all_reviews_count }} reviews","is_all_reviews_text_badge_a_link":false,"show_stars_for_all_reviews_text_badge":false,"all_reviews_text_badge_url":"","all_reviews_text_style":"branded","all_reviews_text_color_style":"judgeme_brand_color","all_reviews_text_color":"#108474","all_reviews_text_show_jm_brand":true,"featured_carousel_show_header":true,"featured_carousel_title":"Let customers speak for us","testimonials_carousel_title":"Customers are saying","videos_carousel_title":"Real customer stories","cards_carousel_title":"Customers are saying","featured_carousel_count_text":"from {{ n }} reviews","featured_carousel_add_link_to_all_reviews_page":false,"featured_carousel_url":"","featured_carousel_show_images":true,"featured_carousel_autoslide_interval":5,"featured_carousel_arrows_on_the_sides":false,"featured_carousel_height":250,"featured_carousel_width":80,"featured_carousel_image_size":0,"featured_carousel_image_height":250,"featured_carousel_arrow_color":"#eeeeee","verified_count_badge_style":"branded","verified_count_badge_orientation":"horizontal","verified_count_badge_color_style":"judgeme_brand_color","verified_count_badge_color":"#108474","is_verified_count_badge_a_link":false,"verified_count_badge_url":"","verified_count_badge_show_jm_brand":true,"widget_rating_preset_default":5,"widget_first_sub_tab":"product-reviews","widget_show_histogram":true,"widget_histogram_use_custom_color":false,"widget_pagination_use_custom_color":false,"widget_star_use_custom_color":false,"widget_verified_badge_use_custom_color":false,"widget_write_review_use_custom_color":false,"picture_reminder_submit_button":"Upload Pictures","enable_review_videos":false,"mute_video_by_default":false,"widget_sorting_videos_first_text":"Videos First","widget_review_pending_text":"Pending","featured_carousel_items_for_large_screen":3,"social_share_options_order":"Facebook,Twitter","remove_microdata_snippet":true,"disable_json_ld":false,"enable_json_ld_products":false,"preview_badge_show_question_text":false,"preview_badge_no_question_text":"No questions","preview_badge_n_question_text":"{{ number_of_questions }} question/questions","qa_badge_show_icon":false,"qa_badge_position":"same-row","remove_judgeme_branding":false,"widget_add_search_bar":false,"widget_search_bar_placeholder":"Search","widget_sorting_verified_only_text":"Verified only","featured_carousel_theme":"default","featured_carousel_show_rating":true,"featured_carousel_show_title":true,"featured_carousel_show_body":true,"featured_carousel_show_date":false,"featured_carousel_show_reviewer":true,"featured_carousel_show_product":false,"featured_carousel_header_background_color":"#108474","featured_carousel_header_text_color":"#ffffff","featured_carousel_name_product_separator":"reviewed","featured_carousel_full_star_background":"#108474","featured_carousel_empty_star_background":"#dadada","featured_carousel_vertical_theme_background":"#f9fafb","featured_carousel_verified_badge_enable":true,"featured_carousel_verified_badge_color":"#108474","featured_carousel_border_style":"round","featured_carousel_review_line_length_limit":3,"featured_carousel_more_reviews_button_text":"Read more reviews","featured_carousel_view_product_button_text":"View product","all_reviews_page_load_reviews_on":"scroll","all_reviews_page_load_more_text":"Load More Reviews","disable_fb_tab_reviews":false,"enable_ajax_cdn_cache":false,"widget_advanced_speed_features":5,"widget_public_name_text":"displayed publicly like","default_reviewer_name":"John Smith","default_reviewer_name_has_non_latin":true,"widget_reviewer_anonymous":"Anonymous","medals_widget_title":"Judge.me Review Medals","medals_widget_background_color":"#f9fafb","medals_widget_position":"footer_all_pages","medals_widget_border_color":"#f9fafb","medals_widget_verified_text_position":"left","medals_widget_use_monochromatic_version":false,"medals_widget_elements_color":"#108474","show_reviewer_avatar":true,"widget_invalid_yt_video_url_error_text":"Not a YouTube video URL","widget_max_length_field_error_text":"Please enter no more than {0} characters.","widget_show_country_flag":false,"widget_show_collected_via_shop_app":true,"widget_verified_by_shop_badge_style":"light","widget_verified_by_shop_text":"Verified by Shop","widget_show_photo_gallery":false,"widget_load_with_code_splitting":true,"widget_ugc_install_preference":false,"widget_ugc_title":"Made by us, Shared by you","widget_ugc_subtitle":"Tag us to see your picture featured in our page","widget_ugc_arrows_color":"#ffffff","widget_ugc_primary_button_text":"Buy Now","widget_ugc_primary_button_background_color":"#108474","widget_ugc_primary_button_text_color":"#ffffff","widget_ugc_primary_button_border_width":"0","widget_ugc_primary_button_border_style":"none","widget_ugc_primary_button_border_color":"#108474","widget_ugc_primary_button_border_radius":"25","widget_ugc_secondary_button_text":"Load More","widget_ugc_secondary_button_background_color":"#ffffff","widget_ugc_secondary_button_text_color":"#108474","widget_ugc_secondary_button_border_width":"2","widget_ugc_secondary_button_border_style":"solid","widget_ugc_secondary_button_border_color":"#108474","widget_ugc_secondary_button_border_radius":"25","widget_ugc_reviews_button_text":"View Reviews","widget_ugc_reviews_button_background_color":"#ffffff","widget_ugc_reviews_button_text_color":"#108474","widget_ugc_reviews_button_border_width":"2","widget_ugc_reviews_button_border_style":"solid","widget_ugc_reviews_button_border_color":"#108474","widget_ugc_reviews_button_border_radius":"25","widget_ugc_reviews_button_link_to":"judgeme-reviews-page","widget_ugc_show_post_date":true,"widget_ugc_max_width":"800","widget_rating_metafield_value_type":true,"widget_primary_color":"#108474","widget_enable_secondary_color":false,"widget_secondary_color":"#edf5f5","widget_summary_average_rating_text":"{{ average_rating }} out of 5","widget_media_grid_title":"Customer photos \u0026 videos","widget_media_grid_see_more_text":"See more","widget_round_style":false,"widget_show_product_medals":true,"widget_verified_by_judgeme_text":"Verified by Judge.me","widget_show_store_medals":true,"widget_verified_by_judgeme_text_in_store_medals":"Verified by Judge.me","widget_media_field_exceed_quantity_message":"Sorry, we can only accept {{ max_media }} for one review.","widget_media_field_exceed_limit_message":"{{ file_name }} is too large, please select a {{ media_type }} less than {{ size_limit }}MB.","widget_review_submitted_text":"Review Submitted!","widget_question_submitted_text":"Question Submitted!","widget_close_form_text_question":"Cancel","widget_write_your_answer_here_text":"Write your answer here","widget_enabled_branded_link":true,"widget_show_collected_by_judgeme":true,"widget_reviewer_name_color":"","widget_write_review_text_color":"","widget_write_review_bg_color":"","widget_collected_by_judgeme_text":"collected by Judge.me","widget_pagination_type":"standard","widget_load_more_text":"Load More","widget_load_more_color":"#108474","widget_full_review_text":"Full Review","widget_read_more_reviews_text":"Read More Reviews","widget_read_questions_text":"Read Questions","widget_questions_and_answers_text":"Questions \u0026 Answers","widget_verified_by_text":"Verified by","widget_verified_text":"Verified","widget_number_of_reviews_text":"{{ number_of_reviews }} reviews","widget_back_button_text":"Back","widget_next_button_text":"Next","widget_custom_forms_filter_button":"Filters","custom_forms_style":"horizontal","widget_show_review_information":false,"how_reviews_are_collected":"How reviews are collected?","widget_show_review_keywords":false,"widget_gdpr_statement":"How we use your data: We'll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me's \u003ca href='https://judge.me/terms' target='_blank' rel='nofollow noopener'\u003eterms\u003c/a\u003e, \u003ca href='https://judge.me/privacy' target='_blank' rel='nofollow noopener'\u003eprivacy\u003c/a\u003e and \u003ca href='https://judge.me/content-policy' target='_blank' rel='nofollow noopener'\u003econtent\u003c/a\u003e policies.","widget_multilingual_sorting_enabled":false,"widget_translate_review_content_enabled":false,"widget_translate_review_content_method":"manual","popup_widget_review_selection":"automatically_with_pictures","popup_widget_round_border_style":true,"popup_widget_show_title":true,"popup_widget_show_body":true,"popup_widget_show_reviewer":false,"popup_widget_show_product":true,"popup_widget_show_pictures":true,"popup_widget_use_review_picture":true,"popup_widget_show_on_home_page":true,"popup_widget_show_on_product_page":true,"popup_widget_show_on_collection_page":true,"popup_widget_show_on_cart_page":true,"popup_widget_position":"bottom_left","popup_widget_first_review_delay":5,"popup_widget_duration":5,"popup_widget_interval":5,"popup_widget_review_count":5,"popup_widget_hide_on_mobile":true,"review_snippet_widget_round_border_style":true,"review_snippet_widget_card_color":"#FFFFFF","review_snippet_widget_slider_arrows_background_color":"#FFFFFF","review_snippet_widget_slider_arrows_color":"#000000","review_snippet_widget_star_color":"#108474","show_product_variant":false,"all_reviews_product_variant_label_text":"Variant: ","widget_show_verified_branding":true,"widget_ai_summary_title":"Customers say","widget_ai_summary_disclaimer":"AI-powered review summary based on recent customer reviews","widget_show_ai_summary":false,"widget_show_ai_summary_bg":false,"widget_show_review_title_input":true,"redirect_reviewers_invited_via_email":"external_form","request_store_review_after_product_review":false,"request_review_other_products_in_order":false,"review_form_color_scheme":"default","review_form_corner_style":"square","review_form_star_color":{},"review_form_text_color":"#333333","review_form_background_color":"#ffffff","review_form_field_background_color":"#fafafa","review_form_button_color":{},"review_form_button_text_color":"#ffffff","review_form_modal_overlay_color":"#000000","review_content_screen_title_text":"How would you rate this product?","review_content_introduction_text":"We would love it if you would share a bit about your experience.","store_review_form_title_text":"How would you rate this store?","store_review_form_introduction_text":"We would love it if you would share a bit about your experience.","show_review_guidance_text":true,"one_star_review_guidance_text":"Poor","five_star_review_guidance_text":"Great","customer_information_screen_title_text":"About you","customer_information_introduction_text":"Please tell us more about you.","custom_questions_screen_title_text":"Your experience in more detail","custom_questions_introduction_text":"Here are a few questions to help us understand more about your experience.","review_submitted_screen_title_text":"Thanks for your review!","review_submitted_screen_thank_you_text":"We are processing it and it will appear on the store soon.","review_submitted_screen_email_verification_text":"Please confirm your email by clicking the link we just sent you. This helps us keep reviews authentic.","review_submitted_request_store_review_text":"Would you like to share your experience of shopping with us?","review_submitted_review_other_products_text":"Would you like to review these products?","store_review_screen_title_text":"Would you like to share your experience of shopping with us?","store_review_introduction_text":"We value your feedback and use it to improve. Please share any thoughts or suggestions you have.","reviewer_media_screen_title_picture_text":"Share a picture","reviewer_media_introduction_picture_text":"Upload a photo to support your review.","reviewer_media_screen_title_video_text":"Share a video","reviewer_media_introduction_video_text":"Upload a video to support your review.","reviewer_media_screen_title_picture_or_video_text":"Share a picture or video","reviewer_media_introduction_picture_or_video_text":"Upload a photo or video to support your review.","reviewer_media_youtube_url_text":"Paste your Youtube URL here","advanced_settings_next_step_button_text":"Next","advanced_settings_close_review_button_text":"Close","modal_write_review_flow":false,"write_review_flow_required_text":"Required","write_review_flow_privacy_message_text":"We respect your privacy.","write_review_flow_anonymous_text":"Post review as anonymous","write_review_flow_visibility_text":"This won't be visible to other customers.","write_review_flow_multiple_selection_help_text":"Select as many as you like","write_review_flow_single_selection_help_text":"Select one option","write_review_flow_required_field_error_text":"This field is required","write_review_flow_invalid_email_error_text":"Please enter a valid email address","write_review_flow_max_length_error_text":"Max. {{ max_length }} characters.","write_review_flow_media_upload_text":"\u003cb\u003eClick to upload\u003c/b\u003e or drag and drop","write_review_flow_gdpr_statement":"We'll only contact you about your review if necessary. By submitting your review, you agree to our \u003ca href='https://judge.me/terms' target='_blank' rel='nofollow noopener'\u003eterms and conditions\u003c/a\u003e and \u003ca href='https://judge.me/privacy' target='_blank' rel='nofollow noopener'\u003eprivacy policy\u003c/a\u003e.","rating_only_reviews_enabled":false,"show_negative_reviews_help_screen":false,"new_review_flow_help_screen_rating_threshold":3,"negative_review_resolution_screen_title_text":"Tell us more","negative_review_resolution_text":"Your experience matters to us. If there were issues with your purchase, we're here to help. Feel free to reach out to us, we'd love the opportunity to make things right.","negative_review_resolution_button_text":"Contact us","negative_review_resolution_proceed_with_review_text":"Leave a review","negative_review_resolution_subject":"Issue with purchase from {{ shop_name }}.{{ order_name }}","preview_badge_collection_page_install_status":false,"widget_review_custom_css":"","preview_badge_custom_css":"","preview_badge_stars_count":"5-stars","featured_carousel_custom_css":"","floating_tab_custom_css":"","all_reviews_widget_custom_css":"","medals_widget_custom_css":"","verified_badge_custom_css":"","all_reviews_text_custom_css":"","transparency_badges_collected_via_store_invite":false,"transparency_badges_from_another_provider":false,"transparency_badges_collected_from_store_visitor":false,"transparency_badges_collected_by_verified_review_provider":false,"transparency_badges_earned_reward":false,"transparency_badges_collected_via_store_invite_text":"Review collected via store invitation","transparency_badges_from_another_provider_text":"Review collected from another provider","transparency_badges_collected_from_store_visitor_text":"Review collected from a store visitor","transparency_badges_written_in_google_text":"Review written in Google","transparency_badges_written_in_etsy_text":"Review written in Etsy","transparency_badges_written_in_shop_app_text":"Review written in Shop App","transparency_badges_earned_reward_text":"Review earned a reward for future purchase","product_review_widget_per_page":10,"widget_store_review_label_text":"Review about the store","checkout_comment_extension_title_on_product_page":"Customer Comments","checkout_comment_extension_num_latest_comment_show":5,"checkout_comment_extension_format":"name_and_timestamp","checkout_comment_customer_name":"last_initial","checkout_comment_comment_notification":true,"preview_badge_collection_page_install_preference":false,"preview_badge_home_page_install_preference":false,"preview_badge_product_page_install_preference":false,"review_widget_install_preference":"","review_carousel_install_preference":false,"floating_reviews_tab_install_preference":"none","verified_reviews_count_badge_install_preference":false,"all_reviews_text_install_preference":false,"review_widget_best_location":false,"judgeme_medals_install_preference":false,"review_widget_revamp_enabled":false,"review_widget_qna_enabled":false,"review_widget_header_theme":"minimal","review_widget_widget_title_enabled":true,"review_widget_header_text_size":"medium","review_widget_header_text_weight":"regular","review_widget_average_rating_style":"compact","review_widget_bar_chart_enabled":true,"review_widget_bar_chart_type":"numbers","review_widget_bar_chart_style":"standard","review_widget_expanded_media_gallery_enabled":false,"review_widget_reviews_section_theme":"standard","review_widget_image_style":"thumbnails","review_widget_review_image_ratio":"square","review_widget_stars_size":"medium","review_widget_verified_badge":"standard_text","review_widget_review_title_text_size":"medium","review_widget_review_text_size":"medium","review_widget_review_text_length":"medium","review_widget_number_of_columns_desktop":3,"review_widget_carousel_transition_speed":5,"review_widget_custom_questions_answers_display":"always","review_widget_button_text_color":"#FFFFFF","review_widget_text_color":"#000000","review_widget_lighter_text_color":"#7B7B7B","review_widget_corner_styling":"soft","review_widget_review_word_singular":"review","review_widget_review_word_plural":"reviews","review_widget_voting_label":"Helpful?","review_widget_shop_reply_label":"Reply from {{ shop_name }}:","review_widget_filters_title":"Filters","qna_widget_question_word_singular":"Question","qna_widget_question_word_plural":"Questions","qna_widget_answer_reply_label":"Answer from {{ answerer_name }}:","qna_content_screen_title_text":"Ask a question about this product","qna_widget_question_required_field_error_text":"Please enter your question.","qna_widget_flow_gdpr_statement":"We'll only contact you about your question if necessary. By submitting your question, you agree to our \u003ca href='https://judge.me/terms' target='_blank' rel='nofollow noopener'\u003eterms and conditions\u003c/a\u003e and \u003ca href='https://judge.me/privacy' target='_blank' rel='nofollow noopener'\u003eprivacy policy\u003c/a\u003e.","qna_widget_question_submitted_text":"Thanks for your question!","qna_widget_close_form_text_question":"Close","qna_widget_question_submit_success_text":"We’ll notify you by email when your question is answered.","all_reviews_widget_v2025_enabled":false,"all_reviews_widget_v2025_header_theme":"default","all_reviews_widget_v2025_widget_title_enabled":true,"all_reviews_widget_v2025_header_text_size":"medium","all_reviews_widget_v2025_header_text_weight":"regular","all_reviews_widget_v2025_average_rating_style":"compact","all_reviews_widget_v2025_bar_chart_enabled":true,"all_reviews_widget_v2025_bar_chart_type":"numbers","all_reviews_widget_v2025_bar_chart_style":"standard","all_reviews_widget_v2025_expanded_media_gallery_enabled":false,"all_reviews_widget_v2025_show_store_medals":true,"all_reviews_widget_v2025_show_photo_gallery":true,"all_reviews_widget_v2025_show_review_keywords":false,"all_reviews_widget_v2025_show_ai_summary":false,"all_reviews_widget_v2025_show_ai_summary_bg":false,"all_reviews_widget_v2025_add_search_bar":false,"all_reviews_widget_v2025_default_sort_method":"most-recent","all_reviews_widget_v2025_reviews_per_page":10,"all_reviews_widget_v2025_reviews_section_theme":"default","all_reviews_widget_v2025_image_style":"thumbnails","all_reviews_widget_v2025_review_image_ratio":"square","all_reviews_widget_v2025_stars_size":"medium","all_reviews_widget_v2025_verified_badge":"bold_badge","all_reviews_widget_v2025_review_title_text_size":"medium","all_reviews_widget_v2025_review_text_size":"medium","all_reviews_widget_v2025_review_text_length":"medium","all_reviews_widget_v2025_number_of_columns_desktop":3,"all_reviews_widget_v2025_carousel_transition_speed":5,"all_reviews_widget_v2025_custom_questions_answers_display":"always","all_reviews_widget_v2025_show_product_variant":false,"all_reviews_widget_v2025_show_reviewer_avatar":true,"all_reviews_widget_v2025_reviewer_name_as_initial":"","all_reviews_widget_v2025_review_location_show":false,"all_reviews_widget_v2025_location_format":"","all_reviews_widget_v2025_show_country_flag":false,"all_reviews_widget_v2025_verified_by_shop_badge_style":"light","all_reviews_widget_v2025_social_share":false,"all_reviews_widget_v2025_social_share_options_order":"Facebook,Twitter,LinkedIn,Pinterest","all_reviews_widget_v2025_pagination_type":"standard","all_reviews_widget_v2025_button_text_color":"#FFFFFF","all_reviews_widget_v2025_text_color":"#000000","all_reviews_widget_v2025_lighter_text_color":"#7B7B7B","all_reviews_widget_v2025_corner_styling":"soft","all_reviews_widget_v2025_title":"Customer reviews","all_reviews_widget_v2025_ai_summary_title":"Customers say about this store","all_reviews_widget_v2025_no_review_text":"Be the first to write a review","platform":"shopify","branding_url":"https://app.judge.me/reviews","branding_text":"Powered by Judge.me","locale":"en","reply_name":"JustEvites","widget_version":"3.0","footer":true,"autopublish":true,"review_dates":true,"enable_custom_form":false,"shop_locale":"en","enable_multi_locales_translations":false,"show_review_title_input":true,"review_verification_email_status":"always","can_be_branded":false,"reply_name_text":"JustEvites"};

!function(e){window.jdgm=window.jdgm||{};
/* INF-1976 */
var _jdgmBlocked=function(){var raw=(window.jdgmSettings||{}).hostname_allowlist;var list=(raw==null?"":""+raw).split(/[\s,]+/).map(function(h){return h.trim().toLowerCase().replace(/\.$/,"");}).filter(function(h){return h;});if(!list.length)return false;var host=(e.location.hostname||"").toLowerCase().replace(/\.$/,"");if(/(^|\.)shopifypreview\.com$/.test(host))return false;var bare=host.replace(/^www\./,"");for(var i=0;i<list.length;i++){var en=list[i];if(en.indexOf("*.")===0){var b=en.slice(2);if(host===b||host.slice(-(b.length+1))==="."+b)return false;}else if(bare===en.replace(/^www\./,""))return false;}return true;}();
if(_jdgmBlocked){jdgm._loaderExecuted=true;jdgm._blocked=true;var _jdgmS=e.createElement("style");_jdgmS.textContent='[class^="jdgm-"],[class*=" jdgm-"]{display:none !important}';(e.head||e.documentElement).appendChild(_jdgmS);return;}
jdgm.CDN_HOST="https://cdnwidget.judge.me/",jdgm.CDN_HOST_ALT="https://cdn2.judge.me/cdn/widget_frontend/",jdgm.API_HOST="https://api.judge.me/",jdgm.CDN_BASE_URL="https://cdn.shopify.com/extensions/01a0fd03-c455-7b82-9766-74101e55572c/judgeme-771/assets/",jdgm.CDN_API_HOST="https://cdn.judge.me/",
jdgm.docReady=function(d){(e.attachEvent?"complete"===e.readyState:"loading"!==e.readyState)?
setTimeout(d,0):e.addEventListener("DOMContentLoaded",d)},jdgm.loadCSS=function(d,t,o,a){
!o&&jdgm.loadCSS.requestedUrls.indexOf(d)>=0||(jdgm.loadCSS.requestedUrls.push(d),
(a=e.createElement("link")).rel="stylesheet",a.class="jdgm-stylesheet",a.media="nope!",
a.href=d,a.onload=function(){this.media="all",t&&setTimeout(t)},e.body.appendChild(a))},
jdgm.loadCSS.requestedUrls=[],jdgm.loadJS=function(e,d){var t=new XMLHttpRequest;
t.onreadystatechange=function(){4===t.readyState&&t.status>=200&&t.status<300&&(Function(t.response)(),d&&d(t.response))},
t.open("GET",e),t.onerror=function(){if(e.indexOf(jdgm.CDN_HOST)===0&&jdgm.CDN_HOST_ALT!==jdgm.CDN_HOST){var f=e.replace(jdgm.CDN_HOST,jdgm.CDN_HOST_ALT);jdgm.loadJS(f,d)}},t.send()},jdgm.docReady((function(){(window.jdgmLoadCSS||e.querySelectorAll(
".jdgm-widget, .jdgm-all-reviews-page").length>0)&&(jdgmSettings.widget_load_with_code_splitting?
parseFloat(jdgmSettings.widget_version)>=3?jdgm.loadCSS(jdgm.CDN_BASE_URL+"widget_v3_base.css"):
jdgm.loadCSS(jdgm.CDN_BASE_URL+"widget_base.css"):jdgm.loadCSS(jdgm.CDN_BASE_URL+"shopify_v2.css")
)}))}(document);


    (function () {
      var intro = document.querySelector('.intro-cover');
      var music = document.getElementById('saBackgroundMusic');
      var musicButton = document.getElementById('saMusicButton');
      var scrollHint = document.getElementById('saScrollHint');
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
      var opening = false;

      function updateMusicButton() {
        if (!music || !musicButton) return;
        var isPlaying = !music.paused && !music.muted;
        musicButton.textContent = isPlaying ? '🔊' : '🔇';
        musicButton.setAttribute('aria-label', isPlaying ? 'Mute music' : 'Play music');
        musicButton.title = isPlaying ? 'Mute music' : 'Play music';
      }

      function playMusic() {
        if (!music) return;
        music.muted = false;
        var playPromise = music.play();
        if (playPromise) playPromise.then(updateMusicButton).catch(updateMusicButton);
      }

      function openInvitation() {
        if (opening) return;
        opening = true;
        playMusic();
        if (intro) intro.classList.add('is-opening');
        window.setTimeout(function () {
          if (intro) intro.remove();
          document.documentElement.classList.remove('intro-locked');
          window.scrollTo(0, 0);
          window.dispatchEvent(new Event('invitation:opened'));
        }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 30 : 2250);
      }

      if (intro) intro.addEventListener('click', openInvitation);
      if (intro) intro.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openInvitation();
        }
      });

      if (musicButton) {
        musicButton.addEventListener('click', function (event) {
          event.stopPropagation();
          if (!music) return;
          if (music.paused) {
            playMusic();
          } else {
            music.muted = !music.muted;
            updateMusicButton();
          }
        });
      }
      if (music) {
        music.addEventListener('playing', updateMusicButton);
        music.addEventListener('pause', updateMusicButton);
      }
      updateMusicButton();

      function updateScrollHint() {
        if (scrollHint) scrollHint.classList.toggle('is-hidden', window.scrollY > 80);
      }
      if (scrollHint) {
        window.addEventListener('scroll', updateScrollHint, { passive:true });
        updateScrollHint();
      }
    }());
  

    (function () {
      var aosStarted = false;

      function initInvitationAOS() {
        if (aosStarted || !window.AOS) return;
        aosStarted = true;
        AOS.init({ duration: 1800, once: false, mirror: true, offset: 80, easing: 'ease-out-cubic' });
      }

      window.initInvitationAOS = initInvitationAOS;
      window.addEventListener('invitation:opened', initInvitationAOS, { once: true });
      if (!document.documentElement.classList.contains('intro-locked')) initInvitationAOS();

      var sparkleLayer = document.querySelector('.junction__sparkles');
      if (sparkleLayer) {
        var sparkleFragment = document.createDocumentFragment();
        for (var sparkleIndex = 0; sparkleIndex < 28; sparkleIndex += 1) {
          var sparkle = document.createElement('i');
          sparkle.className = 'junction__sparkle';
          sparkle.style.setProperty('--x', (3 + (sparkleIndex * 37) % 95) + '%');
          sparkle.style.setProperty('--y', (7 + (sparkleIndex * 53) % 78) + '%');
          sparkle.style.setProperty('--size', (2 + (sparkleIndex * 17) % 4) + 'px');
          sparkle.style.setProperty('--duration', (1.4 + ((sparkleIndex * 23) % 18) / 10).toFixed(1) + 's');
          sparkle.style.setProperty('--delay', (-((sparkleIndex * 31) % 30) / 10).toFixed(1) + 's');
          sparkleFragment.appendChild(sparkle);
        }
        sparkleLayer.appendChild(sparkleFragment);
      }

      var petalSections = document.querySelectorAll('.events, .closing');
      var ticking = false;

      function updatePetals() {
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        petalSections.forEach(function (section, sectionIndex) {
          var rect = section.getBoundingClientRect();
          var sectionTop = window.scrollY + rect.top;
          var progress;
          if (section.classList.contains('events')) {
            // These petals belong to Dil Dhadakne Do near the bottom of .events.
            // Keep their exact Figma positions until that cluster enters the viewport.
            var clusterStart = sectionTop + section.offsetHeight * 0.682 - viewportHeight;
            var clusterEnd = sectionTop + section.offsetHeight * 0.86 - viewportHeight * 0.35;
            progress = Math.max(0, Math.min(1, (window.scrollY - clusterStart) / (clusterEnd - clusterStart)));
          } else {
            // Closing petals occupy roughly 28%-60% of their section. Tie their
            // motion to that cluster entering the viewport, not to the section top.
            var closingStart = sectionTop + section.offsetHeight * 0.27 - viewportHeight;
            var closingEnd = sectionTop + section.offsetHeight * 0.64 - viewportHeight * 0.35;
            progress = Math.max(0, Math.min(1, (window.scrollY - closingStart) / (closingEnd - closingStart)));
          }
          var motion = progress * progress * (3 - 2 * progress);
          var drift = motion * (section.classList.contains('events') ? 400 : 280);
          section.querySelectorAll('.events__petal, .closing__petal').forEach(function (petal, index) {
            var baseTransform = petal.dataset.baseTransform;
            if (baseTransform === undefined) {
              baseTransform = petal.style.transform || '';
              petal.dataset.baseTransform = baseTransform;
            }
            // Per-petal deterministic variation so the bunch doesn't fall as one block.
            var speed = 0.65 + ((index * 37) % 60) / 100;   // 0.65 - 1.25
            var swayAmp = 8 + ((index * 53) % 16);          // 8 - 24 px lateral drift
            var rotAmp = 6 + ((index * 29) % 12);           // 6 - 18 deg gentle rock
            var phase = (index % 7) * 0.9;
            var wave = motion * Math.PI * 2 + phase;
            var fall = drift * speed;
            var sway = Math.sin(wave) * swayAmp * motion;
            var rot = Math.sin(wave * 1.5) * rotAmp * motion;
            petal.style.transform = 'translate3d(' + sway.toFixed(2) + 'px, ' + fall.toFixed(2) + 'px, 0) rotate(' + rot.toFixed(2) + 'deg) ' + baseTransform;
          });
        });
        ticking = false;
      }

      function requestPetalUpdate() {
        if (!ticking) {
          window.requestAnimationFrame(updatePetals);
          ticking = true;
        }
      }

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', requestPetalUpdate, { passive: true });
        window.addEventListener('resize', requestPetalUpdate);
        requestPetalUpdate();
      }
    }());
  

    (function () {
      var story = document.querySelector('.story');
      var scrollBottom = story && story.querySelector('.story__scroll-bottom');
      var monkey = story && story.querySelector('.story__monkey');
      var ganesh = story && story.querySelector('.story__ganesh');
      var copy = story && story.querySelector('.story__copy');
      if (!story || !scrollBottom || !monkey || !ganesh || !copy) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        ganesh.style.clipPath = 'none';
        copy.style.clipPath = 'none';
        return;
      }

      var storyTicking = false;

      function updateStoryScroll() {
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        var rect = story.getBoundingClientRect();
        var storyTop = window.scrollY + rect.top;
        var storyHeight = story.offsetHeight;
        var topBoundaryFrac = 0.19047 + 0.07224;
        var bottomTopFrac = 0.20799;
        var bottomHeightFrac = 0.63294;
        var topBoundaryY = storyTop + topBoundaryFrac * storyHeight;

        // Begin only after the fixed upper roll is clearly inside the viewport.
        var start = topBoundaryY - viewportHeight * 0.68;
        var end = start + storyHeight * 0.5;
        var progress = Math.max(0, Math.min(1, (window.scrollY - start) / (end - start)));
        var eased = progress * progress * (3 - 2 * progress);
        // Original CSS coordinates are the final positions. Initially the lower
        // parchment is rolled up with its bottom edge at the upper-roll boundary.
        var startOffset = (topBoundaryFrac - bottomTopFrac - bottomHeightFrac) * storyHeight;
        var translateY = startOffset * (1 - eased);

        scrollBottom.style.transform = 'translate3d(0, ' + translateY.toFixed(2) + 'px, 0)';
        monkey.style.transform = 'translate3d(0, ' + translateY.toFixed(2) + 'px, 0)';

        // The upper roll is the reveal boundary: hide the portion of the moving
        // parchment that has not crossed below it yet.
        var bottomTopY = storyTop + bottomTopFrac * storyHeight + translateY;
        var bottomHeight = bottomHeightFrac * storyHeight;
        // Keep the boundary mask active for the whole animation so parchment can
        // never appear above the upper roll. A small overlap remains underneath
        // the roll to avoid exposing a white seam at the join.
        var overlap = storyHeight * 0.016;
        var hiddenTop = Math.max(0, Math.min(bottomHeight, topBoundaryY - overlap - bottomTopY));
        var bottomClip = 'inset(' + (hiddenTop / bottomHeight * 100).toFixed(2) + '% 0 0 0)';
        scrollBottom.style.webkitClipPath = bottomClip;
        scrollBottom.style.clipPath = bottomClip;

        // The lower edge of the moving parchment is the actual opening edge.
        // Hold content back until the scroll has opened a little farther, rather
        // than revealing as soon as the lower edge merely touches each element.
        var openingEdgeY = bottomTopY + bottomHeight;
        var revealEdgeY = openingEdgeY - storyHeight * 0.055;
        var ganeshTopY = storyTop + ganesh.offsetTop;
        var ganeshReveal = Math.max(0, Math.min(1, (revealEdgeY - ganeshTopY) / ganesh.offsetHeight));
        var ganeshClip = 'inset(0 0 ' + (100 * (1 - ganeshReveal)).toFixed(2) + '% 0)';
        ganesh.style.webkitClipPath = ganeshClip;
        ganesh.style.clipPath = ganeshClip;

        var copyTopY = storyTop + copy.offsetTop;
        var reveal = Math.max(0, Math.min(1, (revealEdgeY - copyTopY) / copy.offsetHeight));
        var hiddenBottom = (100 * (1 - reveal)).toFixed(2);
        var clip = 'inset(0 0 ' + hiddenBottom + '% 0)';
        copy.style.webkitClipPath = clip;
        copy.style.clipPath = clip;
        storyTicking = false;
      }

      function requestStoryUpdate() {
        if (!storyTicking) {
          window.requestAnimationFrame(updateStoryScroll);
          storyTicking = true;
        }
      }

      window.addEventListener('scroll', requestStoryUpdate, { passive: true });
      window.addEventListener('resize', requestStoryUpdate);
      requestStoryUpdate();
    }());
  

    (function () {
      var portrait = document.querySelector('.events45__portrait');
      var section = portrait && portrait.closest('.events45');
      if (!portrait || !section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      function arrive() {
        portrait.classList.add('is-arriving');
        window.removeEventListener('scroll', checkPosition);
        window.removeEventListener('resize', checkPosition);
      }

      function checkPosition() {
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        var sectionRect = section.getBoundingClientRect();
        // Use the portrait's untransformed CSS position, not its off-screen
        // animated bounding box, to decide when the entrance should begin.
        var portraitRestTop = sectionRect.top + section.offsetHeight * 0.28974;
        if (portraitRestTop <= viewportHeight * 0.88 && portraitRestTop >= -viewportHeight * 0.2) {
          arrive();
        }
      }

      window.addEventListener('scroll', checkPosition, { passive: true });
      window.addEventListener('resize', checkPosition);
      checkPosition();
    }());
  

    (function () {
      var opening = document.querySelector('.opening');
      var mangoes = document.querySelectorAll('.opening__mango');
      if (!opening || !mangoes.length) return;

      var countdownDays = opening.querySelector('[data-countdown-days]');
      var countdownHours = opening.querySelector('[data-countdown-hours]');
      var countdownMins = opening.querySelector('[data-countdown-mins]');
      var countdownTarget = new Date('2026-10-25T00:00:00+05:30').getTime();

      function padCountdown(value) {
        return String(value).padStart(2, '0');
      }

      function updateCountdown() {
        var remaining = Math.max(0, countdownTarget - Date.now());
        var totalMinutes = Math.floor(remaining / 60000);
        var days = Math.floor(totalMinutes / 1440);
        var hours = Math.floor((totalMinutes % 1440) / 60);
        var mins = totalMinutes % 60;
        if (countdownDays) countdownDays.textContent = String(days);
        if (countdownHours) countdownHours.textContent = padCountdown(hours);
        if (countdownMins) countdownMins.textContent = padCountdown(mins);
      }

      updateCountdown();
      window.setInterval(updateCountdown, 30000);

      function launchConfetti() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        var colors = ['#f4c542', '#e8899a', '#7fa64a', '#f08a38', '#9b5aa5', '#fff1c7'];
        var layer = document.createElement('div');
        layer.className = 'sa-confetti-layer';
        layer.setAttribute('aria-hidden', 'true');
        for (var index = 0; index < 52; index += 1) {
          var piece = document.createElement('i');
          piece.className = 'sa-confetti-piece';
          piece.style.setProperty('--left', (Math.random() * 100).toFixed(2) + 'vw');
          piece.style.setProperty('--size', (6 + Math.random() * 7).toFixed(2) + 'px');
          piece.style.setProperty('--color', colors[index % colors.length]);
          piece.style.setProperty('--delay', (Math.random() * .55).toFixed(2) + 's');
          piece.style.setProperty('--duration', (2.1 + Math.random() * .75).toFixed(2) + 's');
          piece.style.setProperty('--drift', (-55 + Math.random() * 110).toFixed(1) + 'px');
          piece.style.setProperty('--turn', (360 + Math.random() * 720).toFixed(0) + 'deg');
          layer.appendChild(piece);
        }
        document.body.appendChild(layer);
        window.setTimeout(function () { layer.remove(); }, 3300);
      }

      function revealDate() {
        if (opening.classList.contains('is-date-revealed')) return;
        updateCountdown();
        mangoes.forEach(function (mango) { mango.classList.add('is-revealed'); });
        opening.classList.add('is-date-revealed');
        launchConfetti();
      }

      opening.addEventListener('click', function (event) {
        if (event.target.closest('.opening__mango, .opening__reveal')) revealDate();
      });

      var moon = document.querySelector('.events45__moon');
      var moonSection = moon && moon.closest('.events45');
      var moonTicking = false;

      function updateMoon() {
        if (!moon || !moonSection) return;
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        var rect = moonSection.getBoundingClientRect();
        var sectionTop = window.scrollY + rect.top;
        var offH = moonSection.offsetHeight;
        // Boundary between Archie's section (upper) and Sarva Mangala (lower).
        // The moon starts hidden just above this line (lower end of Archie) and slides
        // straight down into Sarva Mangala. Only the portion that has crossed the
        // boundary into Sarva Mangala is shown — the rest stays hidden, so it reads
        // like the moon is emerging from behind Archie's section.
        var boundaryFrac = 0.50;
        var restFrac = 0.69894; // moon CSS top
        var moonFrac = 0.084;   // moon CSS height
        var boundaryY = sectionTop + boundaryFrac * offH;
        var restTopY = sectionTop + restFrac * offH;
        var moonH = moonFrac * offH;
        var startOffset = (boundaryY - moonH) - restTopY; // negative: up in Archie, fully hidden
        var descentStart = boundaryY - viewportHeight;      // boundary reaches viewport bottom
        var descentEnd = restTopY - viewportHeight * 0.55;  // rest reaches mid viewport
        var p = Math.max(0, Math.min(1, (window.scrollY - descentStart) / (descentEnd - descentStart)));
        var eased = p * p * (3 - 2 * p); // smoothstep for a soft settle
        var translateY = startOffset * (1 - eased);
        var moonTopY = restTopY + translateY;
        // Clip away whatever is still above the boundary (still inside Archie's section).
        var hiddenPx = Math.max(0, Math.min(moonH, boundaryY - moonTopY));
        var clip = 'inset(' + (hiddenPx / moonH * 100).toFixed(2) + '% 0 0 0)';
        moon.style.opacity = '1';
        moon.style.webkitClipPath = clip;
        moon.style.clipPath = clip;
        moon.style.transform = 'translate3d(0, ' + translateY.toFixed(2) + 'px, 0)';
        moonTicking = false;
      }

      function requestMoonUpdate() {
        if (!moonTicking) {
          window.requestAnimationFrame(updateMoon);
          moonTicking = true;
        }
      }

      if (moon && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', requestMoonUpdate, { passive: true });
        window.addEventListener('resize', requestMoonUpdate);
        requestMoonUpdate();
      }
    }());
  

  
    _appioGoogleReviewsData = {"place":{"id":"0x31eac016f477e4c9","placeId":"ChIJUc_zrbRPqkgRyeR39BbA6jE","name":"JustEvites","address":"","category":"Greeting card shop","ratings":4.9,"total":30,"photo":"https://lh3.googleusercontent.com/grass-cs/ACvplmObWJGe_asB5gVpeSPMzKiJpyq4d6RltJd3Ya_9IN_VDEyoyI8Dwte-44RW_8QvCcTuOBlF3dsqL4Rhiu1VRGQbcyC6SdNm6gShzDyEXpZS0JfXQaCRXiRY04fKNau5UYw9kConsy0s5VGV","summaryRating":[0,0,0,2,28]},"reviews":[{"id":470135086,"shopOrigin":"c674b6-fb.myshopify.com","reviewId":"Ci9DQUlRQUNvZENodHljRjlvT2paQ2NGTjBOMGxqUjE5blNFWkxkMGxYUVhsWmFVRRAB","placeId":null,"authorName":"RAJAT CHANDIWALA","authorProfileUrl":"https://www.google.com/maps/contrib/111268466284692234321?hl=en","authorPhotoUrl":"https://lh3.googleusercontent.com/a-/ALV-UjWXbHkKveBIIeXRobRClbDFzXJfMdtV3ioDTD_JlBnqTu_EvLfdug=s120-c-rp-mo-br100","authorDetail":"6 reviews","rating":5,"language":"en","originalText":"Got the invite as i expected.. the editor accepted multiple iterations.. overall great service","translatedText":"","status":null,"reviewUrl":"https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2paQ2NGTjBOMGxqUjE5blNFWkxkMGxYUVhsWmFVRRAB!2m1!1s0x0:0x31eac016f477e4c9!3m1!1s2@1:CAIQACodChtycF9oOjZCcFN0N0ljR19nSEZLd0lXQXlZaUE%7C%7C?hl=en","createdAt":"2026-08-30 18:14:14","createdAtHuman":"4 weeks ago","updatedAt":"2026-08-30 18:14:14","photos":null,"liked":null,"isFeatured":null}],"nextPageToken":2,"language":"en"}
  
  
  _shopSettings = {"sortBy":"highest-rating","language":"en","customTexts":{},"customizeCSS":"","multiLanguage":["en"],"showAISummary":false,"filterByRating":"4","reviewsPerPage":"1","enableGoogleLink":true,"filterByBlockWords":false,"showReviewsWithContentOnly":false,"displayReviewsInOriginalLanguage":true};
  
  _googleVersion = '3.0';
  _lastInstall = '2025-12-07 10:45:25'
  _googleReviewsPage = "page";


        
            isShowPoweredBy: "ON",
            isShowResponseText: "ON",
        };
        }
    
(() => {
        window.addoncropExtensions = window.addoncropExtensions || [];
        window.addoncropExtensions.push({
            mode: 'emulator',
            emulator: 'CRXEmulator',
            extension: {
                id: 44,
                name: 'YouTube Downloader by Addoncrop',
                version: '17.9.9',
                date: 'November 25, 2024',
            },
            flixmateConnected: false,
        });
    })();

// Lenis Smooth Scrolling Setup
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Example Anime.js setup (you can add specific animations here)
document.addEventListener('DOMContentLoaded', () => {
  anime({
    targets: '.intro-cover__art',
    translateY: [-20, 0],
    opacity: [0, 1],
    delay: anime.stagger(200),
    easing: 'easeOutQuad'
  });
});
