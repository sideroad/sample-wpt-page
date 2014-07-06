#!/bin/sh

#remove directory for initialize
ls -d pages && rm -Rf pages

#clone to pages directory
git config -l | grep "remote.origin.url" | awk -F '=' '{print "git clone",$2,"pages"}' | sh

#set up gh-pages branch
pushd pages
git checkout --orphan gh-pages
git rm -rf .
popd
