module ApplicationHelper
  def vue_script_tag
    prod = Rails.env.production? ? ".min" : ""
    src = asset_path "vue#{prod}.js"
    "<script src='#{src}'></script>".html_safe
  end
end
