class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :nickname,:first_name,:last_name, :first_name_kana, :last_name_kana,:birthday ,presence: true
  has_one :address, dependent: :destroy
  accepts_nested_attributes_for :address
  has_many :posts, dependent: :destroy
  has_many :messages, dependent: :destroy

  has_many :group_users, dependent: :destroy
  has_many :groups, through: :group_users, dependent: :destroy
  #dependent: :destroyを追加することで、「親モデルを削除する際に、その親モデルに紐づく「子モデル」も一緒に削除できる」ようになります。
  has_many :active_relationships, class_name:  "Relationship",
                                  foreign_key: "follower_id",
                                  dependent:   :destroy
  has_many :passive_relationships, class_name:  "Relationship",
                                  foreign_key: "followed_id",
                                  dependent:   :destroy
 has_many :following, through: :active_relationships,  source: :followed
 has_many :followers, through: :passive_relationships, source: :follower
 mount_uploader :image, ImageUploader

   include JpPrefecture
   jp_prefecture :prefecture_code

    def prefecture_name
     JpPrefecture::Prefecture.find(code: prefecture_code).try(:name)
   end
     
   def prefecture_name=(prefecture_name)
     self.prefecture_code = JpPrefecture::Prefecture.find(name: prefecture_name).code
   end
  # ユーザーをフォローする
  def follow(other_user)
    active_relationships.create(followed_id: other_user.id)
  end

  # ユーザーをアンフォローする
  def unfollow(other_user)
    active_relationships.find_by(followed_id: other_user.id).destroy
  end

  # 現在のユーザーがフォローしてたらtrueを返す
  def following?(other_user)
    following.include?(other_user)
  end

   

end




