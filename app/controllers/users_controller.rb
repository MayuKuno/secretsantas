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
    
    @categories = Category.all
  end


  def following
    @title = "Following"
    @user  = User.find(params[:id])
    @users = @user.following.paginate(page: params[:page])
    render 'show_following'
  end

  def followers
    @title = "Followers"
    @user  = User.find(params[:id])
    @users = @user.followers.paginate(page: params[:page])
    render 'show_follower'
  end

  def search
    @users = User.where('nickname LIKE(?)', "%#{params[:keyword]}%")
    respond_to do |format|
      format.html
      format.json
    end
  end
  private



  def update_user_params
    params.require(:user).permit(:nickname, :first_name,:last_name, :first_name_kana, :last_name_kana,:birthday,:image,:interests, group_ids: [],post_ids: [], address_attributes: [:zipcode, :prefecture_code, :city,:district, :building, :room, :_destroy, :id])
  end

end
