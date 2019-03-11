class Message
  include ActiveModel::Model
  include ActiveModel::Validations

  attr_accessor :name, :email , :phone , :message

  validates :name, :email , :message, presence: true

  validate :email_name

  def email_name
    puts "called"
    errors.add(:email, "needs at") unless email.index("@")
    name , domain = email.split("@")
    if name.squeeze.length == 1
      errors.add(:email, "single char name")
    end
    if domain && domain.split(".").first.to_i != 0
      errors.add(:email, "numeric domain")
    end
    if domain && domain.split(".").first.downcase == "qq"
      errors.add(:email, "spam elsewhere qq.")
    end
  end
end
