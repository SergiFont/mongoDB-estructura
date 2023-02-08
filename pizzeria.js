db = db.getSiblingDB("pizzeriaSergi")

db.costumers.drop()
db.costumers.insertMany(
    [
        {
            "_id": ObjectId("63de714374d42a64d7d13710"),
            "cp": 8007,
            "city": "Barcelona",
            "phone": "645654897",
            "address": "Calle Avenida Juan Carlos num 25",
            "surname": "Font",
            "province": "Barcelona",
            "first_name": "Juan",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d13711"),
            "cp": 8006,
            "city": "Barcelona",
            "phone": "645654456",
            "address": "Calle Avenida Margarita num 56",
            "surname": "Font",
            "province": "Barcelona",
            "first_name": "Pedro",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d13712"),
            "cp": 8007,
            "city": "Barcelona",
            "phone": "645654897",
            "address": "Calle Marruecos num 23",
            "surname": "Font",
            "province": "Barcelona",
            "first_name": "Julia",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d13713"),
            "cp": 8005,
            "city": "Barcelona",
            "phone": "621654897",
            "address": "Calle Señorita num 56",
            "surname": "Font",
            "province": "Barcelona",
            "first_name": "Marc",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d13714"),
            "cp": 8021,
            "city": "Barcelona",
            "phone": "645654894",
            "address": "Calle Pendiente num 55",
            "surname": "Font",
            "province": "Barcelona",
            "first_name": "Carles",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d13715"),
            "cp": 8022,
            "city": "Barcelona",
            "phone": "645654893",
            "address": "Calle Avenida Pajaro num 45",
            "surname": "Font",
            "province": "Barcelona",
            "first_name": "Jaume",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d13716"),
            "cp": 8023,
            "city": "Barcelona",
            "phone": "645654892",
            "address": "Calle Avenida Cuchara num 35",
            "surname": "Font",
            "province": "Barcelona",
            "first_name": "Ramon",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d13717"),
            "cp": 8024,
            "city": "Barcelona",
            "phone": "645654891",
            "address": "Calle Avenida Raton num 25",
            "surname": "Font",
            "province": "Barcelona",
            "first_name": "Robert",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d13718"),
            "cp": 17005,
            "city": "Girona",
            "phone": "615934957",
            "address": "Avenida Juan Carlos num 2",
            "surname": "Pedralbes",
            "province": "Girona",
            "first_name": "Juan",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d13719"),
            "cp": 17007,
            "city": "Girona",
            "phone": "615934946",
            "address": "Avenida Margarita num 5",
            "surname": "Pedralbes",
            "province": "Girona",
            "first_name": "Pedro",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d1371a"),
            "cp": 17028,
            "city": "Figueres",
            "phone": "615934932",
            "address": "Calle Mispanes num 23",
            "surname": "Pedralbes",
            "province": "Girona",
            "first_name": "Julia",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d1371b"),
            "cp": 17027,
            "city": "Figueres",
            "phone": "615934998",
            "address": "Calle Tukutu num 56",
            "surname": "Pedralbes",
            "province": "Girona",
            "first_name": "Marc",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d1371c"),
            "cp": 25005,
            "city": "Lleida",
            "phone": "615934986",
            "address": "Calle QueKoñazo num 55",
            "surname": "Pedralbes",
            "province": "Lleida",
            "first_name": "Carles",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d1371d"),
            "cp": 25008,
            "city": "Lleida",
            "phone": "615934965",
            "address": "Avenida Pajaro num 4",
            "surname": "Pedralbes",
            "province": "Lleida",
            "first_name": "Jaume",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d1371e"),
            "cp": 25065,
            "city": "Tàrrega",
            "phone": "615934912",
            "address": "Avenida Cuchara num 3",
            "surname": "Pedralbes",
            "province": "Lleida",
            "first_name": "Ramon",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d1371f"),
            "cp": 25070,
            "city": "Tàrrega",
            "phone": "615934921",
            "address": "Avenida Raton num 2",
            "surname": "Pedralbes",
            "province": "Lleida",
            "first_name": "Robert",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d13720"),
            "cp": 43005,
            "city": "Tarragona",
            "phone": "785346915",
            "address": "Callejuela Juan Carlos num 21",
            "surname": "Tulipan",
            "province": "Tarragona",
            "first_name": "Juan",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d13721"),
            "cp": 43005,
            "city": "Tarragona",
            "phone": "785346998",
            "address": "Callejuela Margarita num 51",
            "surname": "Tulipan",
            "province": "Tarragona",
            "first_name": "Pedro",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d13722"),
            "cp": 43096,
            "city": "Reus",
            "phone": "785346976",
            "address": "Callejuela Mispanes num 22",
            "surname": "Tulipan",
            "province": "Tarragona",
            "first_name": "Julia",
        },
        {
            "_id": ObjectId("63de714374d42a64d7d13723"),
            "cp": 43089,
            "city": "Reus",
            "phone": "785346945",
            "address": "Callejuela Tukutu num 59",
            "surname": "Tulipan",
            "province": "Tarragona",
            "first_name": "Marc",
        }
    ]
)

