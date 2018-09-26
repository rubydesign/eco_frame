class Message
  include ActiveModel::Model

  attr_accessor :name, :email , :phone , :message

  validates :name, :email , :message, presence: true
end
