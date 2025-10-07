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
   profilePic: varchar("profile_pic", { length: 500 }),
//personal
  gender:varchar("gender",{length:10}),
  skills: text("skills"),
  interests: text("interests"),
  phone:varchar("mob",{length:15}),



  //college
  college: varchar("college", { length: 255 }),
  branch: varchar("branch", { length: 100 }),
  roll_number: integer("roll_number").unique(),
  attendence_percentage: integer("attendence_percentage"),
  cgpa: integer("cgpa"),
  year: integer("year"),

 //address
 address:varchar("address",{length:255}),
 city:varchar("city", {length:255}),
 postal_code:integer("postal_code"),
 
  //social Links
  github: varchar("github", { length: 255 }),
  linkedin: varchar("linkedin", { length: 255 }),
  leetcode: varchar("leetcode", { length: 255 }),
  codeforce: varchar("codeforces", { length: 255 }),
  codechef: varchar("codechef", { length: 255 }),
  gfg: varchar("gfg", { length: 255 }),
  portfolio: varchar("portfolio", { length: 255 }),
  website: varchar("website", { length: 255 }),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const work_experience = pgTable("work_experince", {
  id: serial("id").primaryKey(),
  company_name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: varchar("role", { length: 50 }).default("student"),
  createdAt: timestamp("created_at").defaultNow(),
});