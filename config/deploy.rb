# config valid only for current version of Capistrano
lock '3.11.0'

set :application, 'eco_frame'
set :repo_url, 'https://github.com/rubydesign/eco_frame'

set :deploy_to, '/var/www/vhosts/ecoframe.house'

append :linked_dirs, "public/images" ,"tmp/pids", "tmp/cache"

set :passenger_restart_command, 'passenger-config restart-app'

namespace :deploy do

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
    end
  end

end
