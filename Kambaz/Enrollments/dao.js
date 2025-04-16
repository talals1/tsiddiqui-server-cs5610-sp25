import model from "./model.js";

   
export function enrollUserInCourse(user, course) {
    const newEnrollment = { user, course, _id: `${user}-${course}` };
    return model.create(newEnrollment);
    // const { enrollments } = Database;
    // enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
    // const { enrollments } = Database;
    // Database.enrollments = enrollments.filter(
    //     // Was using && before instead of || and it kept removing all 
    //     // enrollments lol. Face palm moment!
    //     (e) => e.user !== userId || e.course !== courseId
    // );
}

export async function findCoursesForUser(userId) {
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
}
