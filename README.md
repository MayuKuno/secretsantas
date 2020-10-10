
# Project Title
Secret Santa 365

## Project Overview
Under the circumstances of Covid-19, it has become difficult for us to see our loved ones in person.
This app provides a platform to connect and exchange gifts with friends and family in a new way.
You will receive a gift from an unknown sender who has put their love and care into choosing a perfect gift for you.
Get conncted with your loved ones through Secret Santa 365.

What is Secret Santa?
Secret Santa is a Christmas tradition. Members of a group of friends, family, or coworkers draw random names to become someone’s Secret Santa and give a special gift for their giftee secretly.

コロナ禍の今、私たちは大切な人と面と向かって会うことが難しくなりました。
しかし、大切なひとが変わらず元気で過ごしているか、気になりませんか？直接会えなくても、あたらしい形で繋がっていたいと思いませんか？
そんな時は、このアプリを使って、プレゼント交換会をしてみましょう。
このアプリは、友達だけではなく、家族、職場の人などを集めて、オンラインプレゼント交換のお手伝いをします。
誰から送られてきたギフトかはわからないですが、あなたにとって大切な誰かが大切なあなたのことを思って選んだプレゼントを受け取りましょう

シークレットサンタとは？
クリスマスシーズンに行われるプレゼント交換ゲームです。
プレゼントをあげる相手をランダムで決め、その相手にプレゼントを用意します。
サンタクロースに相当するプレゼントの贈り主が不明（シークレット）である、という意味を込めてシークレットサンタと言われています。

## 本番環境(デプロイ先　テストアカウント＆ID)

## Motivation
　⇒どんな課題や不便なことを解決するためにこのアプリを作ったのか。

## Screenshots
特に、デプロイがまだできていない場合はDEMOをつけることで見た目を企業側に伝えることができます
<div style="text-align: center;">

|  　Topページ  |  
| ---- | 
|<img width="800" alt="Screen Shot 2020-09-28 at 19 23 04" src="https://user-images.githubusercontent.com/44453318/95646604-2f39ef00-0b05-11eb-94ef-42323559dc90.png">|
 

|ログインページ（基本情報）|ログインページ（住所）|ログインページ（完了）|
|---|---|---|
|<img alt="Screen Shot 2020-10-10 at 14 35 07" src="https://user-images.githubusercontent.com/44453318/95646698-20a00780-0b06-11eb-9e6f-38f77307478f.png">|<img alt="Screen Shot 2020-10-10 at 14 36 36" src="https://user-images.githubusercontent.com/44453318/95646697-20077100-0b06-11eb-850d-8d7c59345496.png">|<img alt="Screen Shot 2020-10-10 at 14 36 47" src="https://user-images.githubusercontent.com/44453318/95646694-1c73ea00-0b06-11eb-8df0-dfbb8da44be2.png">|

|  Homeページ  |  
| ---- | 
|<img width="800" alt="Screen Shot 2020-10-10 at 14 54 02" src="https://user-images.githubusercontent.com/44453318/95647204-81c8da80-0b08-11eb-82c0-55d16ed80bdf.png">|
</div>
## Features
工夫したポイント

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## 使用技術(開発環境)

## Function/features to implement later 課題や今後実装したい機能

・Amazon APIやRakuten APIを使った商品表示と欲しいものリストページ

## DB設計
### usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false,unique: true|
|first_name|string|null: false|
|last_name|string|null: false|
|first_name_kana|string|null: false|
|last_name_kana|string|null: false|
|birthday|date|null: false|
|image|text|null: false|
|email|string|null: false,default: "", unique: true|
|password|string|null: false,default: ""|

#### Association
- has_one :address
- has_many :posts
- has_many :groups,  through:  :groups_users
- has_many :groups_users
- has_many :messages



### addressテーブル
|Column|Type|Options|
|------|----|-------|
|zipcode|integer|null: false|
|prefecture_code|integer|null: false|
|city|string|null: false|
|district|string|null: false|
|building|string| |
|room|date| |
|user|references| foreign_key: true|

#### Association
- belongs_to :user, optional: true


### postsテーブル
|Column|Type|Options|
|------|----|-------|
|description|text|null: false|
|image|text|null: false|

#### Association
- belongs_to :user
- has_many :posts_categories
- has_many :categoreis,  through: :posts_categories

### categoriesテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
#### Association
- has_many :posts_categories
- has_many  :posts,  through:  :posts_categories

### groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|budget|integer|null: false|
|exchange_date|date|null: false|

#### Association
- has_many :groups_users
- has_many  :users,  through:  :groups_users
- has_many :messages

### messagesテーブル
|Column|Type|Options|
|------|----|-------|
|content|text|null: false|
|image|text|null: false｜
|user|references| foreign_key: true|
|group|references| foreign_key: true|

#### Association
- belongs_to :user
- belongs_to :group

<!-- ーーーーーーーーー -->
### posts_categoriesテーブル
|Column|Type|Options|
|------|----|-------|
|post|references| foreign_key: true|
|category|references| foreign_key: true|

#### Association
- belongs_to :post
- belongs_to :category

### groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group|references| foreign_key: true|
|user|references| foreign_key: true|
#### Association
- belongs_to :user
- belongs_to :group

### posts_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references| foreign_key: true|
|category|references| foreign_key: true|

#### Association
- belongs_to :user
- belongs_to :group

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
