Rails.application.routes.draw do
  
  root 'template#index'
  
  get 'index' => 'template#index'
  get 'article' => 'template#article'
  get 'remarkable' => 'template#about'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
