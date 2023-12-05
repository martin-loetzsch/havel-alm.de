select
    --visitor_id,
    min(timestamp) as timestamp,
    count(*) as hits,
    array_agg(url->>'pathname' order by hit asc) as pathnames,
    min(user_agent ->> 'ua') as user_agent,
    min(array[geo ->> 'country', geo ->> 'region' , geo ->> 'city' , geo ->> 'ip']) as geo,
    min(array [referrer ->> 'host', referrer ->> 'pathname', referrer ->> 'searchParams']) as referrer
from
    page_view
where
    internal_request = false
    and url ->> 'host' = 'havel-alm.de'
group by
    visitor_id, session_id
order by timestamp asc
