class CategoriesController < ApplicationController
  def index
    return nil if params[:keyword] == ""
    @categories = Category.where(['name LIKE ?', "%#{params[:keyword]}%"] )
    respond_to do |format|
      format.html
      format.json
    end
  end

  def show
    @category = Category.find(params[:id])
    @posts = Post.all
  end

end
