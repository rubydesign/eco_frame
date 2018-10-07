class ApplicationMailer < ActionMailer::Base
  default from: "info@ecoframe.house" , bcc: "info@ecoframe.house"
  layout 'mailer'
end
