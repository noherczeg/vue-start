# vue-start
A build-less project based on VueJS and RequireJS

## Getting started
Just check out the repo, and open `index.html` in you browser!

## Motivation
I wanted to try out an "architecture" where:
- There is no build process
- I have a viable view engine ([VueJS](https://vuejs.org/))
- Everything important is lazy loaded ([RequireJS](http://requirejs.org/)), eg.: states, templates, etc...

Performance is not a key factor (for now), although it's likely, that VueJS rendering _on-demand_ will be slower than it could be 
when it's pre-compiled.

## License
[MIT](https://opensource.org/licenses/MIT)