db.employees.drop()
db.employees.insertMany(
    [{
        "_id": ObjectId("63de71dc74d42a64d7d13726"),
        "nif": "32567854C",
        "phone": "645897235",
        "surname": "Rodriguez",
        "first_name": "Carla",
        "employee_type": "chef"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d13727"),
        "nif": "45789812T",
        "phone": "689562354",
        "surname": "Palomo",
        "first_name": "Juan",
        "employee_type": "chef"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d13728"),
        "nif": "47896541S",
        "phone": "621453987",
        "surname": "Garcia",
        "first_name": "Manuel",
        "employee_type": "shipper"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d13729"),
        "nif": "78945612Q",
        "phone": "645897278",
        "surname": "Rodriguez",
        "first_name": "Pepe",
        "employee_type": "shipper"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d1372a"),
        "nif": "32165498P",
        "phone": "645897298",
        "surname": "Rodriguez",
        "first_name": "Carlos",
        "employee_type": "chef"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d1372b"),
        "nif": "45639871L",
        "phone": "645897212",
        "surname": "Rodriguez",
        "first_name": "Marcos",
        "employee_type": "chef"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d1372c"),
        "nif": "58741236K",
        "phone": "645897234",
        "surname": "Rodriguez",
        "first_name": "David",
        "employee_type": "shipper"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d1372d"),
        "nif": "73519546H",
        "phone": "645897223",
        "surname": "Rodriguez",
        "first_name": "Sonia",
        "employee_type": "shipper"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d1372e"),
        "nif": "32567854M",
        "phone": "235897235",
        "surname": "Martinez",
        "first_name": "Carla",
        "employee_type": "chef"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d1372f"),
        "nif": "45789812N",
        "phone": "129562354",
        "surname": "Martinez",
        "first_name": "Juan",
        "employee_type": "shipper"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d13730"),
        "nif": "47896541B",
        "phone": "341453987",
        "surname": "Martinez",
        "first_name": "Manuel",
        "employee_type": "chef"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d13731"),
        "nif": "78945612V",
        "phone": "455897278",
        "surname": "Martinez",
        "first_name": "Pepe",
        "employee_type": "shipper"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d13732"),
        "nif": "32165498C",
        "phone": "565897298",
        "surname": "Martinez",
        "first_name": "Carlos",
        "employee_type": "chef"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d13733"),
        "nif": "45639871X",
        "phone": "675897212",
        "surname": "Martinez",
        "first_name": "Marcos",
        "employee_type": "shipper"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d13734"),
        "nif": "58741236Z",
        "phone": "785897234",
        "surname": "Martinez",
        "first_name": "David",
        "employee_type": "chef"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d13735"),
        "nif": "73519546A",
        "phone": "895897223",
        "surname": "Martinez",
        "first_name": "Sonia",
        "employee_type": "shipper"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d13736"),
        "nif": "58741236S",
        "phone": "905897234",
        "surname": "DeLPozo",
        "first_name": "Juan",
        "employee_type": "chef"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d13737"),
        "nif": "73519546D",
        "phone": "641297223",
        "surname": "DeLPozo",
        "first_name": "Sonia",
        "employee_type": "shipper"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d13738"),
        "nif": "58741236F",
        "phone": "642397234",
        "surname": "DeLPozo",
        "first_name": "David",
        "employee_type": "chef"
    }, {
        "_id": ObjectId("63de71dc74d42a64d7d13739"),
        "nif": "73519546G",
        "phone": "643497223",
        "surname": "DeLPozo",
        "first_name": "Raquel",
        "employee_type": "shipper"
    }]
)

