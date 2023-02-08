db = db.getSiblingDB("opticaSergi")

db.costumers.drop()
db.costumers.insertMany(
    [
        {
            "_id": ObjectId("63dd3271f52e5c548794f70f"),
            "cp": "53741-5894",
            "mail": "ayla.tremblay@example.com",
            "name": "Randi Nikolaus",
            "telf": "1-042-610-6336x30025"
        }, {
            "_id": ObjectId("63dd3271f52e5c548794f710"),
            "cp": "29401-0449",
            "mail": "morgan72@example.com",
            "name": "Simeon Casper",
            "telf": "01698950758",
            "recommended_by": ObjectId("63dd3271f52e5c548794f70f")

        }, {
            "_id": ObjectId("63dd3271f52e5c548794f711"),
            "cp": "17558",
            "mail": "luettgen.jeramy@example.com",
            "name": "Cicero Little",
            "telf": "(786)590-6425"
        }, {
            "_id": ObjectId("63dd3271f52e5c548794f712"),
            "cp": "45832-5764",
            "name": "Adriel Rolfson",
            "telf": "+10(6)2140101692"
        }, {
            "_id": ObjectId("63dd3271f52e5c548794f713"),
            "cp": "96614-4380",
            "name": "Mrs. Serena Weber V",
            "telf": "073-098-9308"
        }, {
            "_id": ObjectId("63dd3271f52e5c548794f714"),
            "cp": "70397-3538",
            "mail": "declan.spinka@example.com",
            "name": "Ceasar Koch",
            "telf": "049-511-1319x87768",
            "recommended_by": ObjectId("63dd3271f52e5c548794f710")

        }, {
            "_id": ObjectId("63dd3271f52e5c548794f715"),
            "cp": "89369-1855",
            "name": "Miss Reanna Greenfelder",
            "telf": "1-720-003-2950",
            "recommended_by": ObjectId("63dd3271f52e5c548794f711")

        }, {
            "_id": ObjectId("63dd3271f52e5c548794f716"),
            "cp": "29041",
            "name": "Ramon Pouros II",
            "telf": "+70(7)3312321483"
        }, {
            "_id": ObjectId("63dd3271f52e5c548794f717"),
            "cp": "17659",
            "mail": "bednar.oda@example.org",
            "name": "Jewell Hettinger",
            "telf": "02669103636"
        }, {
            "_id": ObjectId("63dd3271f52e5c548794f718"),
            "cp": "59614",
            "mail": "renner.kenya@example.com",
            "name": "Miss Enola Watsica DVM",
            "telf": "1-948-581-2657x81088"
        }, {
            "_id": ObjectId("63dd3271f52e5c548794f719"),
            "cp": "97979-1470",
            "name": "Max Denesik",
            "telf": "481-060-8299x81026"
        }, {
            "_id": ObjectId("63dd3271f52e5c548794f71a"),
            "cp": "53851",
            "name": "Tillman Bradtke",
            "telf": "1-677-367-2849",
            "recommended_by": ObjectId("63dd3271f52e5c548794f712")

        }, {
            "_id": ObjectId("63dd3271f52e5c548794f71b"),
            "cp": "06946-2637",
            "mail": "janick76@example.com",
            "name": "Dr. Sylvan Dicki",
            "telf": "714.427.0601x0104"
        }, {
            "_id": ObjectId("63dd3271f52e5c548794f71c"),
            "cp": "53578-5686",
            "mail": "javonte91@example.org",
            "name": "Vesta Tillman",
            "telf": "(355)763-2645"
        }, {
            "_id": ObjectId("63dd3271f52e5c548794f71d"),
            "cp": "36220",
            "name": "Mr. Darius Emmerich",
            "telf": "1-071-932-1149"
        }, {
            "_id": ObjectId("63dd3271f52e5c548794f71e"),
            "cp": "92893-2623",
            "name": "Fredrick Rempel",
            "telf": "(148)372-4069"
        }, {
            "_id": ObjectId("63dd3271f52e5c548794f71f"),
            "cp": "63366",
            "name": "Albin Gerhold",
            "telf": "(531)739-4839x744"
        }, {
            "_id": ObjectId("63dd3271f52e5c548794f720"),
            "cp": "24014-1546",
            "name": "Ms. Meredith Tillman Jr.",
            "telf": "312-420-6731",
            "recommended_by": ObjectId("63dd3271f52e5c548794f70f")

        }, {
            "_id": ObjectId("63dd3271f52e5c548794f721"),
            "cp": "48364-5142",
            "name": "Coty Jenkins",
            "telf": "1-966-901-2097",
            "recommended_by": ObjectId("63dd3271f52e5c548794f710")

        }, {
            "_id": ObjectId("63dd3271f52e5c548794f722"),
            "cp": "47646",
            "name": "Eden Volkman",
            "telf": "1-408-080-7058",
            "recommended_by": ObjectId("63dd3271f52e5c548794f711")

        }
    ]
),

