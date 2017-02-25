class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
end

def html_open_tag
    ('<html lang="en"' + (cookies[:fontsLoaded] ? ' class="fonts-loaded"'.html_safe : '') + '>').html_safe
end