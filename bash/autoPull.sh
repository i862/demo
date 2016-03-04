#!/bin/bash
SERVER_PATH='/srv/apps/demo'
OWNER='root'
echo "pulling source code..."
git reset --hard origin/master
git clean -f
git pull
git ch4eckout master
echo 'restart server'
pm2 restart 0
echo 'finish'
