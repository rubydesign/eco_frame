module ApplicationHelper

  def vue_script_tag
    prod = Rails.env.production? ? ".min" : ""
    src = asset_path "vue#{prod}.js"
    "<script src='#{src}'></script>".html_safe
  end

  def body_class
    return "index" if params[:id] == "index"
    "page"
  end

  def frame_paths
    [image_path('frame/aloitus-1.jpg') ,
    image_path('frame/aloitus-2.jpg') ,
    image_path('frame/aloitus-3.jpg') ,
    image_path('frame/aloitus-4.jpg')]
  end
end
