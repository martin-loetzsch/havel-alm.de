select
    visitor_id,
    hit,
    timestamp,
    url ->> 'pathname' as pathname,
    user_agent ->> 'ua' as user_agent,
    geo ->> 'country' as country,
    geo->> 'region' as region,
    geo->> 'city' as city,
    geo->> 'ip' as ip,
    referrer    ->> 'host' as referrer_host,
    referrer ->> 'pathname' as referrer_pathname,
    referrer ->> 'searchParams' as referrer_search_params
    
from
    page_view
where
    internal_request = false
    and url ->> 'host' = 'havel-alm.de'