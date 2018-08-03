Rails.application.routes.draw do

  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    get "/:id" => "high_voltage/pages#show", :as => :page, :format => false
  end

end
