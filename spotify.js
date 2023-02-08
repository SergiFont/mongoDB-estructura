db = db.getSiblingDB("spotifySergi")

db.users.drop()
db.users.insertMany(
    [
        {
          "_id": ObjectId("63dfde23fccab9b6855ee4a7"),
          "cp": "08009",
          "email": "email1@mail.com",
          "gender": "male",
          "country": "spain",
          "password": "12345",
          "user_name": "usuario1",
          "user_type": "free",
          "birth_date": "1990-01-01",
          "subscription": {
            "status":"false"
          },
          "favourite_songs": [
            ObjectId("63dfdd8efccab9b6855ee48e"),
            ObjectId("63dfdd8efccab9b6855ee48f")
          ],
          "favourite_albums": [
            ObjectId("63dfdc41fccab9b6855ee447")
          ],
          "favourite_artists": [
            ObjectId("63dfdc67fccab9b6855ee44e")
          ],
          "playlists": [
            ObjectId("63dfdd55fccab9b6855ee479")
          ]
        },
        {
          "_id": ObjectId("63dfde23fccab9b6855ee4a8"),
          "cp": "08009",
          "email": "email2@mail.com",
          "gender": "female",
          "country": "spain",
          "password": "12345",
          "user_name": "usuario2",
          "user_type": "premium",
          "birth_date": "1990-01-01",
          "payment_details": {
            "payment_method": "card",
            "card_number": "455689876543",
            "expire_date": "2012-01-01",
            "cvv": "123"
          },
          "payment_register": {
            "price": 5.98,
            "pay_date": "2010-01-01"
          },
          "subscription": {
            "status":"true",
            "start_date": "2010-01-01",
            "recharge_date": "2010-02-01",
          },
          "favourite_songs": [
            ObjectId("63dfdd8efccab9b6855ee490"),
            ObjectId("63dfdd8efccab9b6855ee491")
          ],
          "favourite_albums": [
            ObjectId("63dfdc41fccab9b6855ee448")
          ],
          "favourite_artists": [
            ObjectId("63dfdc67fccab9b6855ee44f")
          ],
          "playlists": [
            ObjectId("63dfdd55fccab9b6855ee47a")
          ]
        },
        {
          "_id": ObjectId("63dfde23fccab9b6855ee4a9"),
          "cp": "08009",
          "email": "email3@mail.com",
          "gender": "male",
          "country": "spain",
          "password": "12345",
          "user_name": "usuario3",
          "user_type": "free",
          "birth_date": "1990-01-01",
          "payment_details": {
            "payment_method": "card",
            "card_number": "455689876543",
            "expire_date": "2012-01-01",
            "cvv": "123"
          },
          "payment_register": {
            "price": 5.98,
            "pay_date": "2010-12-01"
          },
          "subscription": {
            "status":"false"
          },
          "favourite_songs": [
            ObjectId("63dfdd8efccab9b6855ee492"),
            ObjectId("63dfdd8efccab9b6855ee493")
          ],
          "favourite_albums": [
            ObjectId("63dfdc41fccab9b6855ee449")
          ],
          "favourite_artists": [
            ObjectId("63dfdc67fccab9b6855ee450")
          ],
          "playlists": [
            ObjectId("63dfdd55fccab9b6855ee47b")
          ]
        },
        {
          "_id": ObjectId("63dfde23fccab9b6855ee4aa"),
          "cp": "08009",
          "email": "email4@mail.com",
          "gender": "female",
          "country": "spain",
          "password": "12345",
          "user_name": "usuario4",
          "user_type": "premium",
          "birth_date": "1990-01-01",
          "payment_details": {
            "payment_method": "paypal",
            "paypal_username": "user4"
          },
          "payment_register": {
            "price": 5.98,
            "pay_date": "2010-01-01"
          },
          "subscription": {
            "status":"true",
            "start_date": "2010-01-01",
            "recharge_date": "2010-02-01",
          },
          "favourite_songs": [
            ObjectId("63dfdd8efccab9b6855ee494"),
            ObjectId("63dfdd8efccab9b6855ee495")
          ],
          "favourite_albums": [
            ObjectId("63dfdc41fccab9b6855ee44a")
          ],
          "favourite_artists": [
            ObjectId("63dfdc67fccab9b6855ee451")
          ],
          "playlists": [
            ObjectId("63dfdd55fccab9b6855ee47c")
          ]
        },
        {
          "_id": ObjectId("63dfde23fccab9b6855ee4ab"),
          "cp": "08009",
          "email": "email5@mail.com",
          "gender": "female",
          "country": "spain",
          "password": "12345",
          "user_name": "usuario5",
          "user_type": "premium",
          "birth_date": "1990-01-01",
          "payment_details": {
            "payment_method": "paypal",
            "paypal_username": "user5"
          },
          "payment_register": {
            "price": 5.98,
            "pay_date": "2010-01-01"
          },
          "subscription": {
            "status":"true",
            "start_date": "2010-01-01",
            "recharge_date": "2010-02-01",
          },
          "favourite_songs": [
            ObjectId("63dfdd8efccab9b6855ee496"),
            ObjectId("63dfdd8efccab9b6855ee497")
          ],
          "favourite_albums": [
            ObjectId("63dfdc41fccab9b6855ee44b")
          ],
          "favourite_artists": [
            ObjectId("63dfdc67fccab9b6855ee44e")
          ],
          "playlists": [
            ObjectId("63dfdd55fccab9b6855ee47d")
          ]
        }
      ]
)

