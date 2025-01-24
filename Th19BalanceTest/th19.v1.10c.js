{
  "options": {
    "ReimuECLFilename_str": {
      "type": "s",
      "val": "pl00_balanceC.ecl"
    },
    "MarisaECLFilename_str": {
      "type": "s",
      "val": "pl01_balanceC.ecl"
    },
    "SanaeECLFilename_str": {
      "type": "s",
      "val": "pl02_balanceC.ecl"
    },
    "RanECLFilename_str": {
      "type": "s",
      "val": "pl03_balanceC.ecl"
    },
    "AunnECLFilename_str": {
      "type": "s",
      "val": "pl04_balanceC.ecl"
    },
    "NazrinECLFilename_str": {
      "type": "s",
      "val": "pl05_balanceC.ecl"
    },
    "SeiranECLFilename_str": {
      "type": "s",
      "val": "pl06_balanceC.ecl"
    },
    "OrinECLFilename_str": {
      "type": "s",
      "val": "pl07_balanceC.ecl"
    },
    "TsukasaECLFilename_str": {
      "type": "s",
      "val": "pl08_balanceC.ecl"
    },
    "MamizouECLFilename_str": {
      "type": "s",
      "val": "pl09_balanceC.ecl"
    },
    "YachieECLFilename_str": {
      "type": "s",
      "val": "pl10_balanceC.ecl"
    },
    "SakiECLFilename_str": {
      "type": "s",
      "val": "pl11_balanceC.ecl"
    },
    "YuumaECLFilename_str": {
      "type": "s",
      "val": "pl12_balanceC.ecl"
    },
    "SuikaECLFilename_str": {
      "type": "s",
      "val": "pl13_balanceC.ecl"
    },
    "BitenECLFilename_str": {
      "type": "s",
      "val": "pl14_balanceC.ecl"
    },
    "EnokoECLFilename_str": {
      "type": "s",
      "val": "pl15_balanceC.ecl"
    },
    "ChiyariECLFilename_str": {
      "type": "s",
      "val": "pl16_balanceC.ecl"
    },
    "HisamiECLFilename_str": {
      "type": "s",
      "val": "pl17_balanceC.ecl"
    },
    "ZanmuECLFilename_str": {
      "type": "s",
      "val": "pl18_balanceC.ecl"
    }
  },

  "binhacks": {
/////////////////////////////////////////////////////////
    "BulletCap": {
      "addr": "RxF6364",
      "code": "B004"
    },
      "LaserCap": {
      "addr": "Rx130DFA",
      "code": "9600"
    },
/////////////////////////////////////////////////////////
    "ReimuECLFilename": {
      "addr": "Rx1C5C24",
      "code": "<option:ReimuECLFilename_str>"
    },
    "MarisaECLFilename": {
      "addr": "Rx1C5C44",
      "code": "<option:MarisaECLFilename_str>"
    },
    "SanaeECLFilename": {
      "addr": "Rx1C5C64",
      "code": "<option:SanaeECLFilename_str>"
    },
    "RanECLFilename": {
      "addr": "Rx1C5C84",
      "code": "<option:RanECLFilename_str>"
    },
    "AunnECLFilename": {
      "addr": "Rx1C5CA4",
      "code": "<option:AunnECLFilename_str>"
    },
    "NazrinECLFilename": {
      "addr": "Rx1C5CC4",
      "code": "<option:NazrinECLFilename_str>"
    },
    "SeiranECLFilename": {
      "addr": "Rx1C5CE4",
      "code": "<option:SeiranECLFilename_str>"
    },
    "OrinECLFilename": {
      "addr": "Rx1C5D04",
      "code": "<option:OrinECLFilename_str>"
    },
    "TsukasaECLFilename": {
      "addr": "Rx1C5D24",
      "code": "<option:TsukasaECLFilename_str>"
    },
    "MamizouECLFilename": {
      "addr": "Rx1C5D44",
      "code": "<option:MamizouECLFilename_str>"
    },
    "YachieECLFilename": {
      "addr": "Rx1C5D64",
      "code": "<option:YachieECLFilename_str>"
    },
    "SakiECLFilename": {
      "addr": "Rx1C5D84",
      "code": "<option:SakiECLFilename_str>"
    },
    "YuumaECLFilename": {
      "addr": "Rx1C5DA4",
      "code": "<option:YuumaECLFilename_str>"
    },
    "SuikaECLFilename": {
      "addr": "Rx1C5DC4",
      "code": "<option:SuikaECLFilename_str>"
    },
    "BitenECLFilename": {
      "addr": "Rx1C5DE4",
      "code": "<option:BitenECLFilename_str>"
    },
    "EnokoECLFilename": {
      "addr": "Rx1C5E04",
      "code": "<option:EnokoECLFilename_str>"
    },
    "ChiyariECLFilename": {
      "addr": "Rx1C5E24",
      "code": "<option:ChiyariECLFilename_str>"
    },
    "HisamiECLFilename": {
      "addr": "Rx1C5E44",
      "code": "<option:HisamiECLFilename_str>"
    },
    "ZanmuECLFilename": {
      "addr": "Rx1C5E64",
      "code": "<option:ZanmuECLFilename_str>"
    },
/////////////////////////////////////////////////////////
    "RanVSStage": {
      "addr": "Rx1C5C80",
      "code": "02"
    },
/////////////////////////////////////////////////////////
/*
    "SeperateExAttackAndBossAttackCheckA": {
      "addr": "Rx1032A0", // Rx11582F
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
    }
*/
/////////////////////////////////////////////////////////
    "ReimuC2Range": {
      "addr": "Rx13B7BA",
      "code": "0F8D 2F010000"
    },
/*
    "ReimuC2Time": {
      "addr": "Rx127D97", // Rx13B974
      "code": "32"
    }
*/

/////////////////////////////////////////////////////////

    "TsukasaC2NerfA": {
      "addr": "Rx1BE20",
      "code": "64"
    },
    "TsukasaC2NerfB": {
      "addr": "Rx1E695",
      "code": "3E43"
    },
    "TsukasaC2NerfC": {
      "addr": "Rx1E72B",
      "code": "64"
    },
    "TsukasaC2NerfD": {
      "addr": "Rx1E739",
      "code": "C842"
    },
    "TsukasaC2NerfE": {
      "addr": "Rx1E741",
      "code": "63"
    },

/////////////////////////////////////////////////////////
/*
    "YachieCancelDamage": {
      "addr": "Rx22204",
      "code": "F0"
    },
*/
/////////////////////////////////////////////////////////
    "ToutetsuScopeTime": {
      "addr": "Rx249B0",
      "code": "20030000"
    },
    "ToutetsuC2RangeA": {
      "addr": "Rx2545E",
      "code": "70C2"
    },
    "ToutetsuC2RangeB": {
      "addr": "Rx25468",
      "code": "9643"
    },
    "ToutetsuC2RangeC": {
      "addr": "Rx25472",
      "code": "70C2"
    },
/////////////////////////////////////////////////////////
    "CiyariScopeDmg": {
      "addr": "Rx2b306",
      "code": "06"
    },
/////////////////////////////////////////////////////////
    "ZanmuC2A": {
      "addr": "Rx2E79F",
      "code": "A001" //5A00
    },
    "ZanmuC2B": {
      "addr": "Rx2E7A9",
      "code": "06" //04
    },
    "AnimalSpiritIdentify": {
      "addr": "Rx2ED27",
      "code": " \
        F20F1086 78120000 \
        F30F108E 80120000 \
        0F16C1 \
        0F1145 9C \
        8B96 CC140000 \
        8955 BC \
        8B86 D8140000 \
        83E0 03 \
        8945 C8 \
        51 \
        C745 B0 64000000 \
        31D2 \
        8955 AC \
        8955 EC \
        BA <Rx1A9864> \
        0FB686 A3630000 \
        A8 10 \
        74 2E \
        8B87 2C010000 \
        8D48 01 \
        69C0 ABAAAAAA \
        898F 2C010000 \
        31C9 \
        05 AAAAAA2A \
        3D 55555555 \
        0F92C1 \
        8D0449 \
        8D1485 <Rx1A984C> \
        8B8F D0000000 \
        52 \
      "
    },
/////////////////////////////////////////////////////////
    "BuffHisamiCard2": {
      "addr": "Rxf3b06",
      "code": "<codecave:BuffHisamiCard2Cave>"
    }
  },

  "codecaves": {
/////////////////////////////////////////////////////////
    "BuffHisamiCard2Cave": {
      "code": "<option:BuffHisamiCard2Mul>"
    }
  }
}