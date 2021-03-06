class Group < ApplicationRecord
  has_many :group_users, dependent: :destroy
  has_many :users, through: :group_users, dependent: :destroy
  has_many :matching_users, dependent: :destroy

  has_many :messages, dependent: :destroy
  # mount_uploader :image, ImageUploader
  validates :name,:budget,:exchange_date,presence: true
  validates :users, 
  length: { 
      minimum: 3,
      message: 'must be at least 3' 
  }

 

  def show_last_message
    if (last_message = messages.last).present?
      if last_message.content?
        last_message.content
      else
        '画像が投稿されています'
      end
    else
      'まだメッセージはありません。'
    end
  end
end



