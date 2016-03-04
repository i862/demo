#!/bin/bash
SERVER_PATH='/srv/apps/demo'
OWNER='root'
echo "pulling source code..."
cd /srv/apps/demo
git pull
echo 'restart server'
pm2 restart 0
echo 'finish'
