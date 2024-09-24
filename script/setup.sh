#!/bin/bash

####################################
#          UniSuite Setup          #
####################################

####################################### FUNCTIONS #######################################

function configureTimezone {
    currentTZ=$(timedatectl show --property=Timezone --value)
    while true; do
        newTZ=$(whiptail --inputbox "Which timezone should the system use?\nCurrent: $currentTZ" --nocancel --title "Timezone" --backtitle "UniSuite - Setup" 10 50 3>&1 1>&2 2>&3)
        if timedatectl list-timezones | grep -qx "$newTZ"; then
            timedatectl set-timezone "$newTZ"
            whiptail --msgbox "The timezone has been set successfully to $newTZ." --clear --ok-button "Continue" --title "Information" --backtitle "UniSuite - Setup" 10 50
            break
        else
            whiptail --msgbox "Invalid time zone selected! Please try again." --clear --ok-button "OK" --title "Error" --backtitle "UniSuite - Setup" 10 50
        fi
    done
}

function systemUpdate {
    msgs=("Updating package sources..."
        "Updating system packages..."
        "Installing dependencies if needed..."
        "Removing unneeded packages..."
    )
    commands=("sudo apt-get update -y"
        "apt-get full-upgrade -y"
        "apt-get install sudo curl nano git ca-certificates apt-transport-https lsb-release gnupg -y"
        "apt-get autoremove -y"
    )
    n=${#commands[@]}
    i=0
    while [ "$i" -lt "$n" ]; do
        pct=$((i * 100 / n))
        echo XXX
        echo $i
        echo "${msgs[i]}"
        echo XXX
        echo "$pct"
        eval "${commands[i]}"
        i=$((i + 1))
    done | whiptail --gauge "Please wait..." --title "System Update" --backtitle "UniSuite - Setup" 10 50 0
}

function configureMOTD {
    if [ -f /etc/motd.original ]; then
        rm -f /etc/motd
        cp -v configs/motd.conf /etc/motd
    else
        mv -f /etc/motd /etc/motd.original
        cp -v configs/motd.conf /etc/motd
    fi

    msgs=("Removing old MOTD..."
        "Copying new MOTD..."
    )
    commands=("rm -f /etc/motd -y"
        "cp -v configs/motd.conf /etc/motd"
    )
    n=${#commands[@]}
    i=0
    while [ "$i" -lt "$n" ]; do
        pct=$((i * 100 / n))
        echo XXX
        echo $i
        echo "${msgs[i]}"
        echo XXX
        echo "$pct"
        eval "${commands[i]}"
        i=$((i + 1))
    done | whiptail --gauge "Please wait..." --title "MOTD" --backtitle "UniSuite - Setup" 10 50 0
}

function installUniSuite {
    msgs=("Installing NodeJS..."
        "Installing npm..."
        "Installing nginx..."
        "Installing apache2..."
        "Installing UFW..."
        "Installing Certbot..."
        "Installing Fail2Ban..."
        "Installing unattended-upgrades..."
        "Installing ClamAV..."
        "Installing ClamAV-Daemon..."
        "Installing UniSuite..."
    )
    commands=("apt-get install nodejs -y"
        "apt-get install npm -y"
        "apt-get install nginx -y"
        "apt-get install apache2 -y"
        "apt-get install ufw -y"
        "apt-get install certbot -y"
        "apt-get install fail2ban -y"
        "apt-get install unattended-upgrades -y"
        "apt-get install clamav -y"
        "apt-get install clamav-daemon -y"
        "dpkg -i unisuite-package.deb"
    )
    n=${#commands[@]}
    i=0
    while [ "$i" -lt "$n" ]; do
        pct=$((i * 100 / n))
        echo XXX
        echo $i
        echo "${msgs[i]}"
        echo XXX
        echo "$pct"
        eval "${commands[i]}"
        i=$((i + 1))
    done | whiptail --gauge "Please wait..." --title "Installing UniSuite" --backtitle "UniSuite - Setup" 10 50 0
}

function removeUniSuite {
    msgs=("Uninstalling UniSuite..."
        "Removing NodeJS..."
        "Removing npm..."
        "Removing nginx..."
        "Removing apache2..."
        "Removing UFW..."
        "Removing Certbot..."
        "Removing Fail2Ban..."
        "Removing unattended-upgrades..."
        "Removing ClamAV..."
        "Removing ClamAV-Daemon..."
        "Removing UniSuite..."
    )
    commands=("apt-get purge unisuite -y"
        "apt-get purge nodejs -y"
        "apt-get purge npm -y"
        "apt-get purge nginx -y"
        "apt-get purge apache2 -y"
        "apt-get purge ufw -y"
        "apt-get purge certbot -y"
        "apt-get purge fail2ban -y"
        "apt-get purge unattended-upgrades -y"
        "apt-get purge clamav -y"
        "apt-get purge clamav-daemon -y"
    )
    n=${#commands[@]}
    i=0
    while [ "$i" -lt "$n" ]; do
        pct=$((i * 100 / n))
        echo XXX
        echo $i
        echo "${msgs[i]}"
        echo XXX
        echo "$pct"
        eval "${commands[i]}"
        i=$((i + 1))
    done | whiptail --gauge "Please wait..." --title "Uninstalling UniSuite" --backtitle "UniSuite - Setup" 10 50 0
}

####################################### MAIN MENU #######################################

function showMainMenu {
    while [ 1 ]; do

        CHOICE=$(
            whiptail --menu "Please choose what you want to do now" --clear --nocancel --title "Main Menu" --backtitle "UniSuite - Setup" 16 100 9 \
                "1)" "System aktualisieren" \
                "2)" "Zeitzone konfigurieren" \
                "3)" "UniSuite deinstallieren" \
                "4)" "Exit Utility" 3>&2 2>&1 1>&3
        )

        case $CHOICE in
        "1)")
            systemUpdate
            ;;
        "2)")
            configureTimezone
            ;;
        "3)")
            removeUniSuite
            ;;
        "4)")
            exit 0
            ;;
        esac

    done

}

