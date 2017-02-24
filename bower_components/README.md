All Bower assets are in /vendor/assets/bower_components

They are joined by `config.assets.paths << Rails.root.join('vendor', 'assets', 'bower_components'` in config/application.rb

So that they could be easily imported into asset pipeline

(This method was discovered at http://joelencioni.com/blog/2014/01/03/integrating-bower-with-rails/ )
