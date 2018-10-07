class MessageMailer < ApplicationMailer

  def submit( message )
    email = message.email
    mail(to: email, reply_to: email , subject: "Your message")
  end

end
