module ApplicationHelper
  def vue_script_tag
    prod = Rails.env.production? ? ".min" : ""
    src = "https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue#{prod}.js"
    "<script src='#{src}'></script>".html_safe
  end
end
