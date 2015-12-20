#!/bin/bash
# Sync current branch /build folder to the gh-pages folder

set -e

export GIT_COMMITTER_EMAIL="inaki@inakianduaga.com"
export GIT_COMMITTER_NAME="Inaki Anduaga"

ls -la ./
git add -f ./build                     # gh-releases /build folder is not on master branch, so we add it (forced because it's on gitignore usually)
git stash                              # stash files before switching branches
git checkout gh-pages
rm -rf ./build                         # Avoid merge conflicts
#git stash apply --index                # override gh-pages build folder
git checkout stash -- .
git commit -m 'Sync master build'
git push                               # push to github

echo "Github-pages build script synced to latest changes";