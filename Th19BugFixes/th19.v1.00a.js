{
  "binhacks": {
    "change_jmp_Orinlv2": {
      "addr": "Rx1A45A",
      "code": "7E 77"
    },
    "else_condition_OrinLv2_jmp": {
      "addr": "Rx1A4D3",
      "code": "E9 [codecave:else_condition_OrinLv2]"
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
    }
  },
  "codecaves": {
    "else_condition_OrinLv2": {
      "code": "C7 86 D8000000 00000000 31 C0 5E C3"
    }
  }
}