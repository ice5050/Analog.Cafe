# Analog.Cafe 
> Built, used and maintained by [Analog.Cafe](http://analog.cafe) Film Photography Publication team.

<img src="https://github.com/dmitrizzle/Analog.Cafe/blob/develop/public/images/figures/submit.gif?raw=true" width="373" alt="Screenshot" />

## TOC:
 - [Why](#why)?
 - [Demo](#demo).
 - [How can I use this](#how-can-i-use-this)?
 - [How do I contribute](#how-do-i-contribute)?
 - [What is it built with](#what-is-it-built-with)?
 - [Resources](#resources).

### Why?
**This is indeed another CMS, with a unique combination of features and build quality not found anywhere else.**
* Open submissions. Users do not have to login or have any access priveledges to contribute content. They sign-up with Email or Twitter once they are ready to send in their work.
* Quality rich media editor. By default browsers provide [terrible experience](https://medium.engineering/why-contenteditable-is-terrible-122d8a40e480), Analog.Cafe attempts to fix that (on desktop and mobile).
* React.js web application that's incredibly fast, has pro-grade image processing and storage, has pro-grade account management and, of course, has content scheduling.

If you're interested in the story behind this project, check out [Wiki page](https://github.com/dmitrizzle/Analog.Cafe/wiki).

### Demo.
Production release is coming to [Analog.Cafe](http://analog.cafe) soon. For now please request private demo link from [@dmitrizzle](https://twitter.com/dmitrizzle) or run the app on your local machine (see "[How do I contribute](#how-do-i-contribute)?")

### How can I use this?
Currently there is no easy way to install, configure and use the system on your website out of the box. The first phase of this project is planned as a pre-release on August 2017 at [Analog.Cafe](http://analog.cafe) only, followed by 1.0 around September 2017. There are two organizations waiting to try this system with their content, which will probably happen by early 2018. Once that's confirmed working and tested, there will be a package for general usage.

You can, however see and try all the code (see "[How do I contribute](#how-do-i-contribute)?")

### How do I contribute?
If you are interested in contributing to this project - awesome! Have a look at [issues](https://github.com/dmitrizzle/Analog.Cafe/issues) and submit a PR if you have a fix or create a new one if you notice a bug.

To get the code working on your machine:
1. [Get GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
1. [Get Node.js](https://nodejs.org/en/download/package-manager/).
1. [Clone](https://help.github.com/articles/cloning-a-repository/) this repo.
1. Run `git submodule init` and `git submodule update` - learn more about [GIT Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).
1. Run `yarn install`.
1. Run `yarn start`.

###  What is it built with?
* [Node.js](https://github.com/nodejs/node)
    * [Express.js](https://expressjs.com)
* [React.js](https://github.com/facebook/react)
    * [Create React App](https://github.com/facebookincubator/create-react-app)
    * [Styled Components](https://github.com/styled-components/styled-components)
    * [Slate.js](https://github.com/ianstormtaylor/slate)
* [ES6](https://github.com/lukehoban/es6features)
    * [Babel](https://github.com/babel/babel)
* [More...](https://github.com/dmitrizzle/Analog.Cafe/blob/develop/package.json)

### Resources.
* [Wiki](https://github.com/dmitrizzle/Analog.Cafe/wiki) - story of the project, release guide and design guide.
* [Analog.Cafe website](http://analog.cafe) - the reason this project started in the first place.

If you got a general suggestion (code or no code), please feel free to contact [@dmitrizzle](https://twitter.com/dmitrizzle), [submit an issue](https://github.com/dmitrizzle/Analog.Cafe/issues) or [submit a PR](https://help.github.com/articles/about-pull-requests/) (use "develop" branch as a base).