db.songs.drop()
db.songs.insertMany(
    [
        {
          "_id": ObjectId("63dfdd8efccab9b6855ee48e"),
          "title": "song1",
          "duration": 300,
          "play_count": 100
        },
        {
          "_id": ObjectId("63dfdd8efccab9b6855ee48f"),
          "title": "song2",
          "duration": 300,
          "play_count": 100
        },
        {
          "_id": ObjectId("63dfdd8efccab9b6855ee490"),
          "title": "song3",
          "duration": 250,
          "play_count": 80
        },
        {
          "_id": ObjectId("63dfdd8efccab9b6855ee491"),
          "title": "song4",
          "duration": 250,
          "play_count": 80
        },
        {
          "_id": ObjectId("63dfdd8efccab9b6855ee492"),
          "title": "song5",
          "duration": 285,
          "play_count": 120
        },
        {
          "_id": ObjectId("63dfdd8efccab9b6855ee493"),
          "title": "song6",
          "duration": 285,
          "play_count": 120
        },
        {
          "_id": ObjectId("63dfdd8efccab9b6855ee494"),
          "title": "song7",
          "duration": 280,
          "play_count": 100
        },
        {
          "_id": ObjectId("63dfdd8efccab9b6855ee495"),
          "title": "song8",
          "duration": 280,
          "play_count": 100
        },
        {
          "_id": ObjectId("63dfdd8efccab9b6855ee496"),
          "title": "song9",
          "duration": 310,
          "play_count": 85
        },
        {
          "_id": ObjectId("63dfdd8efccab9b6855ee497"),
          "title": "song10",
          "duration": 290,
          "play_count": 150
        }
      ]
)

