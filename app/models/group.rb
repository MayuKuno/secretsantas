class Group < ApplicationRecord
  has_many :group_users, dependent: :destroy
  has_many :participant, through: :group_users, dependent: :destroy
  has_many :drawn, through: :group_users, dependent: :destroy



  has_many :messages, dependent: :destroy
  # mount_uploader :image, ImageUploader

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



