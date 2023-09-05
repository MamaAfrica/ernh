#!/bin/bash
# sudo /home/ubuntu/.nvm/versions/node/v20.5.1/bin/npm install
sudo /home/ubuntu/.nvm/versions/node/v20.5.1/bin/npm run build
pm2 restart earnhive
sudo systemctl restart nginx