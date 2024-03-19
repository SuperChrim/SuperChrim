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

    //302A0000
    "RankDelayA": {
      "addr": "Rx1087B7",
      "code": " \
        07080000 \
        7D 07 \
        33C0 \
        E9 98000000 \
        A1 <Rx1AE618> \
        8B 4008 \
        E9 8B000000 \
        <nop:4> \
      "
    },
    "RankDelayB": {
      "addr": "Rx108861",
      "code": "<nop:10>"
    },

    "SeperateExAttackAndBossAttackCheckA": {
      "addr": "Rx1032A0",
      "code": "83C6 4C"
    },
    "SeperateExAttackAndBossAttackCheckB": {
      "addr": "Rx1032C4",
      "code": " \
        8B35 <Rx1AE4D8> \
        8B7E 4C \
        39F9 \
        0F8F 93000000 \
        0F8C 9D000000 \
        8B35 <Rx1AE49C> \
        8B4E 48 \
        8B35 <Rx1AE4D8> \
        8B7E 48 \
        39F9 \
        7F 77 \
        0F8C 81000000 \
        E9 8A000000 \
      "
    },

    "LaserBounceFix": {
      "addr": "Rx11BA29",
      "code": " \
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
      "code": "0A"
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
      "code": "28"
    },
    "ReimuC2Time2": {
      "addr": "Rx127BA1",
      "code": "9090"
    },

    "AnimalSpiritIdentify": {
      "addr": "Rx29DBA",
      "code": " \
        8B86 CC140000 \
        8945BC \
        8B86 D8140000 \
        83E003 \
        8945C8 \
        F30F1086 78120000 \
        F30F1145 9C \
        F30F1086 7C120000 \
        F30F1145 A0 \
        F30F1086 80120000 \
        B8 <Rx186B8C> \
        8D4D9C \
        51 \
        8B8F D0000000 \
        F30F1145 A4 \
        C745B0 64000000 \
        C745A8 00000000 \
        31D2 \
        8955AC \
      "
    },

    "NerfZanmuCard2A": {
      "addr": "RxD83FF",
      "code": " \
        E9 [codecave:NerfZanmuCard2ACave] CC \
        90 \
      "
    },
    "NerfZanmuCard2B": {
      "addr": "RxD848C",
      "code": " \
        E9 [codecave:NerfZanmuCard2BCave] \
      "
    }
  },

  "codecaves": {
    "NerfZanmuCard2ACave": {
      "code": " \
        0F84 [RxD8429] \
        8B83 94000000 \
        3B41 30 \
        0F8C [RxD8429] \
        E8 [RxA5E0] \
        E9 [RxD8406] \
      "
    },
    "NerfZanmuCard2BCave": {
      "code": "\
        56 \
        8B4DFC \
        8BB1 94000000 \
        3B73 30 \
        5E \
        7C 14 \
        0F1F4000 \
        80BB B5000000 00 \
        74 07 \
        0F1F4000 \
        83C6 04 \
        83C6 2C \
        8B0E \
        E9 [RxD8491] \
      "
    }
  }
}