const express = require("express");
const router = express.Router();
const MongoUtils = require("../db/MongoUtils.js");
var Promise = require("promise");
var fetch = require("node-fetch");
const mu = MongoUtils();

/* GET home page. */

const parseAddress = (address) => {
  /*
  let parts = address.split("#");
  let nums = parts[1].replace(/ /g, "");
  let finalNum = nums.split("-");
  let newAddress = parts[0] + " " + finalNum[0] + finalNum[1];
  console.log("new address", newAddress);
  */
  console.log("new address", address);
  return address;
};

const apikey = "AIzaSyDKUxGQ7i8hmgDjcStvDi2sgoC_BJUmXK4";
router.post("/addStore", function (req, res) {
  let body = req.body;
  let direccion =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    body.address +
    "&key=" +
    apikey;
  body.rating = 5;
  body.nRatings = 1;
  body.comments = [];
  const processData = () => {
    fetch(direccion, {
      method: "POST", // or 'PUT'
      body: {}, // data can be `string` or {object}!
    })
      .then((res) => res.json())
      .then((address) => {
        if (address.results.length > 0) {
          body.position = address.results[0].geometry.location;
          return true;
        } else {
          return false;
        }
      })
      .then((bool) => {
        if (bool) {
          mu.insertBusiness(body);
        } else {
          res.send("No se encontró la direccion");
        }
      })
      .then((doc) => {
        res.send("ok");
      })
      .catch((err) => console.log(err));
  };
  processData();
});

// Data endpoint: retorna un archivo json
router.get("/getRestaurants", function (req, res) {
  //Client side rendering
  mu.connect()
    .then(mu.getRestaurants)
    //for Front side rendering send the html instead of the json file
    .then((restaurants) => res.json(restaurants))
    .catch((err) => console.log(err));
});

