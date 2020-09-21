class Post < ApplicationRecord
  has_many :post_categories, dependent: :destroy
  has_many :categories, through: :post_categories, dependent: :destroy
  belongs_to :user, optional: true
  mount_uploader :image, ImageUploader
  
  def self.search(search)
    if search
      Category.where('name LIKE(?)', "%#{search}%")
    else
      Category.all
    end
  end


  
end