db.playlists.drop()
db.playlists.insertMany(
    [
        {
          "_id": ObjectId("63dfdd55fccab9b6855ee479"),
          "title": "lista1",
          "status": "active",
          "songs": [
            {
              "song": ObjectId("63dfdd8efccab9b6855ee48e"),
              "user": ObjectId("63dfde23fccab9b6855ee4a7"),
              "added_date": "2010-01-02"
            },
            {
              "song": ObjectId("63dfdd8efccab9b6855ee48f"),
              "user": ObjectId("63dfde23fccab9b6855ee4a8"),
              "added_date": "2010-01-02"
            }
          ],
          "total_songs": 2,
          "creation_date": "2010-01-02"
        },
        {
          "_id": ObjectId("63dfdd55fccab9b6855ee47a"),
          "title": "lista3",
          "status": "active",
          "songs": [
            {
              "song": ObjectId("63dfdd8efccab9b6855ee492"),
              "user": ObjectId("63dfde23fccab9b6855ee4a8"),
              "added_date": "2010-01-02"
            },
            {
              "song": ObjectId("63dfdd8efccab9b6855ee491"),
              "user": ObjectId("63dfde23fccab9b6855ee4a9"),
              "added_date": "2010-01-02"
            }
          ],
          "total_songs": 2,
          "creation_date": "2010-01-03"
        },
        {
          "_id": ObjectId("63dfdd55fccab9b6855ee47b"),
          "title": "lista4",
          "status": "active",
          "songs": [
            {
              "song": ObjectId("63dfdd8efccab9b6855ee490"),
              "user": ObjectId("63dfde23fccab9b6855ee4a9"),
              "added_date": "2010-01-03"
            },
            {
              "song": ObjectId("63dfdd8efccab9b6855ee493"),
              "user": ObjectId("63dfde23fccab9b6855ee4aa"),
              "added_date": "2010-01-03"
            }
          ],
          "total_songs": 2,
          "creation_date": "2010-01-03"
        },
        {
          "_id": ObjectId("63dfdd55fccab9b6855ee47c"),
          "title": "lista6",
          "status": "active",
          "songs": [
            {
              "song": ObjectId("63dfdd8efccab9b6855ee494"),
              "user": ObjectId("63dfde23fccab9b6855ee4aa"),
              "added_date": "2010-01-03"
            },
            {
              "song": ObjectId("63dfdd8efccab9b6855ee495"),
              "user": ObjectId("63dfde23fccab9b6855ee4ab"),
              "added_date": "2010-01-03"
            }
          ],
          "total_songs": 2,
          "creation_date": "2010-01-03"
        },
        {
          "_id": ObjectId("63dfdd55fccab9b6855ee47d"),
          "title": "lista7",
          "status": "active",
          "songs": [
            {
              "song": ObjectId("63dfdd8efccab9b6855ee494"),
              "user": ObjectId("63dfde23fccab9b6855ee4ab"),
              "added_date": "2010-01-03"
            },
            {
              "song": ObjectId("63dfdd8efccab9b6855ee493"),
              "user": ObjectId("63dfde23fccab9b6855ee4aa"),
              "added_date": "2010-01-03"
            }
          ],
          "total_songs": 2,
          "creation_date": "2010-01-03"
        },
        {
          "_id": ObjectId("63dfdd55fccab9b6855ee47e"),
          "title": "lista2",
          "status": "deleted",
          "delete_date": "2010-01-03",
          "songs": [
            {
              "song": ObjectId("63dfdd8efccab9b6855ee496"),
              "user": ObjectId("63dfde23fccab9b6855ee4a8"),
              "added_date": "2010-01-03"
            },
            {
              "song": ObjectId("63dfdd8efccab9b6855ee497"),
              "user": ObjectId("63dfde23fccab9b6855ee4aa"),
              "added_date": "2010-01-03"
            }
          ],
          "total_songs": 2,
          "creation_date": "2010-01-02"
        },
        {
          "_id": ObjectId("63dfdd55fccab9b6855ee47f"),
          "title": "lista5",
          "status": "deleted",
          "delete_date": "2010-01-03",
          "songs": [
            {
              "song": ObjectId("63dfdd8efccab9b6855ee48f"),
              "user": ObjectId("63dfde23fccab9b6855ee4aa"),
              "added_date": "2010-01-03"
            },
            {
              "song": ObjectId("63dfdd8efccab9b6855ee491"),
              "user": ObjectId("63dfde23fccab9b6855ee4ab"),
              "added_date": "2010-01-03"
            }
          ],
          "total_songs": 2,
          "creation_date": "2010-01-03"
        }
      ]
)

