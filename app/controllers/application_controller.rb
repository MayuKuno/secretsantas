class ApplicationController < ActionController::Base
  include SessionsHelper
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  # before_action :authenticate_user!

  def after_sign_in_path_for(resource)
    posts_path
  end
  def after_sign_out_path_for(resource)
    root_path
  end
  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname,:first_name,:last_name, :first_name_kana, :last_name_kana,:birthday,:image])
  end
end




