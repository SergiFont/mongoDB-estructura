db = db.getSiblingDB("youtubeSergi")

db.channels.drop()
db.channels.insertMany(
    [
        {
            "_id": ObjectId("63dfbe4ec083fa453f2ffc26"),
            "name": "paridas",
            "user_id": ObjectId("63dfbcc0c083fa453f2ffbb3"),
            "description": "cosas random",
            "creation_date": "2010-03-19 22:15:00",
            "videos": [
                ObjectId("63dfbe12c083fa453f2ffc19"),
                ObjectId("63dfbe12c083fa453f2ffc21")
            ],
            "subscribers": [
                ObjectId("63dfbcc0c083fa453f2ffbb5"),
                ObjectId("63dfbcc0c083fa453f2ffbb7")
            ]
        },
        {
            "_id": ObjectId("63dfbe4ec083fa453f2ffc27"),
            "name": "cocina con Juan",
            "user_id": ObjectId("63dfbcc0c083fa453f2ffbb4"),
            "description": "recetas muy buenas",
            "creation_date": "2010-03-19 22:15:00",
            "videos": [
                ObjectId("63dfbe12c083fa453f2ffc1a"),
                ObjectId("63dfbe12c083fa453f2ffc22")
            ],
            "subscribers": [
                ObjectId("63dfbcc0c083fa453f2ffbb5"),
                ObjectId("63dfbcc0c083fa453f2ffbb7"),
                ObjectId("63dfbcc0c083fa453f2ffbb8")
            ]
        },
        {
            "_id": ObjectId("63dfbe4ec083fa453f2ffc28"),
            "name": "el rincón de Begoña",
            "user_id": ObjectId("63dfbcc0c083fa453f2ffbb5"),
            "description": "debates sobre la vida",
            "creation_date": "2010-03-19 22:15:00",
            "videos": [
                ObjectId("63dfbe12c083fa453f2ffc1b"),
                ObjectId("63dfbe12c083fa453f2ffc23")
            ],
            "subscribers": [
                ObjectId("63dfbcc0c083fa453f2ffbb9"),
                ObjectId("63dfbcc0c083fa453f2ffbba")
            ]
        },
        {
            "_id": ObjectId("63dfbe4ec083fa453f2ffc29"),
            "name": "CarlaC",
            "user_id": ObjectId("63dfbcc0c083fa453f2ffbb6"),
            "description": "consejos útiles sobre la vida",
            "creation_date": "2010-03-19 22:15:00",
            "videos": [
                ObjectId("63dfbe12c083fa453f2ffc1c")
            ],
            "subscribers": [
                ObjectId("63dfbcc0c083fa453f2ffbb4"),
                ObjectId("63dfbcc0c083fa453f2ffbb3")
            ]
        },
        {
            "_id": ObjectId("63dfbe4ec083fa453f2ffc2a"),
            "name": "Mecánica con Pablo",
            "user_id": ObjectId("63dfbcc0c083fa453f2ffbb7"),
            "description": "tips sobre mecánica de coches",
            "creation_date": "2010-03-19 22:15:00",
            "videos": [
                ObjectId("63dfbe12c083fa453f2ffc1d")
            ],
            "subscribers": [
                ObjectId("63dfbcc0c083fa453f2ffbb6"),
                ObjectId("63dfbcc0c083fa453f2ffbba")
            ]
        },
        {
            "_id": ObjectId("63dfbe4ec083fa453f2ffc2b"),
            "name": "Cocina Channel",
            "user_id": ObjectId("63dfbcc0c083fa453f2ffbb8"),
            "description": "Aprende a cocinar conmigo",
            "creation_date": "2010-03-19 22:15:00",
            "videos": [
                ObjectId("63dfbe12c083fa453f2ffc1e")
            ],
            "subscribers": [
                ObjectId("63dfbcc0c083fa453f2ffbb6"),
                ObjectId("63dfbcc0c083fa453f2ffbb3")
            ]
        },
        {
            "_id": ObjectId("63dfbe4ec083fa453f2ffc2c"),
            "name": "las aventuras de Pepe",
            "user_id": ObjectId("63dfbcc0c083fa453f2ffbb9"),
            "description": "sigueme explorando el mundo",
            "creation_date": "2010-03-19 22:15:00",
            "videos": [
                ObjectId("63dfbe12c083fa453f2ffc1f")
            ],
            "subscribers": [
                ObjectId("63dfbcc0c083fa453f2ffbb4"),
                ObjectId("63dfbcc0c083fa453f2ffbb8")
            ]
        },
        {
            "_id": ObjectId("63dfbe4ec083fa453f2ffc2d"),
            "name": "Carnet a la primera",
            "user_id": ObjectId("63dfbcc0c083fa453f2ffbba"),
            "description": "tips para sacarte el carnet de conducir",
            "creation_date": "2010-03-19 22:15:00",
            "videos": [
                ObjectId("63dfbe12c083fa453f2ffc20")
            ],
            "subscribers": [
                ObjectId("63dfbcc0c083fa453f2ffbb9")
            ]
        }
    ]
)

