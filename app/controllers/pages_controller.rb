class PagesController < ApplicationController

  def home
    @liga = File.open('public/liga.txt').read
  end
  
  def us
  end
  
  def chat
  end
  
  def clients
  end
  
  def payments
  end

end
