# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.network "forwarded_port", guest: 80, host: 4000
  config.vm.network "forwarded_port", guest: 27017, host: 4100
  config.vm.provision "shell", path: "vagrant-provision-vm.sh"
end
