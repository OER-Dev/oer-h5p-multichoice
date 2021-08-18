# OER Multiple Choice

The `OER Multichoice 1.0` is fork of Joubel's [`Multichoice 1.14`](https://github.com/h5p/h5p-multi-choice). It adds support for audio clues to the multiple choice as well as a new square style for showing the answer options. 

## Changes to the content type
* Support for uploading an audio clue to go with the multiple choice question.
* Option to show the answer options in a squared grid layout.
* Added SVG graphics for showing the play icon and animating the sound waves when playing the audio.
* Support to work together with the `OER Quiz` library, which is a fork of Joubel's [`Question Set`](https://github.com/h5p/h5p-question-set) library.

To load the icons we use [React](https://reactjs.org/) and its `render` function to render it into the container we want. React isn't used for anything other than this. This might seem a bit over the top at the moment but the long term goal is to replace more content with React components. More over it helps handle animations and SVG content in an easier way.

## Development
To run the library in development mode run the following commands from the library root:
* `npm install`
* `npm run dev`

Note that for the dev script here to work the [`oer-dev`](../../oer-dev/README.md) server needs to be running as well.

## Production
There are three different scripts used when building the library's production build. Remember to install the dependencies before running them with `npm install`.
* `npm run build-src`
    * Builds the frontend code and copies it into `H5P.OERMultiChoice/`
* `npm run build-h5p`
    * Packages all the content of `H5P.OERMultiChoice/` into a `.h5p` file named `oer-multi-choice` and puts it into the `dist/` folder. This file can be used to install the production build on any site that supports H5P content.
* `npm run build`
    * Runs both of the above scripts in sequence.