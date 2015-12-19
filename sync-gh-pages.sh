#!/bin/bash
# Sync current branch /build folder to the gh-pages folder

set -e

if [ "$TRAVIS_BRANCH" != "master" ]; then
  echo "Not on master branch, skipping gh-pages sync";
  exit 0
fi

export GIT_COMMITTER_EMAIL="inaki@inakianduaga.com"
export GIT_COMMITTER_NAME="Inaki Anduaga"

git add /build                         # gh-releases /build folder is not on master branch, so we add it
git stash                              # stash files before switching branches
git checkout gh-pages
git stash apply --index                # override gh-pages build folder
git commit -m 'Sync master build'
git push                               # push to github

echo "Github-pages build script synced to latest changes";