db.employees.drop()
db.employees.insertMany(
    [
        {
            "_id": ObjectId("63de47534b978dcbe903f32c"),
            "name": "Mrs. Dejah Kutch PhD",
            "sales": 2
        }, {
            "_id": ObjectId("63de47534b978dcbe903f32d"),
            "name": "Birdie Breitenberg",
            "sales": 1
        }, {
            "_id": ObjectId("63de47534b978dcbe903f32e"),
            "name": "Tanya Collins",
            "sales": 1
        }, {
            "_id": ObjectId("63de47534b978dcbe903f32f"),
            "name": "Kelsie Langworth",
            "sales": 1
        }, {
            "_id": ObjectId("63de47534b978dcbe903f330"),
            "name": "Wyman Bruen Jr.",
            "sales": 1
        }
    ]
),


db.providers.drop()
db.providers.insertMany(
    [
        {
            "_id": ObjectId("63de47394b978dcbe903f324"),
            "cp": "36422",
            "fax": "1-133-319-0548",
            "nif": "57854654L",
            "city": "Quitzonmouth",
            "door": "532",
            "name": "Langosh Group",
            "floor": "985",
            "phone": "+49(0)9663860905",
            "number": "0995",
            "street": "Balistreri Landing",
            "country": "China",
            "glass_brands": [
                ObjectId("63de654e74d42a64d7d136ed"),
                ObjectId("63de654e74d42a64d7d136f4"),
                ObjectId("63de654e74d42a64d7d136fb")
            ],
            "glasses": [

                {
                    "_id": ObjectId("63de476f4b978dcbe903f332"),
                    "frame_type": "float",
                    "unit_price": 3.7,
                    "frame_color": "navy",
                    "glass_color": "black",
                    "glass_grad_left": 178.63,
                    "glass_grad_right": 0,
                    "brand": ObjectId("63de654e74d42a64d7d136ed")
                }
            ]
        }, {
            "_id": ObjectId("63de47394b978dcbe903f325"),
            "cp": "6977",
            "fax": "078-081-9213x937",
            "nif": "48795123P",
            "city": "Lorastad",
            "door": "542",
            "name": "Anderson-Kemmer",
            "floor": "442",
            "phone": "895.416.6923x576",
            "number": "12859",
            "street": "Conn Rest",
            "country": "Liechtenstein",
            "glass_brands": [
                ObjectId("63de654e74d42a64d7d136ef"),
                ObjectId("63de654e74d42a64d7d136f5"),
                ObjectId("63de654e74d42a64d7d136fc")
            ],
            "glasses": [
                {
                    "_id": ObjectId("63de476f4b978dcbe903f334"),
                    "frame_type": "metal",
                    "unit_price": 612.87,
                    "frame_color": "lime",
                    "glass_color": "silver",
                    "glass_grad_left": 529.24,
                    "glass_grad_right": 7681395.5,
                    "brand": ObjectId("63de654e74d42a64d7d136ef")
                }
            ]
        }, {
            "_id": ObjectId("63de47394b978dcbe903f326"),
            "cp": "16609",
            "fax": "(556)789-8729",
            "nif": "64569871H",
            "city": "West Budberg",
            "door": "070",
            "name": "Herzog, Torphy and Marvin",
            "floor": "946",
            "phone": "+59(5)7158267391",
            "number": "9222",
            "street": "Leta Roads",
            "country": "Antarctica (the territory South of 60 deg S)",
            "glass_brands": [
                ObjectId("63de654e74d42a64d7d136ee"),
                ObjectId("63de654e74d42a64d7d136f6"),
                ObjectId("63de654e74d42a64d7d136fd"),
                ObjectId("63de654e74d42a64d7d13700")
            ],
            "glasses": [
                {
                    "_id": ObjectId("63de476f4b978dcbe903f333"),
                    "frame_type": "paste",
                    "unit_price": 102.31,
                    "frame_color": "blue",
                    "glass_color": "blue",
                    "glass_grad_left": 785,
                    "glass_grad_right": 91.35,
                    "brand": ObjectId("63de654e74d42a64d7d136ee")
                }
            ]
        }, {
            "_id": ObjectId("63de47394b978dcbe903f327"),
            "cp": "75505",
            "fax": "(008)088-3103x4007",
            "nif": "87319682F",
            "city": "West Electachester",
            "door": "725",
            "name": "Roberts-Schroeder",
            "floor": "659",
            "phone": "(178)515-4217x5043",
            "number": "8844",
            "street": "Romaguera Island",
            "country": "Sao Tome and Principe",
            "glass_brands": [
                ObjectId("63de654e74d42a64d7d136f2"),
                ObjectId("63de654e74d42a64d7d136f7"),
                ObjectId("63de654e74d42a64d7d136fe")
            ],
            "glasses": [
                {
                    "_id": ObjectId("63de476f4b978dcbe903f337"),
                    "frame_type": "metal",
                    "unit_price": 35623.26,
                    "frame_color": "maroon",
                    "glass_color": "silver",
                    "glass_grad_left": 2046878.63,
                    "glass_grad_right": 0,
                    "brand": ObjectId("63de654e74d42a64d7d136f2")
                }
            ]
        }, {
            "_id": ObjectId("63de47394b978dcbe903f328"),
            "cp": "60560",
            "fax": "1-363-893-5906",
            "nif": "68264595N",
            "city": "Ransomtown",
            "door": "811",
            "name": "Heathcote-Connelly",
            "floor": "195",
            "phone": "714-326-5001x40473",
            "number": "90394",
            "street": "Junior Locks",
            "country": "Algeria",
            "glass_brands": [
                ObjectId("63de654e74d42a64d7d136f8"),
                ObjectId("63de654e74d42a64d7d136ff")
            ],
            "glasses": []
        }, {
            "_id": ObjectId("63de47394b978dcbe903f329"),
            "cp": "51115",
            "fax": "1-558-105-4012",
            "nif": "43598713N",
            "city": "Corrinebury",
            "door": "719",
            "name": "Gaylord and Sons",
            "floor": "717",
            "phone": "(616)960-1840",
            "number": "301",
            "street": "Faustino Landing",
            "country": "Tuvalu",
            "glass_brands": [
                ObjectId("63de654e74d42a64d7d136f1"),
                ObjectId("63de654e74d42a64d7d136f9")
            ],
            "glasses": [
                {
                    "_id": ObjectId("63de476f4b978dcbe903f336"),
                    "frame_type": "paste",
                    "unit_price": 332925.54,
                    "frame_color": "aqua",
                    "glass_color": "silver",
                    "glass_grad_left": 67,
                    "glass_grad_right": 3668647.78,
                    "brand": ObjectId("63de654e74d42a64d7d136f1")
                }
            ]
        }, {
            "_id": ObjectId("63de47394b978dcbe903f32a"),
            "cp": "30349",
            "fax": "+61(0)4762344263",
            "nif": "27852147T",
            "city": "Cristfort",
            "door": "386",
            "name": "Kohler Inc",
            "floor": "410",
            "phone": "1-121-035-7817x858",
            "number": "983",
            "street": "Elmira Spring",
            "country": "Brazil",
            "glass_brands": [
                ObjectId("63de654e74d42a64d7d136f0"),
                ObjectId("63de654e74d42a64d7d136f3"),
                ObjectId("63de654e74d42a64d7d136fa")
            ],
            "glasses": [
                {
                    "_id": ObjectId("63de476f4b978dcbe903f335"),
                    "frame_type": "float",
                    "unit_price": 55561,
                    "frame_color": "lime",
                    "glass_color": "maroon",
                    "glass_grad_left": 4712.05,
                    "glass_grad_right": 6970052.48,
                    "brand": ObjectId("63de654e74d42a64d7d136f0")
                }
            ]
        }
    ]
),