db.comentaries.drop()
db.comentaries.insertMany(
    [
        {
            "_id": ObjectId("63dfbd29c083fa453f2ffbbd"),
            "date": "2021-01-01 00:00:00",
            "text": "comentario1",
            "like": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb8"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "dislike": []
        },
        {
            "_id": ObjectId("63dfbd29c083fa453f2ffbbe"),
            "date": "2021-01-01 00:00:00",
            "text": "comentario2",
            "like": [],
            "dislike": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb7"),
                    "date": "2010-09-25 16:45:54"
                }
            ]
        },
        {
            "_id": ObjectId("63dfbd29c083fa453f2ffbbf"),
            "date": "2021-01-01 00:00:00",
            "text": "comentario3",
            "like": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb6"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "dislike": []
        },
        {
            "_id": ObjectId("63dfbd29c083fa453f2ffbc0"),
            "date": "2021-01-01 00:00:00",
            "text": "comentario4",
            "like": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb5"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "dislike": []
        },
        {
            "_id": ObjectId("63dfbd29c083fa453f2ffbc1"),
            "date": "2021-01-01 00:00:00",
            "text": "comentario5",
            "like": [],
            "dislike": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb4"),
                    "date": "2010-09-25 16:45:54"
                }
            ]
        }
    ]
)

db.labels.drop()
db.labels.insertMany(
    [
        {
            "_id": ObjectId("63dfbd49c083fa453f2ffbc4"),
            "name": "comedia",
        },
        {
            "_id": ObjectId("63dfbd49c083fa453f2ffbc5"),
            "name": "cocina",
        },
        {
            "_id": ObjectId("63dfbd49c083fa453f2ffbc6"),
            "name": "mecánica",
        },
        {
            "_id": ObjectId("63dfbd49c083fa453f2ffbc7"),
            "name": "vida",
        },
        {
            "_id": ObjectId("63dfbd49c083fa453f2ffbc8"),
            "name": "naturaleza",
        },
        {
            "_id": ObjectId("63dfbd49c083fa453f2ffbc9"),
            "name": "coche",
        }
    ]
)

db.playlists.drop()
db.playlists.insertMany(
    [
        {
            "_id": ObjectId("63dfbdc7c083fa453f2ffbf3"),
            "name": "lista1",
            "state": "public",
            "user": ObjectId("63dfbcc0c083fa453f2ffbb3"),
            "videos": [
                ObjectId("63dfbe12c083fa453f2ffc1b"),
                ObjectId("63dfbe12c083fa453f2ffc1c")
            ]
        },
        {
            "_id": ObjectId("63dfbdc7c083fa453f2ffbf4"),
            "name": "lista2",
            "state": "private",
            "user": ObjectId("63dfbcc0c083fa453f2ffbb4"),
            "videos": [
                ObjectId("63dfbe12c083fa453f2ffc1d"),
                ObjectId("63dfbe12c083fa453f2ffc1e")
            ]
        }
    ]
)

