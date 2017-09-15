# Analog.Cafe
[![GitHub version](https://badge.fury.io/gh/dmitrizzle%2FAnalog.Cafe.svg)](https://badge.fury.io/gh/dmitrizzle%2FAnalog.Cafe) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Lightning-fast, offline-first PWA experience for readers. Beautiful Composer app and one-click accounts for authors. Content scheduling, approval flow and user management for editors.

<img src="https://github.com/dmitrizzle/Analog.Cafe/blob/develop/public/images/pictures/submit.gif?raw=true" width="373" alt="Screenshot" />

## TOC:
 - [Why](#why)?
 - [Demo](#demo).
 - [How can I use this](#how-can-i-use-this)?
 - [How do I contribute](#how-do-i-contribute)?
 - [What is it built with](#what-is-it-built-with)?
 - [Resources](#resources).
 - [Contributors (Wiki)](https://github.com/dmitrizzle/Analog.Cafe/wiki/Contributors).

### Why?
**This is indeed another CMS, with a unique combination of features and build quality not found anywhere else.**
* Open submissions. Users do not have to log in or have any access priveledges to contribute content. They sign up with email or Twitter once they are ready to send in their work.
* Quality rich text editor. By default browsers provide [terrible experience](https://medium.engineering/why-contenteditable-is-terrible-122d8a40e480), Analog.Cafe attempts to fix that (on desktop and mobile).
* React.js web application that's incredibly fast, has pro-grade image processing and storage, has pro-grade account management and, of course, has content scheduling.

If you're interested in the story behind this project, check out this [Wiki](https://github.com/dmitrizzle/Analog.Cafe/wiki).

### Demo.
**[Analog.Cafe](http://analog.cafe): “A film photography publication.”** Or run the app on your local machine (see "[How do I contribute](#how-do-i-contribute)?")

### How can I use this?
Currently there is no easy way to install, configure and use the system on your website out of the box. ~The first phase of this project is planned as a pre-release on August 2017 at [Analog.Cafe](http://analog.cafe) only~ ✅, followed by 1.0 around September 2017. There are ~two~ three organizations waiting to try this system with their content, which will probably happen by early 2018. Once that's confirmed working and tested, there will be a package for general usage.

You can, however see and try all the code (see "[How do I contribute](#how-do-i-contribute)?")

### How do I contribute?
If you are interested in contributing to this project - awesome! Have a look at [issues](https://github.com/dmitrizzle/Analog.Cafe/issues) and submit a PR if you have a fix or create a new one if you notice a bug.

To get the code working on your machine (assuming you have [Node.js](https://nodejs.org/en/download/), [NPM](https://www.npmjs.com/get-npm), and [Brew](https://brew.sh/)(or Windows equivalent) on your machine):
1. [Clone](https://help.github.com/articles/cloning-a-repository/) this repo.
1. Run `yarn install`.
   * Run `yarn install`.
   * Run `yarn start`.
1. Install the [API server](https://github.com/ice5050/Analog.Cafe-Backend).
   * Run `yarn install`.
   * Run `yarn run dev`.
1. Install Redis server `brew install redis`.
   * Run `redis-server`.

###  What is it built with?
* [Node.js](https://github.com/nodejs/node)
    * [Express.js](https://expressjs.com)
    * [Redis](https://redis.io/)
* [React.js](https://github.com/facebook/react)
    * [Create React App](https://github.com/facebookincubator/create-react-app)
    * [Redux](https://github.com/reactjs/redux)
    * [Styled Components](https://github.com/styled-components/styled-components)
    * [Slate.js](https://github.com/ianstormtaylor/slate)
* [ES6](https://github.com/lukehoban/es6features)
    * [Babel](https://github.com/babel/babel)
* [More...](https://github.com/dmitrizzle/Analog.Cafe/blob/develop/package.json)

### Resources.
* [Wiki](https://github.com/dmitrizzle/Analog.Cafe/wiki) - story of the project, release guide and design guide.
* [Analog.Cafe website](http://analog.cafe) - the reason this project started in the first place.

If you got a general suggestion (code or no code), please feel free to contact [@dmitrizzle](https://twitter.com/dmitrizzle), [submit an issue](https://github.com/dmitrizzle/Analog.Cafe/issues) or [submit a PR](https://help.github.com/articles/about-pull-requests/) (use "develop" branch as a base).
