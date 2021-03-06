Rails.application.routes.draw do

  root :to => "high_voltage/pages#show", format: false , id: "index"

  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    get "message_sent" => "messages#sent"
    resources :messages
    get "/:id" => "high_voltage/pages#show", as: :page, format: false
  end

end
