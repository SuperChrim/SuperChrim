{
  "binhacks": {
/////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////
    "BulletCap": {
      "addr": "RxE5B54",
      "code": "B004"
    },
      "LaserCap": {
      "addr": "Rx11DBA9",
      "code": "9600"
    },
/////////////////////////////////////////////////////////
    "ReimuECLFilename": {
      "addr": "Rx1A2B94",
      "code": "<option:ReimuECLFilename_str>"
    },
    "MarisaECLFilename": {
      "addr": "Rx1A2BB4",
      "code": "<option:MarisaECLFilename_str>"
    },
    "SanaeECLFilename": {
      "addr": "Rx1A2BD4",
      "code": "<option:SanaeECLFilename_str>"
    },
    "RanECLFilename": {
      "addr": "Rx1A2BF4",
      "code": "<option:RanECLFilename_str>"
    },
    "AunnECLFilename": {
      "addr": "Rx1A2C14",
      "code": "<option:AunnECLFilename_str>"
    },
    "NazrinECLFilename": {
      "addr": "Rx1A2C34",
      "code": "<option:NazrinECLFilename_str>"
    },
    "SeiranECLFilename": {
      "addr": "Rx1A2C54",
      "code": "<option:SeiranECLFilename_str>"
    },
    "OrinECLFilename": {
      "addr": "Rx1A2C74",
      "code": "<option:OrinECLFilename_str>"
    },
    "TsukasaECLFilename": {
      "addr": "Rx1A2C94",
      "code": "<option:TsukasaECLFilename_str>"
    },
    "MamizouECLFilename": {
      "addr": "Rx1A2CB4",
      "code": "<option:MamizouECLFilename_str>"
    },
    "YachieECLFilename": {
      "addr": "Rx1A2CD4",
      "code": "<option:YachieECLFilename_str>"
    },
    "SakiECLFilename": {
      "addr": "Rx1A2CF4",
      "code": "<option:SakiECLFilename_str>"
    },
    "YuumaECLFilename": {
      "addr": "Rx1A2D14",
      "code": "<option:YuumaECLFilename_str>"
    },
    "SuikaECLFilename": {
      "addr": "Rx1A2D34",
      "code": "<option:SuikaECLFilename_str>"
    },
    "BitenECLFilename": {
      "addr": "Rx1A2D54",
      "code": "<option:BitenECLFilename_str>"
    },
    "EnokoECLFilename": {
      "addr": "Rx1A2D74",
      "code": "<option:EnokoECLFilename_str>"
    },
    "ChiyariECLFilename": {
      "addr": "Rx1A2D94",
      "code": "<option:ChiyariECLFilename_str>"
    },
    "HisamiECLFilename": {
      "addr": "Rx1A2DB4",
      "code": "<option:HisamiECLFilename_str>"
    },
    "ZanmuECLFilename": {
      "addr": "Rx1A2DD4",
      "code": "<option:ZanmuECLFilename_str>"
    },
/////////////////////////////////////////////////////////
    "RanVSStage": {
      "addr": "Rx1A2BF0",
      "code": "02"
    },
/////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////
    "ReimuC2NoC1": {
      "addr": "Rx127675",
      "code": "\
        E9 [codecave:ReimuC2NoC1Cave] \
        90 \
      "
    },
    "ReimuC2ShootAndChargeDelayA": {
      "addr": "Rx12762A",
      "code": "E9 [codecave:ReimuC2ShootAndChargeDelayACave]"
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
/////////////////////////////////////////////////////////
    "NazrinScopeSpeedIncrease": {
      "addr": "Rx188D6",
      "code": "BE"
    },
    "NazrinBombDmg": {
      "addr": "Rx12C681",
      "code": "28"
    },
/////////////////////////////////////////////////////////
    "YachieCancelDamage": {
      "addr": "Rx1F443",
      "code": "36"
    },
    "YachieC2Range": {
      "addr": "Rx1F3D5",
      "code": "28"
    },
/////////////////////////////////////////////////////////
    "ToutetsuScopeTime": {
      "addr": "Rx21368",
      "code": "20030000"
    },
    "ToutetsuC2RangeA": {
      "addr": "Rx21BA4",
      "code": "70C2"
    },
    "ToutetsuC2RangeB": {
      "addr": "Rx21BAE",
      "code": "9643"
    },
    "ToutetsuC2RangeC": {
      "addr": "Rx21BB8",
      "code": "70C2"
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
      "code": "50"
    },
    "ToutetsuExTimeCap": {
      "addr": "Rx21F07",
      "code": "1B"
    },
    "ToutetsuC1EtBreak": {
      "addr": "Rx21ACD",
      "code": "E8 [codecave:ToutetsuC1EtBreakCave]"
    },
    "ToutetsuNoCancelA": {
      "addr": "Rx21E24",
      "code": "83C4 14 9090"
    },
    "ToutetsuNoCancelB": {
      "addr": "Rx21E3B",
      "code": "83C4 0C 9090"
    },
    "ToutetsuNoEnemyCancel": {
      "addr": "Rx21E84",
      "code": "90909090"
    },
/////////////////////////////////////////////////////////
    "CiyariScopeDmg": {
      "addr": "Rx26D03",
      "code": "06"
    },
/////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////
    "ReimuAuraAun2Multiplier": {
      "addr": "Rx14CA0",
      "code": "<codecave:Aun2CardMultipliers>"
    },
    "MarisaAuraAun2Multiplier": {
      "addr": "Rx15900",
      "code": "(<codecave:Aun2CardMultipliers>+4)"
    },
    "SanaeAuraAun2Multiplier": {
      "addr": "Rx163D1",
      "code": " \
        6A 08 \
        E8 [codecave:Aun2CardCalculate] \
        <nop:57> \
      "
    },
    "RanAuraAun2Multiplier": {
      "addr": "Rx173BD",
      "code": " \
        6A 0C \
        E8 [codecave:Aun2CardCalculate] \
      "
    },
    "AunAuraAun2Multiplier": {
      "addr": "Rx18058",
      "code": "(<codecave:Aun2CardMultipliers>+16)"
    },
    "NazrinAuraAun2Multiplier": {
      "addr": "Rx18920",
      "code": "(<codecave:Aun2CardMultipliers>+20)"
    },
    "SeiranAuraAun2Multiplier": {
      "addr": "Rx195C0",
      "code": "(<codecave:Aun2CardMultipliers>+24)"
    },
    "OrinAura1Aun2Multiplier": {
      "addr": "Rx1A11D",
      "code": " \
        6A 1C \
        E8 [codecave:Aun2CardCalculate] \
      "
    },
    "OrinAura2Aun2Multiplier": {
      "addr": "Rx1A255",
      "code": " \
        E8 [codecave:Aun2CardCalculateOrin2] \
        <nop:2> \
      "
    },
    "TsukasaAuraAun2Multiplier": {
      "addr": "Rx1B48D",
      "code": " \
        6A 24 \
        E8 [codecave:Aun2CardCalculate] \
      "
    },
    "MamizouAuraAun2Multiplier": {
      "addr": "Rx1CBB3",
      "code": " \
        6A 28 \
        E8 [codecave:Aun2CardCalculate] \
      "
    },
    "YachieAuraAun2Multiplier": {
      "addr": "Rx1E3BD",
      "code": " \
        6A 2C \
        E8 [codecave:Aun2CardCalculate] \
      "
    },
    "SakiAura1Aun2Multiplier": {
      "addr": "Rx1FF75",
      "code": " \
        6A 30 \
        E8 [codecave:Aun2CardCalculate] \
      "
    },
    "SakiAura2Aun2Multiplier": {
      "addr": "Rx1FF00",
      "code": " \
        68 34000000 \
        E8 [codecave:Aun2CardCalculateB] \
      "
    },
    "ToutetsuAuraAun2Multiplier": {
      "addr": "Rx2137D",
      "code": " \
        6A 38 \
        E8 [codecave:Aun2CardCalculate] \
      "
    },
    "SuikaAuraAun2Multiplier": {
      "addr": "Rx2294A",
      "code": " \
        E8 [codecave:Aun2CardCalculateSuika] \
        <nop:2> \
      "
    },
    "BitenAuraAun2Multiplier": {
      "addr": "Rx23CBD",
      "code": " \
        6A 40 \
        E8 [codecave:Aun2CardCalculate] \
      "
    },
    "EnokoAuraAun2Multiplier": {
      "addr": "Rx257F3",
      "code": " \
        6A 44 \
        E8 [codecave:Aun2CardCalculate] \
      "
    },
    "ChiyariAuraAun2Multiplier": {
      "addr": "Rx26B8D",
      "code": " \
        6A 48 \
        E8 [codecave:Aun2CardCalculate] \
      "
    },
    "HisamiAuraAun2Multiplier": {
      "addr": "Rx27C9D",
      "code": " \
        6A 4C \
        E8 [codecave:Aun2CardCalculate] \
      "
    },
    "ZanmuAura1Aun2Multiplier": {
      "addr": "Rx290ED",
      "code": " \
        6A 50 \
        E8 [codecave:Aun2CardCalculate] \
      "
    },
    "ZanmuAura2Aun2Multiplier": {
      "addr": "Rx2915F",
      "code": "\
        68 54000000 \
        E8 [codecave:Aun2CardCalculateB] \
      "
    },
/////////////////////////////////////////////////////////
    "BuffHisamiCard2": {
      "addr": "RxE349B",
      "code": "<codecave:BuffHisamiCard2Cave>"
    },
/////////////////////////////////////////////////////////
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
/*
    },
/////////////////////////////////////////////////////////
    "add_bomb_fragment_check_A": {
      "addr": "Rx124247",
      "code": " \
        56 \
        57 \
        89CB \
        8B53 70 \
        31C0 \
        85D2 \
        0F48D0 \
        B8 07000000 \
        39C2 \
        0F4EC2 \
        8943 70 \
        8B73 68 \
        46 \
        8B7B 0C \
        <nop:11> \
      "
    },
    "add_bomb_fragment_check_B": {
      "addr": "Rx124297",
      "code": " \
        8973 68 \
        3B34BD <codecave:bomb_pieces_for_bomb> \
      "
    }
*/
  }
}