db.sales.drop()
db.sales.insertMany(
    [
        {
            "_id": ObjectId("63de478c4b978dcbe903f351"),
            "sale date": "2001-05-21",
            "glasses_id": ObjectId("63de476f4b978dcbe903f332"),
            "costumer_id": ObjectId("63dd3271f52e5c548794f70f"),
            "employee_id": ObjectId("63de47534b978dcbe903f32c")
        }, {
            "_id": ObjectId("63de478c4b978dcbe903f352"),
            "sale date": "2023-01-27",
            "glasses_id": ObjectId("63de476f4b978dcbe903f333"),
            "costumer_id": ObjectId("63dd3271f52e5c548794f710"),
            "employee_id": ObjectId("63de47534b978dcbe903f32d")
        }, {
            "_id": ObjectId("63de478c4b978dcbe903f353"),
            "sale date": "1994-08-15",
            "glasses_id": ObjectId("63de476f4b978dcbe903f334"),
            "costumer_id": ObjectId("63dd3271f52e5c548794f711"),
            "employee_id": ObjectId("63de47534b978dcbe903f32e")
        }, {
            "_id": ObjectId("63de478c4b978dcbe903f354"),
            "sale date": "1979-04-06",
            "glasses_id": ObjectId("63de476f4b978dcbe903f335"),
            "costumer_id": ObjectId("63dd3271f52e5c548794f712"),
            "employee_id": ObjectId("63de47534b978dcbe903f32f")
        }, {
            "_id": ObjectId("63de478c4b978dcbe903f355"),
            "sale date": "1989-06-18",
            "glasses_id": ObjectId("63de476f4b978dcbe903f336"),
            "costumer_id": ObjectId("63dd3271f52e5c548794f713"),
            "employee_id": ObjectId("63de47534b978dcbe903f330")
        }, {
            "_id": ObjectId("63de478c4b978dcbe903f356"),
            "sale date": "1986-04-18",
            "glasses_id": ObjectId("63de476f4b978dcbe903f337"),
            "costumer_id": ObjectId("63dd3271f52e5c548794f714"),
            "employee_id": ObjectId("63de47534b978dcbe903f32c")
        }
    ]
),

db.brands.drop()
db.brands.insertMany(
    [
        {
            "_id": ObjectId("63de654e74d42a64d7d136ed"),
            "name": "rerum"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136ee"),
            "name": "dolor"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136ef"),
            "name": "incidunt"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136f0"),
            "name": "tenetur"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136f1"),
            "name": "soluta"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136f2"),
            "name": "optio"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136f3"),
            "name": "hic"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136f4"),
            "name": "assumenda"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136f5"),
            "name": "illum"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136f6"),
            "name": "exercitationem"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136f7"),
            "name": "iste"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136f8"),
            "name": "in"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136f9"),
            "name": "atque"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136fa"),
            "name": "et"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136fb"),
            "name": "quaerat"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136fc"),
            "name": "eum"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136fd"),
            "name": "ducimus"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136fe"),
            "name": "maxime"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d136ff"),
            "name": "repellat"
        }, {
            "_id": ObjectId("63de654e74d42a64d7d13700"),
            "name": "sint"
        }
    ]
)

