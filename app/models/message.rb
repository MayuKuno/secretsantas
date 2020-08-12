class Message < ApplicationRecord
  belongs_to :group, optional: true
  belongs_to :user, optional: true

  validates :content, presence: true, unless: :image?

  mount_uploader :image, ImageUploader
end
