class TopsController < ApplicationController
  def index
    @groups = Group.all

    @tags = Post.tag_counts_on(:tags).most_used(5)  
    if params[:tag]
      @posts = Post.tagged_with(params[:tag])    
    else
      @posts = Post.all
    end
  end
  def faq
  end
  def service
  end
  def privacy
  end
end
