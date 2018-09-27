class ApplicationController < ActionController::Base
  before_action :set_locale

  def set_locale
    loc = params[:locale]
    if(loc)
      I18n.locale = loc
    else
      redirect_to_default
    end
  end

  def redirect_to_default
    page = params[:id] || "index"
    redirect_to "/#{extract_locale}/#{page}"
  end

  def extract_locale
    candidates = request.env['HTTP_ACCEPT_LANGUAGE']
    return I18n.default_locale unless candidates
    if I18n.available_locales.include?(candidates.scan(/^[a-z]{2}/).first)
      browser_locale
    else
      I18n.default_locale
    end

  end

  def default_url_options
    { locale: I18n.locale }
  end

end
