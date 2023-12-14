const Course = {
  courseName: String,
  monthStartDate: String,
  yearStartTime: String,
  monthEndDate: String,
  yearEndTime: String,
  role: String,
  imgurl: String,
  description: [String],
  skills: [String],
}
const Project = {
  name: String,
  description: String,
  frameworks: [
    {
      name: String,
      color: String,
    },
  ],
  imgurl: String,
  giturl: String,
  demourl: String,
  readme: { type: String, default: null },
}
const Recommendation = {
  avatar: String,
  description: [String],
  linkedinUrl: String,
  role: String,
  name: String,
  source: String,
}
const education = {
  name: String,
  role: String,
  MonthOfLeaving: String,
  YearOfLeaving: String,
  MonthOfStarting: String,
  YearOfStarting: String,
}
const Work = {
  name: String,
  role: String,
  specialization: [String],
  MonthOfLeaving: String,
  YearOfLeaving: String,
  MonthOfStarting: String,
  YearOfStarting: String,
}
module.exports = { Course, education, Project, Recommendation, Work }
