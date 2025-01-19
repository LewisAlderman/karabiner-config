import { ifDevice, map, rule, writeToProfile } from 'karabiner.ts';

// ! Change '--dry-run' to your Karabiner-Elements Profile name.
// (--dry-run print the config json into console)
// + Create a new profile if needed.
writeToProfile(
  'karabiner-config',
  [
    // It is not required, but recommended to put symbol alias to layers,
    // (If you type fast, use simlayer instead, see https://evan-liu.github.io/karabiner.ts/rules/simlayer)
    // to make it easier to write '←' instead of 'left_arrow'.
    // Supported alias: https://github.com/evan-liu/karabiner.ts/blob/main/src/utils/key-alias.ts

    rule('Key mapping').manipulators([
      // config key mappings
      map('caps_lock', null, ['shift', 'control', 'option', 'command'])
        .toIfAlone('escape')
        .toIfHeldDown('left_control', undefined, { halt: true }),
      map('locking_scroll_lock').to('caps_lock'),
      map('scroll_lock').to('play_or_pause'),
    ]),

    rule(
      'Apple Keyboard',
      ifDevice({
        vendor_id: 1452,
      })
    ).manipulators([map('non_us_backslash').to('caps_lock')]),

    rule(
      'Other Keyboard 1',
      ifDevice({
        vendor_id: 7847,
        product_id: 2311,
        is_keyboard: true,
      })
    ).manipulators([
      map('left_command').to('left_option'),
      map('left_option').to('left_command'),
    ]),

    rule(
      'Other Keyboard 2',
      ifDevice({
        vendor_id: 3141,
        product_id: 30316,
        is_keyboard: true,
      })
    ).manipulators([
      map('left_command').to('left_option'),
      map('left_option').to('left_command'),
    ]),

    /**
    Default TOTEM keymap

          q     w     e     r     t     y     u     i      o     p

          a     s     d     f     g     h     j     k      l     ;

    q     z     x     c     v     b     n     m     ,      .     /     p

                      delf  tab   spc   entr  esc   bksp

   */

    // rule(
    //   'TOTEM',
    //   ifDevice({
    //     vendor_id: 14908,
    //   })
    // ).manipulators([map('f').to('f'), map('q').to('left_arrow')]),
  ],
  {
    'basic.to_if_held_down_threshold_milliseconds': 125,
  }
);