db.orders.drop()
db.orders.insertMany(
    [
        {
          "_id": ObjectId("63de72be74d42a64d7d1379c"),
          "type": "recoger en tienda",
          "order_date": "2022-01-04 18:45:34",
          "costumer": ObjectId("63de714374d42a64d7d13710"),
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137be"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c0"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cd"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137ce"),
              "quantity": 1
            }
          ],
          "total_products": 4,
          "store": ObjectId("63de714374d42a64d7d13710")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d1379d"),
          "type": "domicilio",
          "order_date": "2022-01-04 20:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13711"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13728"),
          "deliver_time": "2022-01-04 20:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c1"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c2"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c7"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cc"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137ce"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cf"),
              "quantity": 1
            }
          ],
          "total_products": 6,
          "store": ObjectId("63de737e74d42a64d7d137d3")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d1379e"),
          "type": "recoger en tienda",
          "order_date": "2022-01-04 21:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13712"),
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c5"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cb"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cd"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137d0"),
              "quantity": 1
            }
          ],
          "total_products": 4,
          "store": ObjectId("63de737e74d42a64d7d137d3")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d1379f"),
          "type": "domicilio",
          "order_date": "2022-01-04 22:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13713"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13729"),
          "deliver_time": "2022-01-04 22:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137bd"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c4"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cc"),
              "quantity": 1
            }
          ],
          "total_products": 3,
          "store": ObjectId("63de737e74d42a64d7d137d3")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137a0"),
          "type": "domicilio",
          "order_date": "2022-01-05 18:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13714"),
          "employee_id": ObjectId("63de71dc74d42a64d7d1372c"),
          "deliver_time": "2022-01-05 18:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137be"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137bf"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c2"),
              "quantity": 2
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cc"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cd"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cf"),
              "quantity": 2
            }
          ],
          "total_products": 8,
          "store": ObjectId("63de737e74d42a64d7d137d4")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137a1"),
          "type": "domicilio",
          "order_date": "2022-01-05 19:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13715"),
          "employee_id": ObjectId("63de71dc74d42a64d7d1372d"),
          "deliver_time": "2022-01-05 19:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c6"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c8"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137ca"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137d0"),
              "quantity": 2
            }
          ],
          "total_products": 5,
          "store": ObjectId("63de737e74d42a64d7d137d4")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137a2"),
          "type": "recoger en tienda",
          "order_date": "2022-01-05 20:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13716"),
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137bd"),
              "quantity": 2
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c9"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cc"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cd"),
              "quantity": 2
            }
          ],
          "total_products": 6,
          "store": ObjectId("63de737e74d42a64d7d137d4")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137a3"),
          "type": "domicilio",
          "order_date": "2022-01-05 21:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13717"),
          "employee_id": ObjectId("63de71dc74d42a64d7d1372d"),
          "deliver_time": "2022-01-05 21:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c3"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c7"),
              "quantity": 2
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cc"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cf"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137d0"),
              "quantity": 1
            }
          ],
          "total_products": 6,
          "store": ObjectId("63de737e74d42a64d7d137d4")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137a4"),
          "type": "domicilio",
          "order_date": "2022-01-05 22:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13718"),
          "employee_id": ObjectId("63de71dc74d42a64d7d1372f"),
          "deliver_time": "2022-01-05 22:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c5"),
              "quantity": 2
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cd"),
              "quantity": 2
            }
          ],
          "total_products": 4,
          "store": ObjectId("63de737e74d42a64d7d137d5")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137a5"),
          "type": "domicilio",
          "order_date": "2022-01-06 17:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13711"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13729"),
          "deliver_time": "2022-01-06 17:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c0"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c2"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cc"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cd"),
              "quantity": 1
            }
          ],
          "total_products": 4,
          "store": ObjectId("63de737e74d42a64d7d137d3")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137a6"),
          "type": "domicilio",
          "order_date": "2022-01-06 18:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13712"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13728"),
          "deliver_time": "2022-01-06 18:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c1"),
              "quantity": 2
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c2"),
              "quantity": 2
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c4"),
              "quantity": 2
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cf"),
              "quantity": 2
            },
            {
              "product": ObjectId("63de733074d42a64d7d137d0"),
              "quantity": 2
            }
          ],
          "total_products": 10,
          "store": ObjectId("63de737e74d42a64d7d137d3")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137a7"),
          "type": "recoger en tienda",
          "order_date": "2022-01-06 19:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13719"),
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c0"),
              "quantity": 2
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c3"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c6"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c8"),
              "quantity": 2
            },
            {
              "product": ObjectId("63de733074d42a64d7d137ca"),
              "quantity": 2
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cc"),
              "quantity": 3
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cd"),
              "quantity": 1
            }
          ],
          "total_products": 12,
          "store": ObjectId("63de737e74d42a64d7d137d5")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137a8"),
          "type": "domicilio",
          "order_date": "2022-01-06 21:35:37",
          "costumer": ObjectId("63de714374d42a64d7d1371a"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13731"),
          "deliver_time": "2022-01-06 21:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137be"),
              "quantity": 8
            }
          ],
          "total_products": 8,
          "store": ObjectId("63de737e74d42a64d7d137d6")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137a9"),
          "type": "domicilio",
          "order_date": "2022-01-06 22:35:37",
          "costumer": ObjectId("63de714374d42a64d7d1371b"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13731"),
          "deliver_time": "2022-01-06 22:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c8"),
              "quantity": 3
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cd"),
              "quantity": 3
            }
          ],
          "total_products": 6,
          "store": ObjectId("63de737e74d42a64d7d137d6")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137aa"),
          "type": "domicilio",
          "order_date": "2022-01-07 19:35:37",
          "costumer": ObjectId("63de714374d42a64d7d1371c"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13733"),
          "deliver_time": "2022-01-07 19:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c1"),
              "quantity": 3
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c5"),
              "quantity": 3
            }
          ],
          "total_products": 6,
          "store": ObjectId("63de737e74d42a64d7d137d7")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137ab"),
          "type": "domicilio",
          "order_date": "2022-01-07 20:35:37",
          "costumer": ObjectId("63de714374d42a64d7d1371d"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13733"),
          "deliver_time": "2022-01-07 20:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137bd"),
              "quantity": 4
            }
          ],
          "total_products": 4,
          "store": ObjectId("63de737e74d42a64d7d137d7")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137ac"),
          "type": "recoger en tienda",
          "order_date": "2022-01-07 21:35:37",
          "costumer": ObjectId("63de714374d42a64d7d1371e"),
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c0"),
              "quantity": 2
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c5"),
              "quantity": 2
            }
          ],
          "total_products": 4,
          "store": ObjectId("63de737e74d42a64d7d137d8")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137ad"),
          "type": "domicilio",
          "order_date": "2022-01-07 22:35:37",
          "costumer": ObjectId("63de714374d42a64d7d1371f"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13735"),
          "deliver_time": "2022-01-07 22:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137bd"),
              "quantity": 3
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c5"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c6"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cd"),
              "quantity": 3
            }
          ],
          "total_products": 8,
          "store": ObjectId("63de737e74d42a64d7d137d8")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137ae"),
          "type": "domicilio",
          "order_date": "2022-01-08 18:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13712"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13729"),
          "deliver_time": "2022-01-08 18:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137be"),
              "quantity": 4
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cc"),
              "quantity": 3
            }
          ],
          "total_products": 7,
          "store": ObjectId("63de737e74d42a64d7d137d3")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137af"),
          "type": "domicilio",
          "order_date": "2022-01-08 19:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13720"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13737"),
          "deliver_time": "2022-01-08 19:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c3"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c5"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cd"),
              "quantity": 1
            }
          ],
          "total_products": 3,
          "store": ObjectId("63de737e74d42a64d7d137d9")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137b0"),
          "type": "domicilio",
          "order_date": "2022-01-08 20:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13721"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13737"),
          "deliver_time": "2022-01-08 20:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c7"),
              "quantity": 2
            }
          ],
          "total_products": 2,
          "store": ObjectId("63de737e74d42a64d7d137d9")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137b1"),
          "type": "domicilio",
          "order_date": "2022-01-08 21:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13722"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13739"),
          "deliver_time": "2022-01-08 21:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137bf"),
              "quantity": 4
            }
          ],
          "total_products": 4,
          "store": ObjectId("63de737e74d42a64d7d137da")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137b2"),
          "type": "recoger en tienda",
          "order_date": "2022-01-08 22:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13723"),
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c8"),
              "quantity": 4
            }
          ],
          "total_products": 4,
          "store": ObjectId("63de737e74d42a64d7d137da")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137b3"),
          "type": "domicilio",
          "order_date": "2022-01-09 18:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13719"),
          "employee_id": ObjectId("63de71dc74d42a64d7d1372f"),
          "deliver_time": "2022-01-09 18:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137bd"),
              "quantity": 3
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cf"),
              "quantity": 5
            }
          ],
          "total_products": 8,
          "store": ObjectId("63de737e74d42a64d7d137d5")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137b4"),
          "type": "domicilio",
          "order_date": "2022-01-09 19:35:37",
          "costumer": ObjectId("63de714374d42a64d7d1371d"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13733"),
          "deliver_time": "2022-01-09 19:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137bf"),
              "quantity": 6
            }
          ],
          "total_products": 6,
          "store": ObjectId("63de737e74d42a64d7d137d7")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137b5"),
          "type": "domicilio",
          "order_date": "2022-01-09 20:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13710"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13728"),
          "deliver_time": "2022-01-09 20:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137cb"),
              "quantity": 4
            }
          ],
          "total_products": 4,
          "store": ObjectId("63de737e74d42a64d7d137d3")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137b6"),
          "type": "domicilio",
          "order_date": "2022-01-09 21:35:37",
          "costumer": ObjectId("63de714374d42a64d7d1371e"),
          "employee_id": ObjectId("63de71dc74d42a64d7d13735"),
          "deliver_time": "2022-01-09 21:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c1"),
              "quantity": 2
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cc"),
              "quantity": 2
            }
          ],
          "total_products": 4,
          "store": ObjectId("63de737e74d42a64d7d137d8")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137b7"),
          "type": "recoger en tienda",
          "order_date": "2022-01-09 22:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13716"),
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137bd"),
              "quantity": 2
            }
          ],
          "total_products": 2,
          "store": ObjectId("63de737e74d42a64d7d137d4")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137b8"),
          "type": "domicilio",
          "order_date": "2022-01-10 20:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13717"),
          "employee_id": ObjectId("63de71dc74d42a64d7d1372c"),
          "deliver_time": "2022-01-10 20:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137cb"),
              "quantity": 6
            },
            {
              "product": ObjectId("63de733074d42a64d7d137d0"),
              "quantity": 4
            }
          ],
          "total_products": 10,
          "store": ObjectId("63de737e74d42a64d7d137d4")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137b9"),
          "type": "domicilio",
          "order_date": "2022-01-10 21:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13718"),
          "employee_id": ObjectId("63de71dc74d42a64d7d1372f"),
          "deliver_time": "2022-01-10 21:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137c4"),
              "quantity": 4
            },
            {
              "product": ObjectId("63de733074d42a64d7d137ca"),
              "quantity": 4
            },
            {
              "product": ObjectId("63de733074d42a64d7d137ce"),
              "quantity": 4
            }
          ],
          "total_products": 12,
          "store": ObjectId("63de737e74d42a64d7d137d5")
        },
        {
          "_id": ObjectId("63de72be74d42a64d7d137ba"),
          "type": "domicilio",
          "order_date": "2022-01-10 22:35:37",
          "costumer": ObjectId("63de714374d42a64d7d13719"),
          "employee_id": ObjectId("63de71dc74d42a64d7d1372f"),
          "deliver_time": "2022-01-10 22:59:37",
          "order_items": [
            {
              "product": ObjectId("63de733074d42a64d7d137bd"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c0"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c5"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137c9"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cc"),
              "quantity": 1
            },
            {
              "product": ObjectId("63de733074d42a64d7d137cd"),
              "quantity": 1
            }
          ],
          "total_products": 6,
          "store": ObjectId("63de737e74d42a64d7d137d5")
        }]
)

