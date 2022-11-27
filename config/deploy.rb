# config valid only for current version of Capistrano
# lock '3.4.0'

set :application, 'minfal-website'
set :repo_url, 'ssh://git@github.com:Michelium/minfal-website.git'

# Default branch is :master
ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp




# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('.env.local')

# set :linked_dirs, fetch(:linked_dirs, []).push('public/uploads/images')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5
# set :composer_install_flags, '--no-dev --no-interaction --optimize-autoloader --ignore-platform-reqs'
# SSHKit.config.command_map[:composer] = "php #{shared_path.join("composer.phar")}"
# SSHKit.config.command_map[:composer] = "composer"

namespace :deploy do
  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
        execute "cd #{release_path} && npm install"
        execute "cd #{release_path} && npm run build"
    end
  end

  after :updated, :restart

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
      #
    end
  end

end
