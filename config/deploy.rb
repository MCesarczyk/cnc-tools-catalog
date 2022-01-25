# config valid for current version and patch releases of Capistrano
lock "~> 3.16.0"

set :application, "cnc-tools-catalog"
set :repo_url, "git@github.com:MCesarczyk/cnc-tools-catalog.git"
set :branch, "main"

set :pg_without_sudo, false
set :pg_host, 'localhost'
set :pg_database, 'cnc_tools_catalog_production'
set :pg_username, 'deploy'
set :pg_ask_for_password, true

set :deploy_to, "/home/deploy/#{fetch :application}"
set :linked_files, %w{config/master.key}
append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', '.bundle', 'public/system', 'public/uploads'

set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
