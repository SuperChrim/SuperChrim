{
  "options": {
    "P1AI": {
      "type": "b",
      "val": false
    } 
  },

  "binhacks": {

    // Vs AI Swap
    "VsP1AI": {
      "addr": "Rx1583D5",
      "code": "01"
    },
    "VsP2Iput": {
      "addr": "Rx1583DF",
      "code": "00"
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