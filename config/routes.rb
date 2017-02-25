Rails.application.routes.draw do
  
  root 'template#index'
  
  get 'index' => 'template#index'
  get 'favorites' => 'template#favorites'
  get 'submit' => 'template#submit'
  
  get 'articles' => 'template#articles'
  get 'essays' => 'template#essays'
  
  # sample article pages
  get 'article' => 'template#article'
  get 'remarkable' => 'template#about'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