db.users.drop()
db.users.insertMany(
    [
        {
            "_id": ObjectId("63dfbcc0c083fa453f2ffbb3"),
            "cp": "08025",
            "email": "roberto@mail.com",
            "gender": "male",
            "country": "spain",
            "password": "123456",
            "user_name": "robertoVideos",
            "birth_date": "1990-04-25"
        },
        {
            "_id": ObjectId("63dfbcc0c083fa453f2ffbb4"),
            "cp": "08029",
            "email": "juan@mail.com",
            "gender": "male",
            "country": "spain",
            "password": "123456",
            "user_name": "juanPalomo",
            "birth_date": "1992-05-23"
        },
        {
            "_id": ObjectId("63dfbcc0c083fa453f2ffbb5"),
            "cp": "08039",
            "email": "maria@mail.com",
            "gender": "female",
            "country": "spain",
            "password": "123456",
            "user_name": "mariaBegoña",
            "birth_date": "1991-10-21"
        },
        {
            "_id": ObjectId("63dfbcc0c083fa453f2ffbb6"),
            "cp": "08049",
            "email": "carla@mail.com",
            "gender": "female",
            "country": "spain",
            "password": "123456",
            "user_name": "carlaCristiana",
            "birth_date": "1996-04-22"
        },
        {
            "_id": ObjectId("63dfbcc0c083fa453f2ffbb7"),
            "cp": "08001",
            "email": "pablo@mail.com",
            "gender": "male",
            "country": "spain",
            "password": "123456",
            "user_name": "pabloCortes",
            "birth_date": "1990-12-21"
        },
        {
            "_id": ObjectId("63dfbcc0c083fa453f2ffbb8"),
            "cp": "08022",
            "email": "cocina@mail.com",
            "gender": "male",
            "country": "spain",
            "password": "123456",
            "user_name": "cocinaManuel",
            "birth_date": "1999-02-28"
        },
        {
            "_id": ObjectId("63dfbcc0c083fa453f2ffbb9"),
            "cp": "08015",
            "email": "aventureros@mail.com",
            "gender": "female",
            "country": "spain",
            "password": "123456",
            "user_name": "aventurerosPepe",
            "birth_date": "1993-04-15"
        },
        {
            "_id": ObjectId("63dfbcc0c083fa453f2ffbba"),
            "cp": "08009",
            "email": "conduccion@mail.com",
            "gender": "male",
            "country": "spain",
            "password": "123456",
            "user_name": "conduccionAlex",
            "birth_date": "1996-04-02"
        }
    ]
)