####################################### INSTALLER #######################################

function showInstaller {
    if ! whiptail --yesno "This program will install UniSuite on your server. Do you want to continue?" --clear --title "Information" --backtitle "UniSuite - Setup" 10 50; then
        clear
        exit 0
    fi

    if ! whiptail --yesno "$(cat LICENSE)" --clear --yes-button "Agree & Continue" --no-button "Deny" --defaultno --title "License Agreement" --backtitle "UniSuite - Setup" 25 80; then
        whiptail --infobox "We are sorry, but access to the UniSuite project requires an accepted license agreement. It is not possible to access this content without agreeing to the license terms.\nIf you have any questions or concerns, please contact the support team at contact@UniSuite.de.\nThank you for your understanding." --title "Information" --backtitle "UniSuite - Setup" 12 75
        exit 1
    fi

    #Timezone 
    configureTimezone

    hostnamectl set-hostname "unisuite.de"
    configureMOTD

    #Ask if really want to install (yes/no)
    if ! whiptail --yesno "The required information has been provided. Thank you!\n\nDo you really want to install UniSuite 2.0 now?\nThe installation can not be reverted!" --yes-button "Install" --no-button "Abort" --clear --title "Last Warning" --backtitle "UniSuite - Setup" 10 50; then
        clear
        exit 0
    fi

    #Install by calling each step
    systemUpdate
    installUniSuite
}

####################################### START UP #######################################

echo "Please wait..."

if ! [ -f "/etc/debian_version" ]; then
    clear
    echo "[Error] UniSuite only runs on Debian based systems."
    echo ""
    exit 1
fi

os_name=$(grep 'PRETTY_NAME' /etc/os-release)
ping_result=$(ping -c 3 8.8.8.8 | grep '100% packet loss')

if [[ $EUID > 0 ]]; then
    clear
    echo "[Error] UniSuite has to be started with root privileges."
    echo ""
    exit 1
fi

sudo apt-get -qq install whiptail -y

if ! [ -d "/var/unisuite/" ]; then
    if [ -n "$ping_result" ]; then
        whiptail --infobox "UniSuite requires an internet connection. Therefore it can not be installed." --title "Error" --backtitle "UniSuite - Setup" 10 50
        exit 1
    fi
    showInstaller
else
    if [ -n "$ping_result" ]; then
        whiptail --msgbox "UniSuite requires an internet connection to perform certain tasks." --clear --ok-button "Continue" --title "Warning" --backtitle "UniSuite - Setup" 10 50
    fi
    showMainMenu
fi