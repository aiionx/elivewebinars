class Notifier < ActionMailer::Base
  default from: "madya.ayala@gmail.com"
  
  def contact(message)
    @message = message
    mail(
      :to => "madya.ayala@elivewebinars.com",
      :subject => @message['subject']
    )
  end
  
end
