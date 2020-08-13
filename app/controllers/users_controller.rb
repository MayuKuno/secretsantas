class UsersController < ApplicationController
  def index
    return nil if params[:keyword] == ""
    @users = User.where(['nickname LIKE ?', "%#{params[:keyword]}%"] ).where.not(id: current_user.id).limit(10)
    respond_to do |format|
      format.html
      format.json
    end
 end
  
  def show
    @user = User.find(params[:id])
    @posts = Post.all
    @categories = Category.all

  end


  def edit
    @user = User.find(params[:id])

  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    redirect_to user_path(user.id)
  end
  def user_params
    params.require(:user).permit(:nickname,:first_name,:last_name, :first_name_kana, :last_name_kana,:birthday,:image, group_ids: [],post_ids: [])
  end
end
