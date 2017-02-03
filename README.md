# Analog.Cafe
## Analog.Cafe is a web publishing platform for film photographers.
## Here on GitHub this is an "opinionated" CMS engine project.

Here are some of the features that stand out:
* Free-for-all signup process (anyone can become a contributor)
* Shared asset library for select items (in this case, it's featured images)
* Editor account(s) which decide what and when to go live and can edit the entries
* Limited control over design and content for all publishing accounts
* Offline-first web application

### Built with:
* Ruby 2.3.0 & Rails 5.0.1
* Angular 2

The release is schedule for late summer 2017. For now, most of the work is done templating and styling (SASS). You can read more about features and browse documents in Analog.Cafe.wiki repo.

## Getting started
1. Make sure you got GIT working on your machine. Google is your friend.
2. Make sure you got Ruby 2.3.0 or later running on your system. Type `ruby -v` to find out what you've got. OSX has it installed by default, but you may want to make sure you've got the latest version.
3. You'll need Rails 5.0.1; if you already have the framework, you can type `rails -v` to see what version you've got. If not, `gem install rails`. You might wanna Google more detailed instructions for your system.
4. Fork this repo and run `bundle install` from within the directory on your machine. This should install all the gems required for the project to work automatically.
5. Run `rails s`. If everything is working as it should, http://localhost:3001 will get the homepage running in your browser.

### Notes
* All development work is done in "develop" branch.

### Other resources
Additional documentation, project strategy & philosophy is laid out on the [Wiki](https://github.com/dmitrizzle/Analog.Cafe/wiki).
