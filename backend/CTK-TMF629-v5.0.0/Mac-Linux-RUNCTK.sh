::q#!/bin/bash

clear
#Intro
echo "This will run a TMForum API CTK"
echo "In order to be able to run it, you need to have"
echo "NodeJS, NPM and Newman installed."
echo

cp ./CHANGE_ME.json ./DO_NOT_CHANGE/cypress/fixtures/config.json
cd ./DO_NOT_CHANGE
npm install
npm start
npm run report
cp ./cypress/reports/index.json ../SENDME.json
cp ./cypress/reports/index.html ../SENDME.html