db.album.drop()
db.album.insertMany(
    [
        {
          "_id": ObjectId("63dfdc41fccab9b6855ee447"),
          "title": "album1",
          "cover_image": "'https://photos.bandsintown.com/large/11452180.jpeg'",
          "release_date": "2005-01-01",
          "songs": [
            ObjectId("63dfdd8efccab9b6855ee48e"),
            ObjectId("63dfdd8efccab9b6855ee48f")
          ]
        },
        {
          "_id": ObjectId("63dfdc41fccab9b6855ee448"),
          "title": "album2",
          "cover_image": "'https://i.scdn.co/image/ab67616d0000b2735306ed42ae78f317258c51bb'",
          "release_date": "2005-01-01",
          "songs": [
            ObjectId("63dfdd8efccab9b6855ee490"),
            ObjectId("63dfdd8efccab9b6855ee491")
          ]
        },
        {
          "_id": ObjectId("63dfdc41fccab9b6855ee449"),
          "title": "album3",
          "cover_image": "'https://i.ytimg.com/vi/lDK9QqIzhwk/maxresdefault.jpg'",
          "release_date": "2005-01-01",
          "songs": [
            ObjectId("63dfdd8efccab9b6855ee492"),
            ObjectId("63dfdd8efccab9b6855ee493")
          ]
        },
        {
          "_id": ObjectId("63dfdc41fccab9b6855ee44a"),
          "title": "album4",
          "cover_image": "'https://i.ytimg.com/vi/lDK9QqIzhwk/maxresdefault.jpg'",
          "release_date": "2005-01-01",
          "songs": [
            ObjectId("63dfdd8efccab9b6855ee494"),
            ObjectId("63dfdd8efccab9b6855ee495")
          ]
        },
        {
          "_id": ObjectId("63dfdc41fccab9b6855ee44b"),
          "title": "album5",
          "cover_image": "'https://akamai.sscdn.co/uploadfile/letras/fotos/4/f/b/a/4fbaa172cd99d42cab36e728d3f06a16.jpg'",
          "release_date": "2005-01-01",
          "songs": [
            ObjectId("63dfdd8efccab9b6855ee496"),
            ObjectId("63dfdd8efccab9b6855ee497")
          ]
        }
      ]
)

db.artist.drop()
db.artist.insertMany(
    [
        {
          "_id": ObjectId("63dfdc67fccab9b6855ee44e"),
          "name": "Rhapsody",
          "image": "'https://photos.bandsintown.com/large/11452180.jpeg'",
          "album": [
            ObjectId("63dfdc41fccab9b6855ee447")
          ],
          "style": "style1"
        },
        {
          "_id": ObjectId("63dfdc67fccab9b6855ee44f"),
          "name": "Huey Lewis and the News",
          "image": "'https://i.scdn.co/image/ab67616d0000b2735306ed42ae78f317258c51bb'",
          "album": [
            ObjectId("63dfdc41fccab9b6855ee448")
          ],
          "style": "style2"
        },
        {
          "_id": ObjectId("63dfdc67fccab9b6855ee450"),
          "name": "Bon Jovi",
          "image": "'https://i.ytimg.com/vi/lDK9QqIzhwk/maxresdefault.jpg'",
          "album": [
            ObjectId("63dfdc41fccab9b6855ee449")
          ],
          "style": "style2"
        },
        {
          "_id": ObjectId("63dfdc67fccab9b6855ee451"),
          "name": "Survivor",
          "image": "'https://akamai.sscdn.co/uploadfile/letras/fotos/4/f/b/a/4fbaa172cd99d42cab36e728d3f06a16.jpg'",
          "album": [
            ObjectId("63dfdc41fccab9b6855ee44a"),
            ObjectId("63dfdc41fccab9b6855ee44b")
          ],
          "style": "style1"
        }
      ]
)