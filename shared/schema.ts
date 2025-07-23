import { pgTable, text, serial, integer, boolean, timestamp, real, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  location: text("location"),
  favoriteStops: text("favorite_stops").array().default([]),
  favoriteRoutes: text("favorite_routes").array().default([]),
  notifications: boolean("notifications").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const transportStops = pgTable("transport_stops", {
  id: serial("id").primaryKey(),
  stopId: text("stop_id").notNull().unique(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
  routes: text("routes").array().default([]),
  isActive: boolean("is_active").default(true),
});

export const transportRoutes = pgTable("transport_routes", {
  id: serial("id").primaryKey(),
  routeId: text("route_id").notNull().unique(),
  routeNumber: text("route_number").notNull(),
  name: text("name").notNull(),
  destination: text("destination").notNull(),
  color: text("color").default("#2196F3"),
  isActive: boolean("is_active").default(true),
});

export const liveTransport = pgTable("live_transport", {
  id: serial("id").primaryKey(),
  vehicleId: text("vehicle_id").notNull().unique(),
  routeId: text("route_id").notNull(),
  stopId: text("stop_id"),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
  heading: real("heading"),
  speed: real("speed"),
  occupancyLevel: integer("occupancy_level").default(0),
  estimatedArrival: timestamp("estimated_arrival"),
  delay: integer("delay").default(0),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

export const tripPlans = pgTable("trip_plans", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  fromLocation: text("from_location").notNull(),
  toLocation: text("to_location").notNull(),
  fromLatitude: real("from_latitude").notNull(),
  fromLongitude: real("from_longitude").notNull(),
  toLatitude: real("to_latitude").notNull(),
  toLongitude: real("to_longitude").notNull(),
  routes: jsonb("routes"),
  estimatedDuration: integer("estimated_duration"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const alerts = pgTable("alerts", {
  id: serial("id").primaryKey(),
  routeId: text("route_id"),
  stopId: text("stop_id"),
  title: text("title").notNull(),
  message: text("message").notNull(),
  severity: text("severity").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  expiresAt: timestamp("expires_at"),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertTransportStopSchema = createInsertSchema(transportStops).omit({
  id: true,
});

export const insertTransportRouteSchema = createInsertSchema(transportRoutes).omit({
  id: true,
});

export const insertLiveTransportSchema = createInsertSchema(liveTransport).omit({
  id: true,
  lastUpdated: true,
});

export const insertTripPlanSchema = createInsertSchema(tripPlans).omit({
  id: true,
  createdAt: true,
});

export const insertAlertSchema = createInsertSchema(alerts).omit({
  id: true,
  createdAt: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type TransportStop = typeof transportStops.$inferSelect;
export type InsertTransportStop = z.infer<typeof insertTransportStopSchema>;

export type TransportRoute = typeof transportRoutes.$inferSelect;
export type InsertTransportRoute = z.infer<typeof insertTransportRouteSchema>;

export type LiveTransport = typeof liveTransport.$inferSelect;
export type InsertLiveTransport = z.infer<typeof insertLiveTransportSchema>;

export type TripPlan = typeof tripPlans.$inferSelect;
export type InsertTripPlan = z.infer<typeof insertTripPlanSchema>;

export type Alert = typeof alerts.$inferSelect;
export type InsertAlert = z.infer<typeof insertAlertSchema>;