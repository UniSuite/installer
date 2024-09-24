#!/bin/bash

####################################
#          UniSuite Setup          #
####################################

function installUniSuite {

    echo "This program will install UniSuite on your server."
    read -p "Do you want to continue? (y/n): " continue
    if [[ "$continue" != "y" ]]; then
        clear
        exit 0
    fi

    echo -e "\n--- License Agreement ---"
    cat LICENSE
    read -p "Do you agree to the license terms? (y/n): " agree
    if [[ "$agree" != "y" ]]; then
        echo "Access to the UniSuite project requires an accepted license agreement."
        exit 1
    fi

echo -e "\nSetting Timezone..."
timedatectl set-timezone "Europe/Berlin"

echo -e "\nUpdating package sources..."
apt-get update -y > /dev/null 2>&1
echo -e "\nUpgrading system packages..."
apt-get full-upgrade -y > /dev/null 2>&1
echo -e "\nInstalling dependencies if needed..."
apt-get install sudo curl nano git ca-certificates apt-transport-https lsb-release gnupg -y > /dev/null 2>&1
echo -e "\nRemoving unneeded packages..."
apt-get autoremove -y > /dev/null 2>&1

if [ -f /etc/motd.original ]; then
    rm -f /etc/motd > /dev/null 2>&1
    cp -v configs/motd.conf /etc/motd > /dev/null 2>&1
else
    mv -f /etc/motd /etc/motd.original > /dev/null 2>&1
    cp -v configs/motd.conf /etc/motd > /dev/null 2>&1
fi

    local packages=("nodejs" "npm" "nginx" "apache2" "ufw" "certbot" "fail2ban" "unattended-upgrades" "clamav" "clamav-daemon")
    for pkg in "${packages[@]}"; do
        echo -e "\nInstalling $pkg..."
        sudo apt-get install "$pkg" -y > /dev/null 2>&1
    done
    sudo apt-get autoremove -y
    echo -e "\nInstalling UniSuite..."
    sudo dpkg -i unisuite-package.deb

    exit 0

}


####################################### START UP #######################################

echo "Please wait..."

if ! [ -f "/etc/debian_version" ]; then
    clear
    echo "[Error] UniSuite only runs on Debian-based systems."
    exit 1
fi

os_name=$(grep 'PRETTY_NAME' /etc/os-release)
ping_result=$(ping -c 3 8.8.8.8 | grep '100% packet loss')

if [[ $EUID -ne 0 ]]; then
    clear
    echo "[Error] UniSuite has to be started with root privileges."
    exit 1
fi

clear

    if [ -n "$ping_result" ]; then
        echo "UniSuite requires an internet connection. Therefore it cannot be installed."
        exit 1
    fi
    installUniSuite
