import { integer, pgEnum, pgTable, serial, timestamp, uniqueIndex, varchar, uuid, jsonb } from 'drizzle-orm/pg-core';


export const PageViewTable = pgTable(
  'page_view',
  {
    visitorId: uuid('visitor_id').notNull(),
    sessionId: uuid('session_id').notNull(),
    hit: integer('hit').notNull(),
    timestamp: timestamp('timestamp',{withTimezone: true}).notNull(),
    url: jsonb('url').notNull().default("{}"),
    referrer: jsonb('referrer').notNull().default("{}"),
    cookies: jsonb('cookies').notNull().default("{}"),
    userAgent: jsonb('user_agent').notNull().default("{}"),
    geo: jsonb('geo').notNull().default("{}")
  })

  
// import { InferSelectModel, InferInsertModel } from 'drizzle-orm'

// export type PageView = InferSelectModel<typeof PageViewTable>
// export type PageViewInsert = InferInsertModel<typeof PageViewTable>

