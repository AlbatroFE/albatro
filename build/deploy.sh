#! /bin/sh
mkdir temp_web
#npm run deploy:build
cd temp_web
git clone --depth 1 -b gh-pages --single-branch https://github.com/AlbatroFE/albatro.git && cd albatro
# mock: mkdir albatro && cd albatro

# build sub folder
SUB_FOLDER='0.1'
mkdir $SUB_FOLDER
rm -rf *.js *.css *.map static css fonts img js *.html *.ico *.json
rm -rf $SUB_FOLDER/**
cp -rf ../../dist/** .
cp -rf ../../dist/** $SUB_FOLDER/
cd ../../..

GH_PAGES_FOLDER='gh-pages'
# mock: mkdir $GH_PAGES_FOLDER

rm -rf $GH_PAGES_FOLDER/*.js 
rm -rf $GH_PAGES_FOLDER/*.css 
rm -rf $GH_PAGES_FOLDER/*.map 
rm -rf $GH_PAGES_FOLDER/*.html
rm -rf $GH_PAGES_FOLDER/*.json
rm -rf $GH_PAGES_FOLDER/*.ico
rm -rf $GH_PAGES_FOLDER/CNAME
rm -rf $GH_PAGES_FOLDER/static
rm -rf $GH_PAGES_FOLDER/css
rm -rf $GH_PAGES_FOLDER/fonts
rm -rf $GH_PAGES_FOLDER/img
rm -rf $GH_PAGES_FOLDER/js
rm -rf $GH_PAGES_FOLDER/$SUB_FOLDER

cp -rf ./albatro/temp_web/albatro/** $GH_PAGES_FOLDER/

# deploy domestic site
rm -rf ./albatro/temp_web

echo "deploy gh-pages $SUB_FOLDER"
cd $GH_PAGES_FOLDER

cp index.html 404.html
cp $SUB_FOLDER/index.html $SUB_FOLDER/404.html

git add .
git commit -m "deploy gh-pages $SUB_FOLDER"
git push origin gh-pages
echo "deploy successful version: $SUB_FOLDER"