class NotifiersController < ApplicationController

  def contact
    Notifier.contact(params[:message]).deliver
    redirect_to '/'
  end

end
