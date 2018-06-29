---
layout: page
title: Features
permalink: /features/
lightbox: true
---

## Core Emulation Features

{% include image.html src="screenshots/boot" width="192" fullwidth="432" class="float-image" zoom=true %}
{% include image.html src="screenshots/printer" width="192" fullwidth="864" class="float-image" zoom=true %}

 * Supports Game Boy (DMG) and Game Boy Color (CGB) emulation
 * Lets you choose the model you want to emulate regardless of ROM
 * High quality 96KHz audio[^1]
 * Battery save support
 * Save states
 * Includes open source DMG and CGB boot ROMs:
   * Complete support for (and documentation of) *all* game-specific palettes in the CGB boot ROM, for accurate emulation of Game Boy games on a Game Boy Color
   * Supports manual palette selection with key combinations, with 4 additional new palettes (A + B + direction)
   * Supports palette selection in a CGB game, forcing it to run in 'paletted' DMG mode, if ROM allows doing so
   * Support for games with a non-Nintendo logo in the header
   * No long animation in the DMG boot
 * Four settings of color correction
 * Three settings of high-pass audio filters
 * Real time clock emulation
 * Game Boy Camera emulation[^2]
 * Game Boy Printer emulation[^3]
 * Turbo, rewind and slow-motion modes
 
## <a name="accuracy">Accuracy</a>

{% include image.html src="screenshots/demos" width="192" fullwidth="656" class="float-image" zoom=true %}


 * Extremely high accuracy
 * Passes all of [mooneye-gb's](https://github.com/Gekkio/mooneye-gb) acceptance tests, including [Wilbert Pol's tests](https://github.com/wilbertpol/mooneye-gb/tree/master/tests/acceptance)
 * Passes all of [blargg's test ROMs](http://gbdev.gg8.se/wiki/articles/Test_ROMs#Blargg.27s_tests)
 * Emulates [PCM_12 and PCM_34 registers](https://github.com/LIJI32/GBVisualizer)
 * T-cycle accurate emulation of LCD timing effects, supporting the Demotronic trick, Prehistorik Man, [GBVideoPlayer](https://github.com/LIJI32/GBVideoPlayer) and other tech demos
 * Regularly tested against a suite of over 2900 games via [automatic testing](/automation/), with a success rate of over 99% on both DMG and CGB games
 * Optional frame blending[^4]
 * Sample-accurate sound emulation, downsampled from 2MHz
 
  
## User Interface

{% include image.html src="screenshots/preferences" width="192" fullwidth="929" class="float-image" zoom=true %}
{% include image.html src="screenshots/quicklook" width="192" fullwidth="871" class="float-image" zoom=true %}

 * Retina and High DPI display support, allowing a wider range of scaling factors without artifacts
 * Several [scaling algorithms](/scaling/)[^4] (Including exclusive algorithms such as OmniScale)
   * The OmniScale algorithms let you play games in 1080p, 4K and 5K resolutions!
 * Customizable controls
 * Joypad support
 * Fullscreen support, optionally keeping aspect ratio

These features are currently exclusive to the macOS Cocoa port

 * Native Cocoa interface, with support for all system-wide features, such as drag-and-drop and smart titlebars
 * Quick Look integration; in-game screenshots appear in the Finder icons of Game Boy ROMs
 * Use the Zoom button to resize to the next integer ratio
 
## <a name="debugging">Debugging</a>
 
{% include image.html src="screenshots/debugging" width="192" fullwidth="1218" class="float-image" zoom=true %}

 * Advanced text-based debugger: ([Learn more](/debugger/))
    * Traditional step/next/continue/finish flow control
    * Expression evaluator with assignment support, register and memory access, and symbol support
    * Disassembler with symbol support
    * Multiple conditional breakpoints
    * Multiple conditional watchpoints
    * Call stack tracing
    * Tick counting
    * Cartridge and MBC information
 * Memory viewer and editor[^3]
 * Video RAM viewer[^3]
 
 [^1]: 44.1KHz in older Windows versions
 [^2]: Only in the Cocoa macOS port; graphical noise is used instead of camera input in the SDL version
 [^3]: Only in the Cocoa macOS port
 [^4]: Requires OpenGL 3.2 or Metal support
