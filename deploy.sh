#!/bin/bash
sudo npm ci
npm run build
sudo systemctl restart nginx 