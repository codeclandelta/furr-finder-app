# README

Title — Furr Finder App
Overview — Why did you start this project?
Features — What are some key things your project can do?
Running the project — How could someone else get your code working for them?
Dependencies — What are the main outside resources your project needs to run?

Title
Furr Finder App, We help find new loving homes for loving animals!

Overview
Furr Finder provides care and shelter for animals, support and resources for people, and education to promote the humane treatment of animals.

Features
This can be a list of features or just a description of what this project does / what can be done with it. I prefer presenting information in a bullet or numbered list as it improves the ability to scan through and gather information quickly. Short, specific pieces of information are much easier to digest.

Running The Project
If I were to find your project and want to run it locally myself, how would I do that? Be sure to include steps like cd into the project directory, run npm install(if dependencies are needed), and any other considerations for getting the project to run correctly on a local machine (CI requirements, Bash/Zsh, etc).

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...
  Furr Finder App

Setup

Branch: main (initial commit to the repo)
Created a new Rails project with RSpec and Devise

$ rails new furr-finder-app -d postgresql -T
$ cd furr-finder-app
$ rails db:create
$ (git remote add origin <copy and paste repo>)
$ git checkout -b main
$ git add .
$ git commit -m 'initial commit'
$ git push origin main
$ bundle add rspec-rails
$ rails g rspec:install

Authentication - providing the correct credentials (username and password)
Authorization - what you have access to with your credentials
Devise Config
As a user I can create an account
As a user, I can create an account on the web page, login to my existing account, and logout
As a user, to sign up for an account, I must enter in my first and last name, email, and password.

$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate

Added React Components
Branch: react-components

$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
$ rails generate controller Home

Syllabus/devise-react-in-rails.md at main · learn-academy-2021-delta/Syllabus

$ yarn add react-router-dom
$ bundle add bootstrap
$ yarn add reactstrap

application.scss => @import 'bootstrap';

Added the mailer
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
config/initializers/devise.rb

# Find this line:

config.sign_out_via = :delete

# and replace it with this:

config.sign_out_via = :get
Animals and Users

add react_component :

<%= react_component "App", {
logged_in: user_signed_in?,
current_user: current_user,
new_user_route: new_user_registration_path,
sign_in_route: new_user_session_path,
sign_out_route: destroy_user_session_path
} %>

User has_many animals and Animal belongs_to User
Protected Index

Seeds for animals
Name :string
Type :string
Breed :string
Age :integer
Gender :string
Description :string
spayed_neutered :boolean
house_trained :boolean
Declawed :boolean
special_needs :string
Size :string
Photo :string
contact_info :string (agency name, phone, email)
contact_location :string (street, city, state, zip, country)

Index page

Test coverage

Index controller method

Request spec

Fetch for index

State in app.js

Testing in a React in Rails App
$ yarn add jest
$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16 Add to the bottom of package.json
"jest": {
"roots": [
"app/javascript/components"
]

AboutUs page
\*As a user, I can click on the about us link that directs me to the about us page.
About Us page under Pages (/pages/AboutUs.js)

Bio for each person
Mission Statement and Vision
Contact us information
Photos for each person
Testing for AboutUs page (AboutUs.test.js)

Footer Under Components
\*As a User i can see a Footer with an About Us link and a Home link
copyright
stylings

Header
Under Components
As a User i can see a Header with a Logo, Sign in, Sign Up links
As a User, I can Navigate from the Home Link to the Home/Landing page.
As a User, I can Navigate from the Sign In link to the Sign In page.
As a User , I can Navigate from the Sign Up link to the Sign Up page.
As a User, I can Navigate from the About Us link to the About Us page.

(STRETCH)
Donate Page
As a User i can Navigate from the Donate page to an outside organization link
Volunteer Page
HTML code for Volunteer Registration form
Merchandise Store
As a User i can Navigate from the Merchandise store link and shop for Merchandise
