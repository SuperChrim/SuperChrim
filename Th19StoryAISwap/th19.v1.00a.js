{
  "options": {
    "P1AI": {
      "type": "b",
      "val": true
    } 
  },
  "binhacks": {
    "NoAutoAttacks": {
      "addr": "Rx0A510",
      "code": "C2 0400 CC"
    },
    "JumpFromBossAttack": {
      "addr": "RxD7E97",
      "code": "E9 [codecave:P2BossAttackToAutoAttack] CC"
    },
    "JumpFromEXAttack": {
      "addr": "RxD8391",
      "code": "E9 [codecave:P2EXAttackToAutoAttack] CC"
    },
    "P2StoryMeterRate": {
      "addr": [ "RxEADA9", "RxEADBD", "RxEAE36", "RxEAFDA" ],
      "code": "88"
    },

    // P2 Meter Rate Uncap
    "P2StoryMeterRateUnCap1": {
      "addr": "RxEB00B",
      "code": "9090"
    },
    "P2StoryMeterRateUnCap2": {
      "addr": "Rx10EA53",
      "code": "8BC2 90"
    },
    "P2StoryMeterRateUnCap3": {
      "addr": "Rx10EA53",
      "code": "909090"
    },

    "StoryP1Input": {
      "addr": "Rx10F890",
      "code": "00"
    },
    
    // Toggle P1 AI
    "StoryP2Input": {
      "enable": "<option:P1AI> == 1",
      "addr": "Rx10F89A",
      "code": "02"
    },
    "StoryP1AI": {
      "enable": "<option:P1AI> == 1",
      "addr": "Rx141532",
      "code": "01"
    },
    
    // Toggle P1 No AI
    "StoryNoAIInput": {
      "enable": "<option:P1AI> == 0",
      "addr": "RxE998F",
      "code": "909090909090"
    },
    "StoryAllowPlayerInput": {
      "enable": "<option:P1AI> == 0",
      "addr": "RxEAC42",
      "code": "90909090909090909090"
    }
  },
  "codecaves": {
    "AutoAttackTable": {
      "access": "R",
      "code": "\
        06 0B 10 16 1D 25\
        00 00 01 01 FF\
        00 00 01 01 FF\
        00 00 01 00 01 FF\
        00 00 01 00 01 01 FF\
        00 01 00 00 01 00 01 FF\
        00 01 01 00 00 00 01 01 01 FF\
      "
    },
    "P2BossAttackToAutoAttack": {
      "code": "\
        A1 <Rx1AE4C4>\
        3BC3\
        75 6F\
        A1 <Rx1AE4E0>\
        85C0\
        74 66\
        50\
        51\
        A1 <Rx1AE4E4>\
        8B 48 18\
        8B 01\
        8B 40 24\
        FF D0\
        84 C0\
        59\
        58\
        75 4F\
        8B40 34\
        85 C0\
        74 48\
        51\
        8B0D <Rx2082C0>\
        49\
        0FB6 89 <codecave:AutoAttackTable>\
        8B70 04\
        01 F1\
        0FB6 89 <codecave:AutoAttackTable>\
        83 F9 01\
        59\
        75 27\
        8B48 08\
        81C1 E8030000\
        8948 08\
        8B 93 CC000000\
        8B 52 2C\
        83 C2 30\
        8B 02\
        2B 42 F4\
        29 42 F0\
        E9 [RxD8666]\
        CCCC\
        8B41 38\
        8B48 18\
        E9 [RxD7E9D]\
        CC\
      "
    },
    "P2EXAttackToAutoAttack": {
      "code": "\
        A1 <Rx1AE4C4>\
        3BC3\
        75 6A\
        A1 <Rx1AE4E0>\
        85C0\
        74 61\
        50\
        A1 <Rx1AE4E4>\
        8B 48 18\
        8B 01\
        8B 40 24\
        FF D0\
        84 C0\
        58\
        75 4C\
        8B40 34\
        85 C0\
        74 45\
        8B0D <Rx2082C0>\
        49\
        0FB6 89 <codecave:AutoAttackTable>\
        8B70 04\
        01 F1\
        0FB6 89 <codecave:AutoAttackTable>\
        85 C9\
        75 27\
        8B48 08\
        81C1 E8030000\
        8948 08\
        8B 93 CC000000\
        8B 52 2C\
        83 C2 2C\
        8B 02\
        2B 42 F8\
        29 42 F4\
        E9 [RxD8666]\
        CCCC\
        8B0D <Rx207A94> \
        E9 [RxD8397]\
        CC\
      "
    }
  }
}