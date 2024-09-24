dpkg-deb --build unisuite-package
dpkg -i unisuite-package.deb
apt-get install --fix-broken -f
#sshpass -p 'Lukas--01--lp' scp unisuite-package.deb root@194.62.157.244:/home/
