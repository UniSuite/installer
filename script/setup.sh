#!/bin/bash

####################################
#          UniSuite Setup          #
####################################

####################################### FUNCTIONS #######################################

function configureHostname {
    currentHN=$(hostname)
    while true; do
        newHN=$(whiptail --inputbox "Which hostname should the system use?\nCurrent: $currentHN" --nocancel --title "Hostname" --backtitle "UniSuite - Setup" 10 50 3>&1 1>&2 2>&3)
        sudo hostnamectl set-hostname "$newHN"
        whiptail --msgbox "The hostname has been set successfully to $newHN." --clear --ok-button "Continue" --title "Information" --backtitle "UniSuite - Setup" 10 50
        break
    done
}

function configureTimezone {
    currentTZ=$(timedatectl show --property=Timezone --value)
    while true; do
        newTZ=$(whiptail --inputbox "Which timezone should the system use?\nCurrent: $currentTZ" --nocancel --title "Timezone" --backtitle "UniSuite - Setup" 10 50 3>&1 1>&2 2>&3)
        if timedatectl list-timezones | grep -qx "$newTZ"; then
            sudo timedatectl set-timezone "$newTZ"
            whiptail --msgbox "The timezone has been set successfully to $newTZ." --clear --ok-button "Continue" --title "Information" --backtitle "UniSuite - Setup" 10 50
            break
        else
            whiptail --msgbox "Invalid time zone selected! Please try again." --clear --ok-button "OK" --title "Error" --backtitle "UniSuite - Setup" 10 50
        fi
    done
}

function prepareInstallation {
    msgs=("Creating folders (default)..."
        "Creating folders (cron)..."
        "Creating folders (systemd)..."
        "Creating folders (logs)..."
        "Creating folders (antiv logs)"
        "Creating folders (antiv quarantine)..."
    )
    commands=("sudo mkdir /var/unisuite/"
        "sudo mkdir /var/unisuite/cron/"
        "sudo mkdir /var/unisuite/systemd/"
        "sudo mkdir /var/log/unisuite/"
        "sudo mkdir /var/log/unisuite/antiv/"
        "sudo mkdir /var/antiv-quarantine/"
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
    done | whiptail --gauge "Please wait..." --title "Preparing installation" --backtitle "UniSuite - Setup" 10 50 0
}

function systemUpdate {
    msgs=("Updating package sources..."
        "Updating system packages..."
        "Installing dependencies if needed..."
        "Removing unneeded packages..."
    )
    commands=("sudo apt-get update -y"
        "sudo apt-get full-upgrade -y"
        "sudo apt-get install sudo curl nano git ca-certificates apt-transport-https lsb-release gnupg -y"
        "sudo apt-get autoremove -y"
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
        sudo rm -f /etc/motd
        sudo cp -v configs/motd.conf /etc/motd
    else
        sudo mv -f /etc/motd /etc/motd.original
        sudo cp -v configs/motd.conf /etc/motd
    fi

    msgs=("Removing old MOTD..."
        "Copying new MOTD..."
    )
    commands=("sudo rm -f /etc/motd -y"
        "sudo cp -v configs/motd.conf /etc/motd"
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

function configureSecurity {
    msgs=(
        # ClamAV
        "Installing antivirus..."
        "Configuring antivirus db-updater..."
        "Configuring antivirus autoscan..."
        "Configuring unisuite-antiv..."
        "Configuring unisuite-antiv..."
        "Registering unisuite-antiv as cronjob..."
        # UFW
        "Installing firewall..."
        "Configuring firewall..."
        # fail2Ban
        "Installing brute-force protection..."
        "Configuring brute-force protection..."
        # libpam-pwQuality
        "Installing Password Quality Requirements..."
        "Configuring Password Quality Requirements..."
        # unattended-Upgrades
        "Installing Unattended Upgrades..."
        "Registering Unattended Upgrades..."
        "Restarting Unattended Upgrades..."
        # CleanUp
        "Cleaning up..."
    )
    commands=(
        # ClamAV
        "sudo apt-get install clamav clamav-daemon clamav-freshclam -y"
        "sudo systemctl start clamav-freshclam"
        "sudo systemctl start clamav-daemon"
        "sudo cp -v scripts/antiv.sh /var/unisuite/cron/unisuite-antiv.sh"
        "sudo chmod +x /var/unisuite/cron/unisuite-antiv.sh"
        "echo '0 3 * * * /bin/bash /var/unisuite/cron/unisuite-antiv.sh' | crontab -"
        # UFW
        "sudo apt-get install ufw -y"
        "sudo bash scripts/ufwRules.sh"
        # fail2Ban
        "sudo apt-get install fail2ban -y"
        "sudo cp -v configs/fail2ban.conf /etc/fail2ban/jail.local"
        # libpam-pwQuality
        "sudo apt-get install libpam-pwquality -y"
        "sudo sed -i -r -e 's/^(password\s+requisite\s+pam_pwquality.so)(.*)$/\1 retry=3 minlen=10 difok=3 ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1 maxrepeat=3 gecoschec/' /etc/pam.d/common-password"
        # unattended-Upgrades
        "sudo apt-get install unattended-upgrades -y"
        "sudo systemctl enable unattended-upgrades"
        "sudo systemctl restart unattended-upgrades"
        # CleanUp
        "sudo apt-get autoremove -y"
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
    done | whiptail --gauge "Please wait..." --title "Security" --backtitle "UniSuite - Setup" 10 50 0
}

function configureSMART {
    msgs=(
        "Installing smartmontools..."
        "Copying unisuite-diskagent..."
        "Configuring unisuite-diskagent..."
        "Copying unisuite-diskagent service..."
        "Reloading systemd daemon..."
        "Configuring unisuite-diskagent service..."
        "Starting unisuite-diskagent..."
    )
    commands=(
        "sudo apt-get install smartmontools -y"
        "sudo cp -v scripts/diskagent.sh /var/unisuite/systemd/"
        "sudo chmod +x /var/unisuite/systemd/unisuite-diskagent.sh"
        "sudo cp -v configs/diskagent.service.conf /etc/systemd/system/unisuite-diskagent.service"
        "sudo systemctl daemon-reload"
        "sudo systemctl enable unisuite-diskagent.service"
        "sudo systemctl start unisuite-diskagent.service"
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
    done | whiptail --gauge "Please wait..." --title "SMART DiskAgent" --backtitle "UniSuite - Setup" 10 50 0
}

####################################### MAIN MENU #######################################

function showMainMenu {
    while [ 1 ]; do

        CHOICE=$(
            whiptail --menu "Please choose what you want to do now" --clear --nocancel --title "Main Menu" --backtitle "UniSuite - Setup" 16 100 9 \
                "1)" "System aktualisieren" \
                "2)" "Zeitzone konfigurieren" \
                "3)" "Firewall konfigurieren" \
                "4)" "MOTD konfigurieren" \
                "5)" "Automatics" \
                "6)" "Exit Utility" 3>&2 2>&1 1>&3
        )

        case $CHOICE in
        "1)")
            systemUpdate
            ;;
        "2)")
            configureTimezone
            ;;
        "3)")
            configureSecurity
            ;;
        "4)")
            configureMOTD
            ;;
        "5)")
            registerAutomatics
            ;;
        "6)")
            exit 0
            ;;
        esac

    done

}

