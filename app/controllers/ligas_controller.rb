class LigasController < ApplicationController

  http_basic_authenticate_with :name => "salvador", :password => "carlomagno"

  def new
    render 'new', :layout => false
  end

  def create
    liga = params[:liga]
    File.open('public/liga.txt', 'w') {|f| f.write(liga) }
    redirect_to '/'
  end

end
