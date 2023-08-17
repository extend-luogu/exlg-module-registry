#!/bin/sh

cwd=$PWD
cd ../extend-luogu/src

for i in {modules,themes}/*; do
	cd $i
	echo $i
	if [[ -f package.json ]]; then
		exlg-mod registry > $cwd/$i.yml
	fi
	cd $OLDPWD
done
