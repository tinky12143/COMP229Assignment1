// Import the express module
const express = require('express');
// Create a new router object
const router = express.Router();

// Handle GET request for the home page
router.get('/', function(req, res, next) {
  // Render the 'index' view with title 'Home'
  res.render('index', { title: 'Home' });
});

// Handle GET request for the about page
router.get('/about', function(req, res, next) {
  // Render the 'about' view with title 'About Me'
  res.render('about', { title: 'About Me' });
});

// Handle GET request for the projects page
router.get('/projects', function(req, res, next) {
  // Render the 'projects' view with title 'Projects'
  res.render('projects', { title: 'Projects' });
});

// Handle GET request for the services page
router.get('/services', function(req, res, next) {
  // Render the 'services' view with title 'Services'
  res.render('services', { title: 'Services' });
});

// Handle GET request for the contact page
router.get('/contact', function(req, res, next) {
  // Render the 'contact' view with title 'Contact Me'
  res.render('contact', { title: 'Contact Me' });
});

// Export the router object so it can be used in other modules
module.exports = router;
