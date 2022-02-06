#!/usr/bin/env sh
set -e
yarn run build
cd dist
git init
git commit -m 'Deploy'
git push -f git@github.com:suvamsubedi/Vue-Portfolio.git master:gh-pages
cd ~
