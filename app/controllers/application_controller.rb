class ApplicationController < ActionController::Base
  before_action :locale

  def locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

end
