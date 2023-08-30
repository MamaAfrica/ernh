#!/bin/bash
sudo npm ci
sudo npm run build
sudo systemctl restart nginx 