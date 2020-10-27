class Post < ApplicationRecord
  has_many :post_categories, dependent: :destroy
  has_many :categories, through: :post_categories, dependent: :destroy
  belongs_to :user, optional: true
  mount_uploader :image, ImageUploader
  acts_as_taggable
  validates :image, :caption, presence: true

  def self.search(search)
    if search
      Post.where('caption LIKE(?)', "%#{search}%")
    else
      Post.all
    end
  end


  
end


