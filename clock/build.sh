#!/bin/bash
folder="$1"
./node_modules/.bin/babel ${folder}jsx -d ${folder}js -w
