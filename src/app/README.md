# Folder Structure and Naming Conventions
## What is a React component:
A React component is a file or a folder containing a file that has JavaScript function that receives React.js `props` and can be rendered by React.js in JSX: `<Component />`.

## Naming conventions for React Components (files or folders)
- All React components are named starting with a Capital letter, following CamelCase convention: `SomeComponent`. They are often referred to in documentation with enclosing JSX brackets: `<SomeComponent />`.
- Both folders and individual JavaScript files can be thought of as React components.
- Component folders are named same as component files: CamelCaseStartingWithCapitalLetter. However, those folders have to have an `index.js` file that represents the main provider of the code.
- Component files or folders have to reside within either:
  - Component "type" folders
  - Or component "collection" folders

## Folder organization & naming conventions
- Component folders that have sub-components co-hosted in the same folder should have those sub-components organized by component type: `/components` or `/containers` (component "type" folders). Correct: `./ComponentA/containers/SubComponentB.js`. Incorrect: ~`./ComponentA/SubComponentB.js`~
- **Component type folders** are most commonly either `/components` or `/containers`. The first type hosts presentational components which are pure functions and contain no internal state. The second type is stateful functions which are either made with `React.Component` or are wrapped in Redux or React Router HOCs (higher order components, such as `withRouter(Component)`). Component type folders can only contain React component folders, React component files or _component collection folders_. Correct: `./containers/ComponentE`. Incorrect: ~`./containers/images`~.
- **Component "collection" folders** are groups of components with similar functions. These folders have to have an \_underscore as the first character in their name. Those folders do not have to have `/components` and `/containers` subfolders on the root level, for example, this is acceptable: `./_group/ComponentC.js`, `./_group/ComponentD/containers/SubComponentE.js`. These folders have underscores at the beginning so that they are at the very top of the file tree when organized by name.

## Other folder types
- `/images` - this folder can contain JPGs, GIFs, SVGs, TXT or even React components that represent visual information. These folders can reside within component folders.
- `/helpers` - this folder can contain JavaScript files with utility functions that are meant to perform tasks for React components and aren't React components themselves (see [above](#what-is-a-react-component)).
- `/styles` (folder and `styles.js`) - are special **style components** components/component types created with [Styled Components](https://github.com/styled-components/styled-components). They follow the same rules and naming conventions as other components, however if there is only one style component in the root of a component folder it is named as style.js (not index.js). Also style components have their own component type folder: `/styles`.
