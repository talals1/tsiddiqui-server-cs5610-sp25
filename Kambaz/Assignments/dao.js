import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function findAssignmentsforCourse(courseId) {
    return model.find({ course: courseId });
    // const { assignments } = Database;
    // return assignments.filter((asn) => asn.course === courseId);
}

export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    return model.create(newAssignment);
    // Database.assignments = [...Database.assignments, newAssignment];
    // return newAssignment;
}

export function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId })
    // const { assignments } = Database;
    // Database.assignments = assignments.filter((asn) => asn._id !== assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    return model.updateOne({ _id: assignmentId }, assignmentUpdates);
    // const { assignments } = Database;
    // const assignment = assignments.find((asn) => asn._id === assignmentId);
    // Object.assign(assignment, assignmentUpdates);
    // return assignment;
}
