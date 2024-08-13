#!/bin/bash

########################################
#          UniSuite DiskAgent          #
########################################

add_smart_monitoring() {
    disk=$1
    if [[ -b "$disk" ]]; then
        echo "Adding $disk to smartctl and activating SMART..."
        smartctl -s on "$disk"
        smartctl -a "$disk" > /dev/null &
    fi
}

remove_smart_monitoring() {
    disk=$1
    if [[ -b "$disk" ]]; then
        echo "Removing $disk from smartctl and deactivating SMART..."
        smartctl -s off "$disk"
    fi
}

get_smart_monitored_disks() {
    smartctl --scan-open | awk '{print $1}'
}

monitor_attached_disks() {
    previous_disks=$(get_smart_monitored_disks)

    while true; do
        current_disks=$(get_smart_monitored_disks)

        for disk in $current_disks; do
            if ! grep -q "$disk" <<< "$previous_disks"; then
                add_smart_monitoring "$disk"
            fi
        done

        for disk in $previous_disks; do
            if ! grep -q "$disk" <<< "$current_disks"; then
                remove_smart_monitoring "$disk"
            fi
        done

        previous_disks=$current_disks
        sleep 1
    done
}

monitor_attached_disks