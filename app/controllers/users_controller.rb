class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
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
