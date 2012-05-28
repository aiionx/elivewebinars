class Notifier < ActionMailer::Base
  default from: "elivewebinars@gmail.com"
  
  def contact(message)
    @message = message
    mail(
      :to => "contacto@elivewebinars.com",
      :bcc => ["madya.ayala@elivewebinars.com", 'salvador.rocha@elivewebinars.com'],
      :subject => @message['subject']
    )
  end
  
end
