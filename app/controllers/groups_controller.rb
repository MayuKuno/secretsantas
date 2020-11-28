class GroupsController < ApplicationController

  def index
    @groups = Group.all
  
 end

  def show
    @group = Group.find(params[:id])
    to_user_id = MatchingUser.find_by(group_id: params[:id], from_user_id: current_user).to_user_id
    @to_user = User.find(to_user_id)
    gon.to_user = @to_user
    @to_address = Address.find_by(user_id: @to_user)
    gon.to_address = @to_address
    gon.to_addressPrefecture = JpPrefecture::Prefecture.find(code: @to_address.prefecture_code).try(:name)

 

  end
  
  def new
    @group = Group.new

  end

  
  def create
    @group = Group.new(group_params)
    if @group.valid?
      ActiveRecord::Base.transaction do
        @group.save
        matching_members(@group.users.pluck(:id)).each do |pair|
          MatchingUser.create(group_id: @group.id, from_user_id: pair[:from_user], to_user_id: pair[:to_user])
        end
      end
      redirect_to group_path(@group.id)
    else
      render action: :new
    end
  end


 

def edit
  @group = Group.find(params[:id])
end

def update
  @group = Group.find(params[:id])
  if @group.update(group_params)
    redirect_to group_path(@group.id)
  else
    render action: :edit
  end

end



def destroy
  group = Group.find(params[:id])
  group.destroy
  redirect_to tops_path
end

def anonymous
end

  private
  def group_params
    params.require(:group).permit(:name, :budget, :exchange_date, user_ids: [])
  end

  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end
end

def matching_members(group_user_ids)
  group_user_ids.shuffle!
  matching_pairs = []
  group_user_ids.each_with_index do |user_id, i|
    from_user = user_id
    to_user = group_user_ids[i + 1] ? group_user_ids[i + 1] : group_user_ids[0]
    matching_pairs << {from_user: from_user, to_user: to_user}
  end
  matching_pairs
end