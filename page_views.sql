-- get all sessions with their page views
--- explain analyze
select
    visitor_id,
    min(timestamp) as timestamp,
    case
        when count(*) > 1 then max(timestamp) - min(timestamp)
        else null
    end as duration,
    count(*) as hits,
    array_agg(
        url ->> 'pathname'
        order by
            hit asc
    ) as pathnames,
    min(user_agent ->> 'ua') as user_agent,
    min(
        array [geo ->> 'country', geo ->> 'region' , geo ->> 'city' , geo ->> 'ip']
    ) as geo,
    min(
        array [referrer ->> 'host', referrer ->> 'pathname', referrer ->> 'searchParams']
    ) as referrer
from
    page_view
where
    internal_request = false
    and url ->> 'host' = 'havel-alm.de'
group by
    visitor_id,
    session_id
order by
    timestamp asc;

\ x

SELECT
    month,
    count(*) as page_views,
    count(distinct visitor_id) as visitors
FROM
    (
        select
            to_char(timestamp, 'YYYY-MM') as month,
            visitor_id
        from
            page_view
    ) t
group by
    month
order by
    month;