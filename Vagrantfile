Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.network :forwarded_port, guest: 3000, host: 3000 

  config.vm.provision :docker
  config.vm.provision :docker_compose,
    yml: '/vagrant/docker-compose.yml',
    run: :always,
    rebuild: true,
    project_name: 'all-seasons-hay'
end
