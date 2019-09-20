#! /bin/sh
mkdir temp_web
npm run deploy:build
cd temp_web
git clone --depth 1 -b gh-pages --single-branch https://github.com/AlbatroFE/albatro.git && cd albatro

# build sub folder
# cd ../$website
SUB_FOLDER='0.1'
mkdir $SUB_FOLDER
rm -rf *.js *.css *.map static css fonts img js *.html *.ico *.json
rm -rf $SUB_FOLDER/**
cp -rf ../../dist/** .
cp -rf ../../dist/** $SUB_FOLDER/
cd ../..

GH_PAGES_FOLDER='../gh-pages/'
rm -rf $GH_PAGES_FOLDER/*.js 
rm -rf $GH_PAGES_FOLDER/*.css 
rm -rf $GH_PAGES_FOLDER/*.map 
rm -rf $GH_PAGES_FOLDER/*.html
rm -rf $GH_PAGES_FOLDER/*.json
rm -rf $GH_PAGES_FOLDER/*.ico
rm -rf $GH_PAGES_FOLDER/CNAME
rm -rf $GH_PAGES_FOLDER/static
rm -rf $GH_PAGES_FOLDER/$SUB_FOLDER
cp -rf ./temp_web/albatro/** $GH_PAGES_FOLDER/

# deploy domestic site
# faas deploy alpha
rm -rf temp_web

echo "deploy gh-pages $SUB_FOLDER"
cd $GH_PAGES_FOLDER
# git add .
# git commit -m "deploy gh-pages $SUB_FOLDER"
# git push albatro gh-pages
echo "deploy successful version: $SUB_FOLDER"