db.videos.drop()
db.videos.insertMany(
    [
        {
            "_id": ObjectId("63dfbe12c083fa453f2ffc19"),
            "size": "100MB",
            "title": "Bromas",
            "status": "public",
            "file_name": "bromas.mp4",
            "thumbnail": "'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png'",
            "description": "todo tipo de bromas",
            "likes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb4"),
                    "date": "2010-09-25 16:45:54"
                },
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb5"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "likes_count": 2,
            "dislikes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb6"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "dislikes_count": 1,
            "published_date": "2010-09-25 16:45:54",
            "video_duration": "00:08:45",
            "reproduction_count": 80,
            "label": [
                ObjectId("63dfbd49c083fa453f2ffbc4")
            ],
            "comentaries": []
        },
        {
            "_id": ObjectId("63dfbe12c083fa453f2ffc1a"),
            "size": "100MB",
            "title": "receta",
            "status": "public",
            "file_name": "receta.mp4",
            "thumbnail": "'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png'",
            "description": "receta básica",
            "likes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb3"),
                    "date": "2010-09-25 16:45:54"
                },
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb7"),
                    "date": "2010-09-25 16:45:54"
                },
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb8"),
                    "date": "2010-09-25 16:45:54"
                },
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb9"),
                    "date": "2010-09-25 16:45:54"
                },
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbba"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "likes_count": 5,
            "dislikes": [
                {}
            ],
            "dislikes_count": 0,
            "published_date": "2010-09-25 16:45:54",
            "video_duration": "00:08:45",
            "reproduction_count": 100,
            "label": [
                ObjectId("63dfbd49c083fa453f2ffbc5"),
                ObjectId("63dfbd49c083fa453f2ffbc7")
            ],
            "comentaries": [
                {
                    "users": ObjectId("63dfbcc0c083fa453f2ffbb3"),
                    "comentary": ObjectId("63dfbd29c083fa453f2ffbbd")
                }
            ]
        },
        {
            "_id": ObjectId("63dfbe12c083fa453f2ffc1b"),
            "size": "100MB",
            "title": "charla",
            "status": "public",
            "file_name": "charla.mp4",
            "thumbnail": "'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png'",
            "description": "de todo un poco",
            "likes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb3"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "likes_count": 1,
            "dislikes": [
                {}
            ],
            "dislikes_count": 0,
            "published_date": "2010-09-25 16:45:54",
            "video_duration": "00:08:45",
            "reproduction_count": 50,
            "label": [
                ObjectId("63dfbd49c083fa453f2ffbc7")
            ],
            "comentaries": [
                {
                    "users": ObjectId("63dfbcc0c083fa453f2ffbb4"),
                    "comentary": ObjectId("63dfbd29c083fa453f2ffbbe")
                }
            ]
        },
        {
            "_id": ObjectId("63dfbe12c083fa453f2ffc1c"),
            "size": "100MB",
            "title": "consejos",
            "status": "public",
            "file_name": "consejos.mp4",
            "thumbnail": "'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png'",
            "description": "de varios tipos",
            "likes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb3"),
                    "date": "2010-09-25 16:45:54"
                },
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb4"),
                    "date": "2010-09-25 16:45:54"
                },
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb5"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "likes_count": 3,
            "dislikes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb8"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "dislikes_count": 1,
            "published_date": "2010-09-25 16:45:54",
            "video_duration": "00:08:45",
            "reproduction_count": 80,
            "label": [
                ObjectId("63dfbd49c083fa453f2ffbc7")
            ],
            "comentaries": [
                {
                    "users": ObjectId("63dfbcc0c083fa453f2ffbb5"),
                    "comentary": ObjectId("63dfbd29c083fa453f2ffbbf")
                }
            ]
        },
        {
            "_id": ObjectId("63dfbe12c083fa453f2ffc1d"),
            "size": "100MB",
            "title": "mecánica",
            "status": "public",
            "file_name": "mecanica.mp4",
            "thumbnail": "'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png'",
            "description": "desmontando un coche",
            "likes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb3"),
                    "date": "2010-09-25 16:45:54"
                },
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb4"),
                    "date": "2010-09-25 16:45:54"
                },
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb5"),
                    "date": "2010-09-25 16:45:54"
                },
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb6"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "likes_count": 4,
            "dislikes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb8"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "dislikes_count": 1,
            "published_date": "2010-09-25 16:45:54",
            "video_duration": "00:08:45",
            "reproduction_count": 20,
            "label": [
                ObjectId("63dfbd49c083fa453f2ffbc6"),
                ObjectId("63dfbd49c083fa453f2ffbc9")
            ],
            "comentaries": [
                {
                    "users": ObjectId("63dfbcc0c083fa453f2ffbb6"),
                    "comentary": ObjectId("63dfbd29c083fa453f2ffbc0")
                }
            ]
        },
        {
            "_id": ObjectId("63dfbe12c083fa453f2ffc1e"),
            "size": "100MB",
            "title": "cena de hoy",
            "status": "public",
            "file_name": "cocina.mp4",
            "thumbnail": "'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png'",
            "description": "con postre incluido",
            "likes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb9"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "likes_count": 1,
            "dislikes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbba"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "dislikes_count": 1,
            "published_date": "2010-09-25 16:45:54",
            "video_duration": "00:08:45",
            "reproduction_count": 40,
            "label": [
                ObjectId("63dfbd49c083fa453f2ffbc5"),
                ObjectId("63dfbd49c083fa453f2ffbc7")
            ],
            "comentaries": [
                {
                    "users": ObjectId("63dfbd29c083fa453f2ffbc1"),
                    "comentary": ObjectId("63dfbcc0c083fa453f2ffbb7")
                }
            ]
        },
        {
            "_id": ObjectId("63dfbe12c083fa453f2ffc1f"),
            "size": "100MB",
            "title": "excursión",
            "status": "private",
            "file_name": "excursion.mp4",
            "thumbnail": "'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png'",
            "description": "toda una aventura",
            "likes": [
                {}
            ],
            "likes_count": 0,
            "dislikes": [
                {}
            ],
            "dislikes_count": 0,
            "published_date": "2010-09-25 16:45:54",
            "video_duration": "00:08:45",
            "reproduction_count": 80,
            "label": [
                ObjectId("63dfbd49c083fa453f2ffbc8")
            ],
            "comentaries": []
        },
        {
            "_id": ObjectId("63dfbe12c083fa453f2ffc20"),
            "size": "100MB",
            "title": "exámen teórico",
            "status": "private",
            "file_name": "examen.mp4",
            "thumbnail": "'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png'",
            "description": "sencillito",
            "likes": [
                {}
            ],
            "likes_count": 0,
            "dislikes": [
                {}
            ],
            "dislikes_count": 0,
            "published_date": "2010-09-25 16:45:54",
            "video_duration": "00:08:45",
            "reproduction_count": 60,
            "label": [
                ObjectId("63dfbd49c083fa453f2ffbc9")
            ],
            "comentaries": []
        },
        {
            "_id": ObjectId("63dfbe12c083fa453f2ffc21"),
            "size": "100MB",
            "title": "Bromas2",
            "status": "hidden",
            "file_name": "bromas2.mp4",
            "thumbnail": "'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png'",
            "description": "sale mal",
            "likes": [
                {}
            ],
            "likes_count": 0,
            "dislikes": [
                {}
            ],
            "dislikes_count": 0,
            "published_date": "2010-09-25 16:45:54",
            "video_duration": "00:08:45",
            "reproduction_count": 80,
            "label": [
                ObjectId("63dfbd49c083fa453f2ffbc4")
            ],
            "comentaries": []
        },
        {
            "_id": ObjectId("63dfbe12c083fa453f2ffc22"),
            "size": "100MB",
            "title": "receta2",
            "status": "public",
            "file_name": "receta2.mp4",
            "thumbnail": "'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png'",
            "description": "receta avanzada",
            "likes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbba"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "likes_count": 1,
            "dislikes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb9"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "dislikes_count": 1,
            "published_date": "2010-09-25 16:45:54",
            "video_duration": "00:08:45",
            "reproduction_count": 90,
            "label": [
                ObjectId("63dfbd49c083fa453f2ffbc5"),
                ObjectId("63dfbd49c083fa453f2ffbc7")
            ],
            "comentaries": []
        },
        {
            "_id": ObjectId("63dfbe12c083fa453f2ffc23"),
            "size": "100MB",
            "title": "charla2",
            "status": "public",
            "file_name": "charla2.mp4",
            "thumbnail": "'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png'",
            "description": "futuro del canal",
            "likes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbba"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "likes_count": 1,
            "dislikes": [
                {
                    "user": ObjectId("63dfbcc0c083fa453f2ffbb9"),
                    "date": "2010-09-25 16:45:54"
                }
            ],
            "dislikes_count": 1,
            "published_date": "2010-09-25 16:45:54",
            "video_duration": "00:08:45",
            "reproduction_count": 80,
            "label": [
                ObjectId("63dfbd49c083fa453f2ffbc7")
            ],
            "comentaries": []
        }
    ]
)