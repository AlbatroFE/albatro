#!/usr/bin/env sh
set -e

git checkout master
git merge dev

VERSION=`npx select-version-cli`

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
#read -p "Releasing $VERSION - are you sure? (y/n)" REPLY
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  VERSION=$VERSION npm run dist

  # publish theme
  echo "Releasing theme-albatro $VERSION ..."
  cd packages/theme-albatro
  npm version $VERSION --message "[release] $VERSION" --allow-same-version
  if [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi
  cd ../..

  # commit
  git add -A
  git commit -m "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION" --allow-same-version

  # publish
  git push origin master
  git tag -a v$VERSION -m "[release] $VERSION"
  git push origin refs/tags/v$VERSION
  git checkout dev
  git rebase master
  git push origin dev

  if [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi
fi
