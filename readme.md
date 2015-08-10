# da-trader-net-rx

[![Build Status](https://travis-ci.org/data-avail/da-trader-net-rx.svg?branch=master)](https://travis-ci.org/data-avail/da-trader-net-rx)

Project description.

Contains typeScript defintion files. 

[Documentation](https://data-avail.github.io/da-trader-net-rx)


## Build

Problem - currently there is no adopted solution to build type-script definition file for node module.
See it here :
+ [link 1](http://stackoverflow.com/questions/31163503/build-a-node-package-using-typescript-1-5-and-generate-the-declaration-file)
+ [link 2](https://github.com/Microsoft/TypeScript/issues/2338)

Current solution
Customized build proccess

+ Build js lib separately as is.
	+ Remove all `///<reference ...` tags from output
+ Build type definition file from template
	+ Build definition files as is
	+ Concatenate them all in single file
	+ Remove all `///<reference ...` tags and `import` from output
	+ Insert output entry into template `index.tmpl.d.ts` file 
	+ Replace `declare export ...` to `export ...`

## Test

Set up uri for test db 

+ In `.npmrc` set `SOME_URI=xxx`, higest priority
+ In `package.json` field `config.SOME_URI`

Run test
 
`npm test`

If wanna use with `travis` don't forgate to add service to `services` in 
`.travis.yml` file.

## Development

Project contians `tasks` file for Visual Studio Code

+ Build - run `build:module`, same as `npm run-task build`
+ Test - run `mocha`, same as `npm test`, same as `gulp test`
+ Watch build `gulp`

For some reason VS Code take quite a time to start build,
usually watch rebuild proccess via `gulp` work much faster.

This way use `gulp` in console and then run test task manually,
when neccessary.   

## Documentation 

Generate `typedoc ./src/index.ts` 

To publish docs  on `github`
```
git checkout --orphan gh-pages
git add --all .
git commit -am "first commit"
git push origin gh-pages
``` 
