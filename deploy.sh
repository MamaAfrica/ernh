#!/bin/bash

mv ./home/jenkins/workspace/ernhive/earnhive-$BUILD_NUMBER.tar.gz /var/www/earnhive/earnhive-$BUILD_NUMBER.tar.gz;
cd /var/www/earnhive/;
tar -xf earnhive-$BUILD_NUMBER.tar.gz;
npm ci;
npm run build;
sudo systemctl restart nginx; 