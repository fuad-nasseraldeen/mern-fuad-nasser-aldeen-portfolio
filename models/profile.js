const mongoose = require('mongoose')
const { Course, education, Project, Recommendation, Work } = require('./types')

const aboutmeSchema = new mongoose.Schema({
  title: String,
  description: [String],
})
const skillsSetSchema = new mongoose.Schema({
  title: String,
  skills: {
    type: Map,
    of: [
      {
        value: String,
        svgId: String,
      },
    ],
  },
})
// Define the skillCategorySchema
const skillCategorySchema = new mongoose.Schema({
  value: String,
  svgId: String,
})

// Define the workSchema for individual work experiences
const workDataSchema = new mongoose.Schema({
  title: String,
  works: [Work],
})

const socialLinksSchema = new mongoose.Schema({
  name: String,
  url: String,
  className: String,
  img: String,
  wrapper: String,
})

const educationDataSchema = new mongoose.Schema({
  title: String,
  education: [education],
})

const courseDataSchema = new mongoose.Schema({
  title: String,
  courses: [Course],
})

const projectsDataSchema = new mongoose.Schema({
  title: String,
  projects: [Project],
})

// Define the recommendationSchema for individual recommendations
const recommendationSchema = new mongoose.Schema({
  title: String,
  recommendations: [Recommendation],
})

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    role: {
      type: [String],
    },
    avatar: {
      type: String,
    },
    address: {
      type: String,
    },
    gmail: {
      type: String,
    },
    roleDescription: {
      type: String,
    },
    aboutme: aboutmeSchema,
    socialLinks: [socialLinksSchema],
    educationData: educationDataSchema,
    coursesData: courseDataSchema,
    projectsData: projectsDataSchema,
    workData: workDataSchema, // Include the "work" field with the workSchema
    skillsSet: skillsSetSchema,
    hobbies: [String],
    recommendationsData: recommendationSchema,
  },
  { collection: 'profile' },
)

module.exports = Profile = mongoose.model('profile', ProfileSchema)
