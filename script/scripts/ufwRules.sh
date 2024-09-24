#!/bin/bash

#######################################
#          UniSuite ufwRules          #
#######################################

ufw --force reset

ufw default deny incoming
ufw default allow outgoing

ufw allow 80/tcp                # HTTP
ufw allow 443/tcp               # HTTPS
ufw allow 22/tcp                # SSH
ufw allow in on docker0         # DOCKER0 INTERFACE

ufw enable

exit 0