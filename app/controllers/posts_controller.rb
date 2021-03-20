class PostsController < ApplicationController
  def index
    @groups = Group.all

    @tags = Post.tag_counts_on(:tags).most_used(5)  
    if params[:tag]
      @posts = Post.tagged_with(params[:tag])    
    else
      @posts = Post.all

    end

  end

  def show

  end

  def new
    @category = Category.new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to posts_path
    else
      render :new
    end
  end

  def edit
    @post = Post.find(params[:id])    
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to posts_path(@post), notice: 'グループを更新しました'
    else
      render :edit
    end
  end
  def destroy
    post = Post.find(params[:id])

    post.destroy
    redirect_to posts_path

  end


  def search
    @posts = Post.search(params[:keyword])
    respond_to do |format|
      format.html
      format.json
    end
  end

  
  private
  def post_params
    params.require(:post).permit(:tag_list, :caption, :image, category_ids: []).merge(user_id: current_user.id)
  end
end
