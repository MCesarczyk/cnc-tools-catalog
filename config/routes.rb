Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'tools/index'
      post 'tools/create'
      get 'tools/:id', to: 'tools#show'
      get 'tools/:id', to: 'tools#edit'
      put 'tools/:id', to: 'tools#update'
      delete 'tools/:id', to: 'tools#destroy'

      get 'articles/index'
    end
  end
  
  root 'tools#index'
  get '*path', to: 'tools#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
