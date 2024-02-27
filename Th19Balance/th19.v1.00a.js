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
    "YachieCancelDamage": {
      "addr": "Rx1F443",
      "code": "08"
    },
    "YachieC2Range": {
      "addr": "Rx1F3D5",
      "code": "1E"
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
      "code": "9643"
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
    "YuumaNoCancel": {
      "addr": "Rx21E84",
      "code": "90909090"
    },

    "ZanmuC2A": {
      "addr": "Rx299BF",
      "code": "A001" //5A00
    },
    "ZanmuC2B": {
      "addr": "Rx299C9",
      "code": "06" //04
    },
    "ZanmuC2C": {
      "addr": "Rx299D5",
      "code": "803F"
    },
    "ZanmuC2D": {
      "addr": "Rx299DF",
      "code": "A043"
    },
    "ZanmuC2E": {
      "addr": "Rx299E9",
      "code": "803F"
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
      "addr": "RxD7E97",
      "code": "\
        8B49 2C \
        80B9 B5000000 00 \
        7428 \
        E8 [RxA5E0] \
        8B8B CC000000 \
        8BF0 \
        8B49 2C \
        E8 [RxA5A0] \
        39C6 \
        7D0F \
        51 \
        8B8B CC000000 \
        8B49 2C \
        E8 [Rx124240] \
        8B8B CC000000 \
        8B41 38 \
        8B48 18 \
        8B01 \
        8B40 24 \
        FFD0 \
        84 C0 \
        0F85 82040000 \
      "
    },
    "NerfZanmuCard2C": {
      "addr": "RxD8356",
      "code": "\
        8B51 2C \
        8B42 2C \
        31C9 \
        85C0 \
        0F48C1 \
        8942 2C \
        EB19 \
        8B8B CC000000 \
        8B49 2C \
        8B91 B5000000 \
        85D2 \
        74 16 \
        8B4930 \
        51 \
        EB10 \
        3983 94000000 \
        <nop:4> \
      "
    },
    "NerfZanmuCard2D": {
      "addr": "RxD83F8",
      "code": "\
        EB2F \
        <nop:5> \
      "
    },
    "NerfZanmuCard2E": {
      "addr": "RxD8489",
      "code": "\
        8BC5 \
        29E0 \
        3D 88000000 \
        7403 \
        58 \
        EB0F \
        8B46 2C \
        <nop:12> \
      "
    }
  }
}