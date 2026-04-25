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
    },
/////////////////////////////////////////////////////////
    "ToutetsuExOffset": {
      "type": "f32",
      "val": -36
    },
/////////////////////////////////////////////////////////
    "MarisaExCooldownEnd": {
      "type": "132",
      "val": 0
    },
    "NazrinExCooldownEnd": {
      "type": "u32",
      "val": 80
    },
    "SeiranExCooldownEnd": {
      "type": "u32",
      "val": 120
    },
    "YachieExCooldownEnd": {
      "type": "u32",
      "val": 50
    },
    "SakiExCooldownEnd": {
      "type": "u32",
      "val": 50
    },
    "SuikaExCooldownEnd": {
      "type": "u32",
      "val": 120
    },
    "HisamiExCooldownEnd": {
      "type": "u32",
      "val": 120
    },
    "ZanmuExCooldownEnd": {
      "type": "u32",
      "val": 70
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
      "addr": "Rx1032C4", // Rx115853
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
*/
/////////////////////////////////////////////////////////
    "ReimuC2NoC1": {
      "addr": "Rx13B114",
      "code": "\
        E9 [codecave:ReimuC2NoC1Cave] \
        90 \
      "
    },
    "ReimuC2Range": {
      "addr": "Rx13B7BA",
      "code": "0F8D 2F010000"
    },
/*
    "ReimuC2Time": {
      "addr": "Rx127D97", // Rx13B974
      "code": "32"
    },
*/
/////////////////////////////////////////////////////////
    "MarisaExCooldownEnd": {
      "enable": "<option:MarisaExCooldownEnd>",
      "addr": "Rx1A8BB0",
      "code": "<codecave:MarisaExCooldownEnd>"
    },
/////////////////////////////////////////////////////////
    "NazrinExCooldownEnd": {
      "enable": "<option:NazrinExCooldownEnd>",
      "addr": "Rx1A8EAC",
      "code": "<codecave:NazrinExCooldownEnd>"
    },
/////////////////////////////////////////////////////////
    "SeiranExCooldownEnd": {
      "enable": "<option:SeiranExCooldownEnd>",
      "addr": "Rx1A8FB8",
      "code": "<codecave:SeiranExCooldownEnd>"
    },

/////////////////////////////////////////////////////////
    "TsukasaC2NerfA": {
      "addr": "Rx1E675",
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
    "YachieExCooldownEnd": {
      "enable": "<option:YachieExCooldownEnd>",
      "addr": "Rx1A92D8",
      "code": "<codecave:YachieExCooldownEnd>"
    },
/////////////////////////////////////////////////////////
    "SakiExCooldownEnd": {
      "enable": "<option:SakiExCooldownEnd>",
      "addr": "Rx1A9394",
      "code": "<codecave:SakiExCooldownEnd>"
    },
/////////////////////////////////////////////////////////
    "ToutetsuScopeTime": {
      "addr": "Rx249B0",
      "code": "20030000"
    },
    "ToutetsuC1Range": {
      "addr": "Rx252E3",
      "code": "1042"
    },
    "ToutetsuC2RangeA": {
      "addr": "Rx2545E",
      "code": "10C2"
    },
    "ToutetsuC2RangeB": {
      "addr": "Rx25468",
      "code": "1643"
    },
    "ToutetsuC2RangeC": {
      "addr": "Rx25472",
      "code": "10C2"
    },
    "ToutetsuExOffset": {
      "addr": "Rx25714",
      "code": " \
        8B98 8C060000 \
        F20F1080 90060000 \
        FFB7 08010000 \
        E8 [RxCB8B0] \
        85C0 \
        74 0D \
        8998 14060000 \
        0F1380 18060000 \
        891E \
        F30F5805 {f32:<option:ToutetsuExOffset>} \
        F20F1146 04 \
      "
    },
/////////////////////////////////////////////////////////
    "SuikaExCooldownEnd": {
      "enable": "<option:SuikaExCooldownEnd>",
      "addr": "Rx1A950C",
      "code": "<codecave:SuikaExCooldownEnd>"
    },
/////////////////////////////////////////////////////////
    "CiyariScopeDmg": {
      "addr": "Rx2b306",
      "code": "06"
    },
/////////////////////////////////////////////////////////
    "HisamiExCooldownEnd": {
      "enable": "<option:HisamiExCooldownEnd>",
      "addr": "Rx1A9808",
      "code": "<codecave:HisamiExCooldownEnd>"
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
    "ZanmuExCooldownEnd": {
      "enable": "<option:ZanmuExCooldownEnd>",
      "addr": "Rx1A98E8",
      "code": "<codecave:ZanmuExCooldownEnd>"
    },
/////////////////////////////////////////////////////////
    "BuffHisamiCard2": {
      "addr": "Rxf3b06",
      "code": "<codecave:BuffHisamiCard2Cave>"
    },
        "BarrierBreakStateLogicA": {
            "addr": "Rx146880",
            "code": "<int3:363>"
        },
        "BarrierBreakStateLogicB": {
            "addr": "Rx146CFC",
            "code": "<codecave:BarrierBreakStateLogic>"
        }
  },


  "codecaves": {
/////////////////////////////////////////////////////////
/*
    "ReimuC2NoC1Cave": {
      "code": " \
        8B4A 64 \
        85C9 \
        74 14 \
        0F1F4000 \
        8B09 \
        8B09 \
        81F9 <Rx1A8AB8> \
        0F84 [Rx13B17C] \
        8B99 98000000 \
        E9 [Rx13B11A] \
      "
    },
*/
    "ReimuC2NoC1Cave": {
      "code": " \
        8B99 98000000 \
        E9 [Rx13B11A] \
      "
    },
/////////////////////////////////////////////////////////
    "MarisaExCooldownEnd": {
      "enable": "<option:MarisaExCooldownEnd>",
      "access": "re",
      "code": " \
        31C0 \
        81B9 8C000000 <option:MarisaExCooldownEnd> \
        0F92C0 \
        C3 \
      "
    },
    "NazrinExCooldownEnd": {
      "enable": "<option:NazrinExCooldownEnd>",
      "access": "re",
      "code": " \
        31C0 \
        81B9 8C000000 <option:NazrinExCooldownEnd> \
        0F92C0 \
        C3 \
      "
    },
    "SeiranExCooldownEnd": {
      "access": "re",
      "code": " \
        31C0 \
        81B9 8C000000 <option:SeiranExCooldownEnd> \
        0F92C0 \
        C3 \
      "
    },
    "YachieExCooldownEnd": {
      "enable": "<option:YachieExCooldownEnd>",
      "access": "re",
      "code": " \
        31C0 \
        81B9 8C000000 <option:YachieExCooldownEnd> \
        0F92C0 \
        C3 \
      "
    },
    "SakiExCooldownEnd": {
      "enable": "<option:SakiExCooldownEnd>",
      "access": "re",
      "code": " \
        31C0 \
        81B9 8C000000 <option:SakiExCooldownEnd> \
        0F92C0 \
        C3 \
      "
    },
    "SuikaExCooldownEnd": {
      "enable": "<option:SuikaExCooldownEnd>",
      "access": "re",
      "code": " \
        31C0 \
        81B9 8C000000 <option:SuikaExCooldownEnd> \
        0F92C0 \
        C3 \
      "
    },
    "HisamiExCooldownEnd": {
      "enable": "<option:HisamiExCooldownEnd>",
      "access": "re",
      "code": " \
        31C0 \
        81B9 8C000000 <option:HisamiExCooldownEnd> \
        0F92C0 \
        C3 \
      "
    },
    "ZanmuExCooldownEnd": {
      "enable": "<option:ZanmuExCooldownEnd>",
      "access": "re",
      "code": " \
        31C0 \
        81B9 8C000000 <option:ZanmuExCooldownEnd> \
        0F92C0 \
        C3 \
      "
        },
/////////////////////////////////////////////////////////
    "BuffHisamiCard2Cave": {
      "code": "<option:BuffHisamiCard2Mul>"
    },
/////////////////////////////////////////////////////////
        "BarrierBreakStateLogic": {
            "access": "re",
            "code": "\
83EC 08 \
D947 40 \
D9FB \
D91C24 \
D95C24 04 \
8B87 B8060000 \
F20F100424 \
83F8 28 \
7C 1D \
F30F100D {u32:0xFFFFFFFF} \
C747 10 01000000 \
0F118F B4060000 \
808F C4060000 01 \
0F57C9 \
F30F2AC8 \
F30F590D {u32:0xC0CCCCCD} \
89F9 \
F30F580D {u32:0x43800000} \
0FC6C9 00 \
0F59C8 \
F30F5BC1 \
660FD60424 \
0F57C9 \
660F76C8 \
0F50F1 \
E8 [Rx2FCE0] \
FFB7 84060000 \
8B0D <Rx1D19BC> \
E8 [RxCB8B0] \
85C0 \
74 20 \
F20F1087 8C060000 \
F20F1180 14060000 \
F30F1087 94060000 \
F30F1180 1C060000 \
83F6 0F \
74 27 \
8DB7 2C210000 \
8D87 34210000 \
68 00010000 \
56 \
50 \
E8 [th_memmove] \
83C4 0C \
F30F7E87 98060000 \
660FD606 \
BE 00070000 \
<nop:6> \
8D0437 \
89F9 \
50 \
E8 [Rx146D10] \
81C6 28010000 \
81FE 70200000 \
75 E7 \
F30F100D <Rx1AA230> \
E9 [Rx146A00] \
"
        }
  }
}