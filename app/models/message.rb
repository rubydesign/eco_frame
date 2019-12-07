class Message
  include ActiveModel::Model
  include ActiveModel::Validations

  attr_accessor :name, :email , :phone , :message

  validates :name, length: { in: 6..30 }
  validates :message, length: { in: 30..500 }

  validate :email_name , :email_domain , :codes

  def email_name
    errors.add(:email, "needs at") unless email.index("@")
    name = email.split("@").first || ""
    if name.squeeze.length == 1
      errors.add(:email, "single char name")
    end
  end
  def email_domain
    domain = (email.split("@").last || "").split(".").first || ""
    if domain.to_i != 0
      errors.add(:email, "numeric domain")
    end
    if domain.downcase == "qq"
      errors.add(:email, "spam elsewhere qq.")
    end
  end
  def codes
    message.codepoints.each do |code|
      return errors.add(:message, "latin only") if code > 1000
    end
  end
end
