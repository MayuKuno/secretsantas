class PostsController < ApplicationController
  def index
    @posts = Post.all
    # return nil if params[:keyword] == ""
    # @categories = Category.where(['name LIKE ?', "%#{params[:keyword]}%"] ).limit(10)
    # @users = User.where(['name LIKE ?', "%#{params[:keyword]}%"] ).where.not(id: current_user.id).limit(10)
    # respond_to do |format|
    #   format.html
    #   format.json
    # end
    @tags = Post.tag_counts_on(:tags).most_used(5)    # タグ一覧表示


  end
  def show

    @tags = Post.tag_counts_on(:tags).order('count DESC')     # 全タグ(Postモデルからtagsカラムを降順で取得)
    if @tag = params[:tag]   # タグ検索用
      @post = Post.tagged_with(params[:tag])   # タグに紐付く投稿
    end

  end

  def new
    @category = Category.new
    @post = Post.new
    # @categories = Category.all
    # @post.categories 
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
    # @category = @post.category_ids
    
  end
  def update
    @post = Post.find(params[:id])
    # @post.update(post_params)
    # redirect_to posts_path
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
    @tags =  Post.all.search(params[:keyword])
    @posts = Post.all

  end
  
  private
  def post_params
    params.require(:post).permit(:tag_list, :description, :image, category_ids: []).merge(user_id: current_user.id)
  end
end
