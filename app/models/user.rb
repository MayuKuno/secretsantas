class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :nickname,:first_name,:last_name, :first_name_kana, :last_name_kana,:birthday ,presence: true
  has_one :address, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :messages, dependent: :destroy

  has_many :group_users, dependent: :destroy
  has_many :groups, through: :group_users, dependent: :destroy
  #dependent: :destroyを追加することで、「親モデルを削除する際に、その親モデルに紐づく「子モデル」も一緒に削除できる」ようになります。
  include JpPrefecture
  jp_prefecture :prefecture_code

   mount_uploader :image, ImageUploader

  def prefecture_name
    JpPrefecture::Prefecture.find(code: prefecture_code).try(:name)
  end

  def prefecture_name=(prefecture_name)
    self.prefecture_code = JpPrefecture::Prefecture.find(name: prefecture_name).code
  end

end


