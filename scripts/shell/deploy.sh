# Pull code
cd /home/ubuntu/projects/next-client

git checkout .

git pull

yarn

npm run build

pm2 restart next-client

exit