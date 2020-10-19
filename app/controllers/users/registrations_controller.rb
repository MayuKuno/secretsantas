# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  # before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]
  before_action :check_guest, only: :destroy


  def new
    @user = User.new

  end

  def create
  ##Createアクションでやることは
    #・1ページ目で入力した情報のバリデーションチェック
    #・1ページで入力した情報をsessionに保持させること
    #・次の住所情報登録で使用するインスタンスを生成、当該ページへ遷移すること
    @user = User.new(sign_up_params) #Userモデルのインスタンスを生成し、1ページ目から送られてきたパラメータをインスタンス変数@userに代入
    unless @user.valid? #そのインスタンス変数に対してvalid?メソッドを適用することで送られてきたパラメータが指定されたバリデーションに違反しないかどうかチェック
      flash.now[:alert] = @user.errors.full_messages
      render :new and return #falseになった場合は、エラーメッセージとともにnewアクションへrender

    end
    #最後のページまで遷移した後に保存するという機能を達成するために、sessionという機能を用いる。sessionとは、ページが遷移しても情報が消えることが無いように、クライアント側で保持をさせておく機能
    session["devise.regist_data"] = {user: @user.attributes} #1ページ目で入力した情報のバリデーションチェックが完了したら、session["devise.regist_data"]に値を代入。この時、sessionにハッシュオブジェクトの形で情報を保持させるために、attributesメソッドを用いてデータを整形
    session["devise.regist_data"][:user]["password"] = params[:user][:password] #paramsの中にはパスワードの情報は含まれているが、attributesメソッドでデータ整形をした際にパスワードの情報は含まれていない。そこで、パスワードを再度sessionに代入する必要がある

    @address = @user.build_address #次のページで、このユーザーモデルに紐づく住所情報を入力させるため、該当するインスタンスを生成しておく必要がある。そのために、build_addressで今回生成したインスタンス@userに紐づくAddressモデルのインスタンスを生成し、@addressというインスタンス変数に代入
    render :new_address #住所情報を登録させるページを表示するnew_addressアクションのビューへrender
  end
  
  def create_address
  ##Create_addressアクションでやることは
    #2ページ目で入力した住所情報のバリデーションチェック
    #バリデーションチェックが完了した情報と、sessionで保持していた情報とあわせ、ユーザー情報として保存すること
    #sessionを削除すること
    #ログインをすること

    @user = User.new(session["devise.regist_data"]["user"])

    @address = Address.new(address_params)

    unless @address.valid? #createアクションと同様に、valid?メソッドを用いて、バリデーションチェックを行う
      flash.now[:alert] = @address.errors.full_messages
      render :new_address and return
    end

    @user.build_address(@address.attributes) #build_addressを用いて送られてきたparamsを、保持していたsessionが含まれる@userに代入
    @user.save #saveメソッドを用いてテーブルに保存します。
    session["devise.regist_data"]["user"].clear #clearメソッドを用いて明示的にsessionを削除
    sign_in(:user, @user) #ユーザーの新規登録ができても、ログインができているわけではありません。それをsign_inメソッドを利用してログイン作業を行う
  end

  def edit
   super
  #  @user = User.find(params[:id])

  end

  def update
    @user.update(update_user_params)
    posts_path 
    super
   
  end
  def check_guest
    if resource.email == 'guest@example.com'
      redirect_to user_path(@user.id)
      flash[:alert] = "ゲストユーザーは削除できません。"

    end
  end
  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
  protected

  def address_params
    params.require(:address).permit(:zipcode, :prefecture_code, :city,:district, :building, :room)
  end
  def update_user_params
    params.require(:user).permit(:nickname, :first_name,:last_name, :first_name_kana, :last_name_kana,:birthday,:image, group_ids: [],post_ids: [], address_attributes: [:zipcode, :prefecture_code, :city,:district, :building, :room, :_destroy, :id])
  end
  def after_update_path_for(resource)
    posts_path
  end

end
