#!/bin/bash

####################################
#          UniSuite AntiV          #
####################################

LOGFILE="/var/log/unisuite/antiv/antiv-$(date +'%Y-%m-%d').log"
DIRTOSCAN="/usr/bin /usr/sbin /etc /var /home /var/tmp /opt"
QUARANTINE="/var/antiv-quarantine/"

for S in ${DIRTOSCAN}; do
   DIRSIZE=$(du -sh "$S" 2>/dev/null | cut -f1)

   echo "---"
   echo "Starting a daily scan of "$S" directory (Size: "$DIRSIZE")"

   clamscan -ri "$S" --move="$QUARANTINE" >>"$LOGFILE"

   MALWARE=$(tail "$LOGFILE" | grep Infected | cut -d" " -f3)

   if [ "$MALWARE" -ne "0" ]; then
      echo "-> MALWARE FOUND and has been moved to "$QUARANTINE
   else
      echo "-> Nothing found in "$S
   fi

   echo ""
done

exit 0