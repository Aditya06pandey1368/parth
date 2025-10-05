import { boolean, integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: varchar("role", { length: 50 }).default("student"),
  createdAt: timestamp("created_at").defaultNow(),
});


export const studentProfiles = pgTable("student_profiles", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id")
    .notNull()
    .references(() => students.id, { onDelete: "cascade" }), 
  bio: text("bio"),
  college: varchar("college", { length: 255 }),
  branch: varchar("branch", { length: 100 }),
  year: integer("year"),
  profilePic: varchar("profile_pic", { length: 500 }),
  github: varchar("github", { length: 255 }),
  linkedin: varchar("linkedin", { length: 255 }),
  portfolio: varchar("portfolio", { length: 255 }),
  website: varchar("website", { length: 255 }),
  skills: text("skills"),
  interests: text("interests"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

