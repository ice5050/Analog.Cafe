# Analog.Cafe
[![GitHub version](https://badge.fury.io/gh/dmitrizzle%2FAnalog.Cafe.svg)](https://badge.fury.io/gh/dmitrizzle%2FAnalog.Cafe) [![Known Vulnerabilities](https://snyk.io/test/github/dmitrizzle/analog.cafe/badge.svg)](https://snyk.io/test/github/dmitrizzle/analog.cafe)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)


> Offline-first React.JS web app with one-click accounts & **premium rich text editor experience**. This is a `view` layer for [Roast.Cloud](http://www.roast.cloud/) CMS.

<img src="https://res.cloudinary.com/analog-cafe/image/upload/c_scale,fl_progressive,w_1268/image-froth_1076479_8f0a0ec6c4794688a66d79935fab2ca3.gif" width="373" alt="Screenshot" />

## TOC:
 - [What](#what)?
 - [Demo](#demo).
 - [How can I use this](#how-can-i-use-this)?
 - [How do I contribute](#how-do-i-contribute)?
 - [What is it built with](#what-is-it-built-with)?
 - [Resources](#resources).
 - [Contributors (Wiki)](https://github.com/dmitrizzle/Analog.Cafe/wiki/Contributors).

### What?
**This is an example app used in production built to work with [Roast.Cloud](http://www.roast.cloud/) headless CMS stack.**
* Roast.Cloud provides API access points that could be consumed by any application within any environment that works with REST architecture. This is a React.JS layer that utilizes that API on the web.
* This project started before the API engine; all issues and project management tasks for Roast.Cloud are hosted here for now.
* Analog.Cafe is a view-layer app built specifically for [Analog.Cafe website](https://www.analog.cafe) and is extremely opinionated for this one task. This is a first use case for Roast.Cloud and will be branched later into example projects that you can use for your own purposes.

**Here's what you can do with Analog.Cafe + Roast.Cloud:**
* Create public accounts with one click via Passport.js API integration.
* Enjoy a premium rich text editor experience via Slate.js.
* Produce blazing-fast offline-first web app experience for readers and visitors.
  * Responsive image management with Cloudinary.
  * Automatic lazy-loading for all images.
  * User action caching in Redux.

If you're interested in the story behind this project, check out this [Wiki](https://github.com/dmitrizzle/Analog.Cafe/wiki).

### Demo.
**[Analog.Cafe](http://analog.cafe): “A film photography publication.”**

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
1. You will need to configure your `.env` variables as well (you'll need to spin up your own [Roast.Cloud server](https://github.com/ice5050/Analog.Cafe-Backend)).

###  What is it built with?
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
* [Roast.Cloud on GitHub](https://github.com/ice5050/Analog.Cafe-Backend) and [Roast.Cloud website](http://roast.cloud)

If you got a general suggestion (code or no code), please feel free to contact [@dmitrizzle](https://twitter.com/dmitrizzle), [submit an issue](https://github.com/dmitrizzle/Analog.Cafe/issues) or [submit a PR](https://help.github.com/articles/about-pull-requests/) (use "develop" branch as a base).
