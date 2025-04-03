import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function unenrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(
        // Was using && before instead of || and it kept removing all 
        // enrollments lol. Face palm moment!
        (e) => e.user !== userId || e.course !== courseId
    );
}
