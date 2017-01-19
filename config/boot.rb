ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../Gemfile', __dir__)

require 'bundler/setup' # Set up gems listed in the Gemfile.

# Start on port 3001
require 'rails/commands/server'
module DefaultOptions
  def default_options
    super.merge!(Port: 3001)
  end
end
Rails::Server.send(:prepend, DefaultOptions)