db.pizza_categories.drop()
db.pizza_categories.insertMany(
    [{
        "_id": ObjectId("63de73c174d42a64d7d137dd"),
        "name": "básicas"
    }, {
        "_id": ObjectId("63de73c174d42a64d7d137de"),
        "name": "especiales"
    }]
)

db.products.drop()
db.products.insertMany(
    [{
        "_id": ObjectId("63de733074d42a64d7d137bd"),
        "name": "Margarita",
        "image": "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/5802fab5-fdce-468a-a830-43e8001f5a72/Derivates/c00dc34a-e73d-42f0-a86e-e2fd967d33fe.jpg",
        "unit_price": 9.95,
        "description": "Básica",
        "pizza_category": ObjectId("63de73c174d42a64d7d137dd")
    }, {
        "_id": ObjectId("63de733074d42a64d7d137be"),
        "name": "Peperoni",
        "image": "https://essenrezepte.de/wp-content/uploads/2021/08/Pepperoni-Pizza-.jpg",
        "unit_price": 11.5,
        "description": "Bien picantona",
        "pizza_category": ObjectId("63de73c174d42a64d7d137dd")
    }, {
        "_id": ObjectId("63de733074d42a64d7d137bf"),
        "name": "Jamon y Queso",
        "image": "https://donadona.com/630-large_default/pizza-jamon-y-queso.jpg",
        "unit_price": 11.5,
        "description": "Jamon del bueno",
        "pizza_category": ObjectId("63de73c174d42a64d7d137dd")
    }, {
        "_id": ObjectId("63de733074d42a64d7d137c0"),
        "name": "Hawaiana",
        "image": "https://www.recetas360.com/wp-content/uploads/2021/06/como-hacer-la-pizza-hawaiana-receta-500x500.jpg",
        "unit_price": 11.8,
        "description": "Si pides esto pasas a la lista negra",
        "pizza_category": ObjectId("63de73c174d42a64d7d137dd")
    }, {
        "_id": ObjectId("63de733074d42a64d7d137c1"),
        "name": "Champiñones",
        "image": "https://unareceta.com/wp-content/uploads/2014/05/pizza-de-champin%CC%83ones.jpg",
        "unit_price": 12.5,
        "description": "Recién recogidas",
        "pizza_category": ObjectId("63de73c174d42a64d7d137de")
    }, {
        "_id": ObjectId("63de733074d42a64d7d137c2"),
        "name": "Quatro Quesos",
        "image": "https://www.cocinatis.com/archivos/202207/CTIS0093-receta-pizza-cuatro-quesos_B3N6zYV_large_16x9.jpg",
        "unit_price": 12.8,
        "description": "Se te funde en la boca",
        "pizza_category": ObjectId("63de73c174d42a64d7d137de")
    }, {
        "_id": ObjectId("63de733074d42a64d7d137c3"),
        "name": "Jalapeños",
        "image": "http://www.thecomfortofcooking.com/wp-content/uploads/2015/06/PulledPorkJalapenoPineapplePizzawithBaconandCilantro-1.jpg",
        "unit_price": 12.2,
        "description": "Muy picantes",
        "pizza_category": ObjectId("63de73c174d42a64d7d137de")
    }, {
        "_id": ObjectId("63de733074d42a64d7d137c4"),
        "name": "Especial de la casa",
        "image": "https://ais.kochbar.de/kbrezept/547900_1077595/1200x1200/pizza-mit-salami-paprika-und-peperoni-ala-setangi-beach-rezept-bild-nr-4.jpg",
        "unit_price": 14.5,
        "description": "Esta noche como pizza, a la mierda la dieta",
        "pizza_category": ObjectId("63de73c174d42a64d7d137de")
    }, {
        "_id": ObjectId("63de733074d42a64d7d137c5"),
        "name": "Básica",
        "image": "https://ep01.epimg.net/elviajero/imagenes/2017/11/02/actualidad/1509615048_727318_1509617190_noticia_normal.jpg",
        "unit_price": 6.5,
        "description": "Todo lo que necesitas"
    }, {
        "_id": ObjectId("63de733074d42a64d7d137c6"),
        "name": "Quesos",
        "image": "https://cdn.upsocl.com/wp-content/uploads/2019/09/Sin-ti%CC%81tulo-1-1024x555.jpg",
        "unit_price": 8.5,
        "description": "Para fundirse con ella"
    }, {
        "_id": ObjectId("63de733074d42a64d7d137c7"),
        "name": "Doble carne",
        "image": "https://cdn.shopify.com/s/files/1/0323/2405/9275/products/hamburguesa_doble_carne_1024x1024.png?v=1594184497",
        "unit_price": 10.8,
        "description": "Doble sabor"
    }, {
        "_id": ObjectId("63de733074d42a64d7d137c8"),
        "name": "Vegetariana",
        "image": "https://danzadefogones.com/wp-content/uploads/2014/03/Hamburguesa-Vegetariana-via-danzadefogones.com_1.jpg",
        "unit_price": 12.5,
        "description": "Con Eura"
    }, {
        "_id": ObjectId("63de733074d42a64d7d137c9"),
        "name": "Bacon",
        "image": "https://img-global.cpcdn.com/recipes/1f6db317de5ee9a2/1200x630cq70/photo.jpg",
        "unit_price": 8.8,
        "description": "Que mas hay que decir"
    }, {
        "_id": ObjectId("63de733074d42a64d7d137ca"),
        "name": "Especial",
        "image": "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/Stores/b1wzmfncx27vltfmrcl8",
        "unit_price": 11.2,
        "description": "Con carne desmechada"
    }, {
        "_id": ObjectId("63de733074d42a64d7d137cb"),
        "name": "Especial doble",
        "image": "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/Stores/b1wzmfncx27vltfmrcl8",
        "unit_price": 13.5,
        "description": "Sin comentarios"
    }, {
        "_id": ObjectId("63de733074d42a64d7d137cc"),
        "name": "Agua",
        "image": "https://ep01.epimg.net/elviajero/imagenes/2017/11/02/actualidad/1509615048_727318_1509617190_noticia_normal.jpg",
        "unit_price": 1.5
    }, {
        "_id": ObjectId("63de733074d42a64d7d137cd"),
        "name": "Fanta",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Rd_UozPIhsUmm_ExiYeQ2X4RsiDSdK0CCA&usqp=CAU",
        "unit_price": 2.5
    }, {
        "_id": ObjectId("63de733074d42a64d7d137ce"),
        "name": "Coca-Cola",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcUTMI3Q2CJiCUqyrdzfNlFcY5UHqmKz69A&usqp=CAU",
        "unit_price": 2.5
    }, {
        "_id": ObjectId("63de733074d42a64d7d137cf"),
        "name": "Sprite",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwh1uonNecub7ZzYlkNnlQL-5KyeevQS3Rw&usqp=CAU",
        "unit_price": 2.5
    }, {
        "_id": ObjectId("63de733074d42a64d7d137d0"),
        "name": "Nestea",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZgMllz9KLh1zLiEofTiS8aE9AZfbDq0z1Q&usqp=CAU",
        "unit_price": 2.5
    }]
)