####################################### INSTALLER #######################################

function showInstaller {
    type=""

    if ! whiptail --yesno "This program will install UniSuite on your server. Do you want to continue?" --clear --title "Information" --backtitle "UniSuite - Setup" 10 50; then
        clear
        exit 0
    fi

    if ! whiptail --yesno "$(cat LICENSE)" --clear --yes-button "Agree & Continue" --no-button "Deny" --defaultno --title "License Agreement" --backtitle "UniSuite - Setup" 25 80; then
        whiptail --infobox "We are sorry, but access to the UniSuite project requires an accepted license agreement. It is not possible to access this content without agreeing to the license terms.\nIf you have any questions or concerns, please contact the support team at contact@UniSuite.de.\nThank you for your understanding." --title "Information" --backtitle "UniSuite - Setup" 12 75
        exit 1
    fi

    #Ask other details (domain / hostname, location, time)
    whiptail --msgbox "Please answer the following questions to start the installation" --title "Information" --backtitle "UniSuite - Setup" 12 75
    configureHostname
    configureTimezone

    #Ask what to install (checkbox)
    #  Master: Fileserver for cluster, ntp server, ?
    #  Worker: ?
    if whiptail --yesno "Please choose what you want to install:\n\nMaster:\nAs the master, the server controls the cluster. It distributes the tasks to the workers and only takes on important tasks itself.\n\nWorker:\nAs a worker, the server performs the tasks in the cluster that it is assigned by the cluster master. If a worker fails, another one takes over." --clear --yes-button "Master" --no-button "Worker" --defaultno --title "Type of installation" --backtitle "UniSuite - Setup" 25 75; then
        type="MASTER"
    else
        type="WORKER"
    fi

    #Ask if really want to install (yes/no)
    if ! whiptail --yesno "The required information has been provided. Thank you!\n\nDo you really want to install UniSuite 2.0 now?\nThe installation can not be reverted!" --yes-button "Install" --no-button "Abort" --clear --title "Last Warning" --backtitle "UniSuite - Setup" 10 50; then
        clear
        exit 0
    fi

    #Install by calling each step
    prepareInstallation
    systemUpdate
    configureMOTD
    configureSMART
    configureSecurity
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