{
  "binhacks": {
    "BulletCap": {
      "addr": "RxE5B54",
      "code": "B004"
    },
      "LaserCap": {
      "addr": "Rx11DBA9",
      "code": "9600"
    },

  "LaserBounceFix": {
    "addr": "Rx11BA29",
    "code": "\
      D947 7C \
      D947 78 \
      D9FB \
      D8CA \
      D95D E8 \
      DEC9 \
      D95D EC \
      F20F104D E8 \
      F20F1047 60 \
      0F58C8 \
      0F114D E8 \
      0F28C1 \
      0FC6C0 55 \
      <nop:50> \
      90 \
      F30F1015 <Rx1878D8> \
      0F2FD1 \
      "
    },
    "YachieLaserCancelA": {
      "addr": "Rx116F6A",
      "code": "90909090"
    },
    "YachieLaserCancelB": {
      "addr": "Rx1197BA",
      "code": "90909090"
    },

    "NazrinScopeSpeedIncrease": {
      "addr": "Rx188D6",
      "code": "BB"
    },

    "YuumaC2A": {
      "addr": "Rx21BA4",
      "code": "A0C2"
    },
    "YuumaC2B": {
      "addr": "Rx21BAE",
      "code": "C843"
    },
    "YuumaC2C": {
      "addr": "Rx21BB8",
      "code": "A0C2"
    },
    "YuumaC1TimeOffset": {
      "addr": "Rx21A56",
      "code": "11"
    },
    "YuumaC2EndTime": {
      "addr": "Rx21DF5",
      "code": "50"
    },
    "YuumaExTimeCap": {
      "addr": "Rx21F07",
      "code": "1B"
    },

    "ZanmuC2Speed": {
      "addr": "Rx299BF",
      "code": "D0"
    },
    "ZanmuC2Range": {
      "addr": "Rx299C9",
      "code": "00"
    },

    "ReimuC2Range": {
      "addr": "Rx127C2F",
      "code": "9A"
    },
    "ReimuC2Time1": {
      "addr": "Rx127D97",
      "code": "36"
    },
    "ReimuC2Time2": {
      "addr": "Rx127BA1",
      "code": "9090"
    },

    "AnimalSpiritIdentify": {
      "addr": "Rx29DC5",
      "code": "\
        F20F1086 78120000 \
        C1E8 1B \
        A8 01 \
        F20F1145 9C \
        8B96 D8140000 \
        B8 <Rx186B98> \
        0F45C1 \
        83E2 03 \
        8955 C8 \
        90 \
      "
    },

    "NerfZanmuCard2A": {
      "addr": "RxD7E57",
      "code": "\
        8B50 2C \
        8B42 30 \
        31C9 \
        85C0 \
        0F48C1 \
        BE C4090000 \
        39F0 \
        0F4FC6 \
        8942 30 \
        BE FFFFFFFF \
        <nop:15> \
      "
    },
    "NerfZanmuCard2B": {
      "addr": "RxD8359",
      "code": "\
        8B46 2C \
        31C9 \
        85C0 \
        0F48C1 \
        BA C4090000 \
        39D0 \
        0F4FC2 \
        8946 2C \
        31F6 \
        90<nop:18> \
      "
    },
    "NerfZanmuCard2C": {
      "addr": "RxD83F8",
      "code": "\
        96 \
        8481 B5000000 \
      "
    }
  }
}