db.stores.drop()
db.stores.insertMany(
    [{
        "_id": ObjectId("63de737e74d42a64d7d137d3"),
        "cp": 8007,
        "city": "Barcelona",
        "address": "Calle Margarita num 34",
        "province": "Barcelona",
        "employees": [
            ObjectId("63de71dc74d42a64d7d13726"),
            ObjectId("63de71dc74d42a64d7d13727"),
            ObjectId("63de71dc74d42a64d7d13728"),
            ObjectId("63de71dc74d42a64d7d13729")
        ]
    }, {
        "_id": ObjectId("63de737e74d42a64d7d137d4"),
        "cp": 8030,
        "city": "Barcelona",
        "address": "Calle Pepito num 28",
        "province": "Barcelona",
        "employees": [
            ObjectId("63de71dc74d42a64d7d1372a"),
            ObjectId("63de71dc74d42a64d7d1372b"),
            ObjectId("63de71dc74d42a64d7d1372c"),
            ObjectId("63de71dc74d42a64d7d1372d")
        ]
    }, {
        "_id": ObjectId("63de737e74d42a64d7d137d5"),
        "cp": 17005,
        "city": "Girona",
        "address": "Calle Girona num 29",
        "province": "Girona",
        "employees": [
            ObjectId("63de71dc74d42a64d7d1372e"),
            ObjectId("63de71dc74d42a64d7d1372f")
        ]
    }, {
        "_id": ObjectId("63de737e74d42a64d7d137d6"),
        "cp": 17028,
        "city": "Figueres",
        "address": "Calle Figueres num 56",
        "province": "Girona",
        "employees": [
            ObjectId("63de71dc74d42a64d7d13730"),
            ObjectId("63de71dc74d42a64d7d13731")
        ]
    }, {
        "_id": ObjectId("63de737e74d42a64d7d137d7"),
        "cp": 25005,
        "city": "Lleida",
        "address": "Calle Lleida num 78",
        "province": "Lleida",
        "employees": [
            ObjectId("63de71dc74d42a64d7d13732"),
            ObjectId("63de71dc74d42a64d7d13733")
        ]
    }, {
        "_id": ObjectId("63de737e74d42a64d7d137d8"),
        "cp": 25060,
        "city": "Tàrrega",
        "address": "Calle Girona num 190",
        "province": "Lleida",
        "employees": [
            ObjectId("63de71dc74d42a64d7d13734"),
            ObjectId("63de71dc74d42a64d7d13735")
        ]
    }, {
        "_id": ObjectId("63de737e74d42a64d7d137d9"),
        "cp": 43005,
        "city": "Tarragona",
        "address": "Calle Tarragona num 02",
        "province": "Tarragona",
        "employees": [
            ObjectId("63de71dc74d42a64d7d13736"),
            ObjectId("63de71dc74d42a64d7d13737")
        ]
    }, {
        "_id": ObjectId("63de737e74d42a64d7d137da"),
        "cp": 43090,
        "city": "Reus",
        "address": "Calle Reus num 19",
        "province": "Tarragona",
        "employees": [
            ObjectId("63de71dc74d42a64d7d13738"),
            ObjectId("63de71dc74d42a64d7d13739")
        ]
    }]
)