#!/bin/sh

screen -dmS yellow-web bash -c ". ./colors.sh; trap bash SIGINT; (./start-dev.sh ; bash);"
