class MessagesController < ApplicationController

  # GET /messages/1
  def show
  end

  # GET /messages/new
  def new
    @message = Message.new
  end

  # POST /messages
  def create
    @message = Message.new(message_params)

    if @message.valid?
      redirect_to message_sent_path(locale: I18n.locale) , notice: 'Message was successfully created.'
    else
      render :new
    end
  end

  private

    # Only allow a trusted parameter "white list" through.
    def message_params
      params.require(:message).permit(:name, :email, :message, :phone)
    end
end
