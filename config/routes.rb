Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'tools/index'
      post 'tools/create'
      delete 'tools/:id', to: 'tools#destroy'
    end
  end
  
  root 'tools#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
