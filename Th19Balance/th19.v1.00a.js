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

    "ReimuC2NoC1": {
      "addr": "Rx127675",
      "code": "\
        E9 [codecave:ReimuC2NoC1Cave] \
        90 \
      "
    },
    "ReimuC2ShootAndChargeDelayA": {
      "addr": "Rx1276D8",
      "code": "\
        E9 [codecave:ReimuC2ShootAndChargeDelayACave] \
        90 \
      "
    },
    "ReimuC2ShootAndChargeDelayB": {
        "addr": "Rx185D60",
        "code": "<codecave:ReimuC2ShootAndChargeDelayBCave>"
    },
    "ReimuC2Range": {
      "addr": "Rx127BA1",
      "code": "0F8D 06010000 \
        8D7D D8 \
        BB 03000000 \
        90 \
      "
    },
    "ReimuC2Time": {
      "addr": "Rx127D97",
      "code": "32"
    },

    "NazrinScopeSpeedIncrease": {
      "addr": "Rx188D6",
      "code": "BE"
    },
    "NazrinBombDmg": {
      "addr": "Rx12C681",
      "code": "28"
    },

    "YachieCancelDamage": {
      "addr": "Rx1F443",
      "code": "0A"
    },
    "YachieC2Range": {
      "addr": "Rx1F3D5",
      "code": "22"
    },

    "ToutetsuScopeTime": {
      "addr": "Rx21368",
      "code": "20030000"
    },
    "ToutetsuC2A": {
      "addr": "Rx21BA4",
      "code": "A0C2"
    },
    "ToutetsuC2B": {
      "addr": "Rx21BAE",
      "code": "9643"
    },
    "ToutetsuC2C": {
      "addr": "Rx21BB8",
      "code": "A0C2"
    },
    "ToutetsuC1TimeOffset": {
      "addr": "Rx21A56",
      "code": "11"
    },
    "ToutetsuC2EndTime": {
      "addr": "Rx21DF5",
      "code": "50"
    },
    "ToutetsuC2Dmg": {
      "addr": "Rx21E4C",
      "code": "2D"
    },
    "ToutetsuExTimeCap": {
      "addr": "Rx21F07",
      "code": "1B"
    },
    "ToutetsuNoCancel": {
      "addr": "Rx21E84",
      "code": "90909090"
    },

    "CiyariScopeDmg": {
      "addr": "Rx26D03",
      "code": "06"
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

    "NerfZanmuCard2B": {
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
    "ReimuC2NoC1Cave": {
      "code": "\
        8B4A 64 \
        85C9 \
        74 14 \
        0F1F4000 \
        8B09 \
        8B09 \
        81F9 <Rx185DF8> \
        0F84 [Rx1276D8] \
        8B8A 98000000 \
        E9 [Rx12767B] \
      "
    },
    "ReimuC2ShootAndChargeDelayCounters": {
      "access": "RW",
      "code": "\
        FFFFFFFF \
        FFFFFFFF \
      "
    },
    "ReimuC2ShootAndChargeDelayACave": {
      "code": "\
        8B42 64 \
        85 C0 \
        74 0C \
        31C0 \
        A3 <codecave:ReimuC2ShootAndChargeDelayCounters> \
        A3 <codecave:ReimuC2ShootAndChargeDelayCounters+4> \
        5D \
        C2 0400 \
      "
    },
    "ReimuC2ShootAndChargeDelayBCave": {
      "code": "\
        A1 <codecave:ReimuC2ShootAndChargeDelayCounters> \
        85C0 \
        78 3E \
        0F1F4000 \
        40 \
        A3 <codecave:ReimuC2ShootAndChargeDelayCounters> \
        83E0 01 \
        75 31 \
        0F1F4000 \
        A1 <codecave:ReimuC2ShootAndChargeDelayCounters+4> \
        83F8 38 /* Delay Frames */ \
        7D 14 \
        0F1F4000 \
        40 \
        A3 <codecave:ReimuC2ShootAndChargeDelayCounters+4> \
        B8 01000000 \
        EB 12 \
        0F1F00 \
        31C0 \
        48 \
        A3 <codecave:ReimuC2ShootAndChargeDelayCounters> \
        A3 <codecave:ReimuC2ShootAndChargeDelayCounters+4> \
        31C0 \
        C3 \
      "
    },

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