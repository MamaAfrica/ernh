#!/bin/bash
sudo /home/ubuntu/.nvm/versions/node/v20.5.1/bin/npm install
sudo /home/ubuntu/.nvm/versions/node/v20.5.1/bin/npm run build
sudo systemctl restart nginx 