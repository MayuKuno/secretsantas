class GroupsController < ApplicationController

  def index
    @groups = Group.all

  end
  def show
    @group = Group.find(params[:id])

  end
  def new
    @group = Group.new
    @group.participant << current_user

  end

  def create
    # binding.pry
    @group = Group.create(group_params)    
    if @group.save
      redirect_to posts_path
    else
      render action: :new
    end
  end

 

def edit
  @group = Group.find(params[:id])
end

def update
  group = Group.find(params[:id])
  group.update(group_params)
  redirect_to group_messages_path(group) 
end

def destroy
  group = Group.find(params[:id])
  group.destroy
  redirect_to posts_path
end
  private
  def group_params
    params.require(:group).permit(:name, :budget, :exchange_date, participant_ids: [])
  end

  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end
end



