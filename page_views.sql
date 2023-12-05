select
    visitor_id,
    hit,
    timestamp,
    url ->> 'pathname' as pathname,
    user_agent ->> 'ua' as user_agent,
    array[geo ->> 'country', geo ->> 'region' , geo ->> 'city' , geo ->> 'ip'] as geo,
    array [referrer ->> 'host', referrer ->> 'pathname', referrer ->> 'searchParams'] as referrer
from
    page_view
where
    internal_request = false
    and url ->> 'host' = 'havel-alm.de'