router.get("/shop/:id", (req, res) => {
  const id = req.params.id;
  mu.connect()
    .then((client) => mu.getShop(client, id))
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});
router.get("/reservations/:idRest/:fecha", (req, res) => {
  const id = req.params.idRest;
  const fecha = req.params.fecha;
  mu.connect()
    .then((client) => mu.getReserva(client, id, fecha))
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});
router.get("/available/:idRest/:fecha/:nPersonas/:nMax", (req, res) => {
  const id = req.params.idRest;
  const fecha = req.params.fecha;
  const nPersonas = req.params.nPersonas;
  const nMax = req.params.nMax;

  let horas = [
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  let materias = horas;

  const counts = Object.create(null);
  materias.forEach((btn) => {
    counts[btn] = counts[btn] ? counts[btn] + 1 : 0;
  });

  let reservas = [];
  mu.connect()
    .then((client) => mu.getReserva(client, id, fecha))
    .then((user) => {
      reservas = user;
      reservas.forEach((btn) => {
        counts[btn.hora] = counts[btn.hora]
          ? counts[btn.hora]
          : counts[btn.hora] + btn.nPersonas;
      });
      let respu = [];
      horas.forEach((hora) => {
        if (counts[hora] + nPersonas <= nMax) {
          respu.push(hora);
        }
      });
      console.log(respu);
      res.json(respu);
    })

    .catch((err) => console.log(err));
});

router.post("/reservation/:idRes", function (req, res) {
  let body = req.body;
  body.idRes = req.params.idRes;
  //Client side rendering
  mu.connect()
    .then((client) =>
      mu.crearReserva(client, body, (restaurant) => res.json(restaurant))
    )
    .then(res.redirect("/client"))
    //for Front side rendering send the html instead of the json file
    .catch((err) => console.log(err));
});
router.get("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  mu.connect()
    .then((client) => mu.getUser(client, id))
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

router.get("/getUsers", function (req, res) {
  //Client side rendering
  mu.connect()
    .then((client) => mu.getUsers(client, (users) => res.json(users), true))
    //for Front side rendering send the html instead of the json file
    .catch((err) => console.log(err));
});
router.post("/user", function (req, res) {
  let body = req.body;
  //Client side rendering
  mu.connect()
    .then((client) => mu.addUser(client, body, (user) => res.json(user)))
    //for Front side rendering send the html instead of the json file
    .catch((err) => console.log(err));
});

router.post("/restaurant", function (req, res) {
  let body = req.body;
  //Client side rendering
  mu.connect()
    .then((client) =>
      mu.addRestaurant(client, body, (restaurant) => res.json(restaurant))
    )
    //for Front side rendering send the html instead of the json file
    .catch((err) => console.log(err));
});
router.put("/store/:id", function (req, res) {
  var body = req.body;
  const id = req.params.id;

  mu.connect()
    .then((client) => mu.updateShop(client, body, id, (shop) => res.json(shop)))
    .catch((err) => console.log(err));
});

//--------------------------POBLAR----------------------------------------//
function agregarRestaurante(res) {
  let body = res;
  let direccion =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    body.address +
    "&key=" +
    apikey;
  body.rating = 5;
  body.nRatings = 1;
  body.comments = [];
  const processData = () => {
    fetch(direccion, {
      method: "POST", // or 'PUT'
      body: {}, // data can be `string` or {object}!
    })
      .then((res) => res.json())
      .then((address) => {
        if (address.results.length > 0) {
          body.position = address.results[0].geometry.location;
          return true;
        } else {
          return false;
        }
      })
      .then((bool) => {
        if (bool) {
          mu.insertBusiness(body);

          console.log("Ok");
        } else {
          console.log("F");
        }
      })
      .then((doc) => {})
      .catch((err) => console.log(err));
  };
  processData();
}

async function trearRest() {
  mu.connect()
    .then(mu.getRestaurants)
    //for Front side rendering send the html instead of the json file
    .then((restaurants) => generarRes(restaurants))
    .catch((err) => console.log(err));
}

async function generarRes(res) {
  let lista = [];
  lista = res;
  let con = 0;
  const waitFor = (ms) => new Promise((r) => setTimeout(r, ms));

  for (let index = 0; index < 250; index++) {
    for (let j = 0; j < lista.length; j++) {
      let element = lista[j];
      await waitFor(200);
      let fecha = "";
      let d = 160 + Math.floor(Math.random() * 90);
      let m = Math.floor(d / 30);
      let mes = "0" + m;
      let dia = d % 30;
      let diaString = "";
      if (dia == 0) {
        diaString = "01";
      } else if (dia <= 9) {
        diaString = "0" + dia;
      } else {
        diaString = "" + dia;
      }
      fecha = diaString + "-" + mes + "-2020";
      let nPersonas = Math.floor(Math.random() * 9) + 1;
      disponibles(element._id.toString(), fecha, nPersonas, element.nMax);

      console.log(con++);
    }
  }
  console.log("TERMINAMOS");
}
async function disponibles(id, fecha, nPersonas, nMax) {
  let horas = [
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  let materias = horas;

  const counts = Object.create(null);
  materias.forEach((btn) => {
    counts[btn] = counts[btn] ? counts[btn] + 1 : 0;
  });

  let reservas = [];
  mu.connect()
    .then((client) => mu.getReserva(client, id, fecha))
    .then((user) => {
      reservas = user;
      reservas.forEach((btn) => {
        counts[btn.hora] = counts[btn.hora]
          ? counts[btn.hora]
          : counts[btn.hora] + btn.nPersonas;
      });
      let respu = [];
      horas.forEach((hora) => {
        if (counts[hora] + nPersonas <= nMax) {
          respu.push(hora);
        }
      });
      return crearReserva(id, fecha, nPersonas, respu);
    })

    .catch((err) => console.log(err));
}
async function crearReserva(id, fecha, nPersonas, respu) {
  let n = Math.floor(Math.random() * respu.length);

  let body = {
    idRes: id,
    fecha: fecha,
    nPersonas: nPersonas,
    hora: respu[n],
    correo: "pepito" + n + "@gmail.com",
    nombre: "Juan pepito",
    telefono: 3113234,
  };
  //Client side rendering
  return (
    mu
      .connect()
      .then((client) =>
        mu.crearReserva(client, body, (restaurant) => res.json(restaurant))
      )
      .then(console.log("creada"))
      //for Front side rendering send the html instead of the json file
      .catch((err) => console.log(err))
  );
}

module.exports = router;
