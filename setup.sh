dpkg-deb --build unisuite-package
dpkg -i unisuite-package.deb
apt-get install --fix-broken -y
