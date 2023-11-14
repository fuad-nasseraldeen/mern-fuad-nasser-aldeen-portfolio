const express = require('express')
const router = express.Router()
const Profile = require('../../models/profile')

const resumeData = require('../../resumeData.js')

// @route   GET api/profile/me
// @desc    Get current user profile
// @access  Public - we don't need a token for this
router.get('/me', async (req, res) => {
  try {
    const profile = await Profile.findOne({ gmail: resumeData.gmail })

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' })
    }

    res.json(profile) // Send the profile as JSON response
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
})


// @route   POST api/profile/me
// @desc    Create or Update a user profile
// @access  public - we don't need a token for this
router.post('/', async (req, res) => {
  try {
    const myProfile = resumeData
    let profile = await Profile.findOne({ gmail: myProfile.gmail })

    if (profile) {
      // Update existing profile
      profile = await Profile.findOneAndUpdate({ gmail: myProfile.gmail }, { $set: myProfile }, { new: true })
      return res.json(profile) // Return the updated profile as JSON response
    }

    // If no profile found, create a new one
    profile = new Profile(myProfile)
    await profile.save()

    // Return the newly created profile as JSON response
    res.json(profile)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
})

module.exports = router
