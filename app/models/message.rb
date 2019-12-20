class Message
  include ActiveModel::Model
  include ActiveModel::Validations

  attr_accessor :name, :email , :phone , :message

  validates :name, length: { in: 6..30 }
  validates :message, length: { in: 30..500 }

  validates :email, 'valid_email_2/email': { mx: true, disposable: true, disallow_subaddressing: true}
  validate :email_domain , :codes

  def email_domain
    domain = (email.split("@").last || "").split(".").first || ""
    if domain.to_i != 0
      errors.add(:email, "")
    end
    if domain.downcase == "qq"
      errors.add(:email, "qq.")
    end
  end
  def codes
    message.codepoints.each do |code|
      return errors.add(:message, "what does that even mean") if code > 1000
    end
  end
end
