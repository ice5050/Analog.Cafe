Rails.application.routes.draw do
  get 'counter/index'

  get 'counter/index'
  root 'counter#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
