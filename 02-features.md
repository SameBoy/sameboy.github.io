---
layout: page
title: Features
permalink: /features/
lightbox: true
---

## Core Emulation Features

{% include image.html src="screenshots/boot" width="192" fullwidth="432" class="float-image" zoom=true %}
{% include image.html src="screenshots/printer" width="192" fullwidth="864" class="float-image" zoom=true %}

 * Supports GameBoy (DMG) and GameBoy Color (CGB) emulation
 * Lets you choose the model you want to emulate regardless of ROM
 * High quality 96KHz audio[^1]
 * Battery save support
 * Save states
 * Includes open source DMG and CGB boot ROMs:
   * Complete support for (and documentation of) *all* game-specific palettes in the CGB boot ROM, for accurate emulation of Gameboy games on a Gameboy Color
   * Supports manual palette selection with key combinations, with 4 additional new palettes (A + B + direction)
   * Supports palette selection in a CGB game, forcing it to run in 'paletted' DMG mode, if ROM allows doing so
   * Support for games with a non-Nintendo logo in the header
   * No long animation in the DMG boot
 * Real time clock emulation
 * GameBoy Camera Emulation[^2]
 * GameBoy Printer Emulation[^3]
 * Turbo mode
 
## <a name="accuracy">Accuracy</a>

{% include image.html src="screenshots/demos" width="192" fullwidth="656" class="float-image" zoom=true %}


 * Extremely high accuracy
 * Passes most of [mooneye-gb's](https://github.com/Gekkio/mooneye-gb) acceptance tests
 * Passes many of [blargg's test ROMs](http://gbdev.gg8.se/wiki/articles/Test_ROMs#Blargg.27s_tests)
 * Emulates [PCM_12 and PCM_34 registers](https://github.com/LIJI32/GBVisualizer)
 * Emulates LCD timing effects, supporting the Demotronic trick, [GBVideoPlayer](https://github.com/LIJI32/GBVideoPlayer) and other tech demos
 * Regularly tested against a suite of over 2900 games via [automatic testing](/automation/), with a success rate of almost 100% on DMG games, and over 97% on the complete suite
 * Optional frame blending[^3]
 
  
## User Interface

{% include image.html src="screenshots/preferences" width="192" fullwidth="929" class="float-image" zoom=true %}
{% include image.html src="screenshots/quicklook" width="192" fullwidth="871" class="float-image" zoom=true %}

These features are currently exclusive to the macOS Cocoa port


 * Native Cocoa interface, with support for all system-wide features, such as drag-and-drop and smart titlebars
 * Retina display support, allowing a wider range of scaling factors without artifacts
 * Several [scaling algorithms](/scaling/) (Including exclusive algorithms such as OmniScale)
   * The OmniScale algorithms let you play games in 1080p, 4K and 5K resolutions!
 * Quick Look integration; in-game screenshots appear in the Finder icons of GameBoy ROMs
 * Use the Zoom button to resize to the next integer ratio
 * Customizable controls
 * Fullscreen support, optionally keeping aspect ratio
 
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
 
 [^1]: 44.1KHz in the Windows version
 [^2]: Only in the Cocoa macOS port; white noise is used instead of camera input in the SDL version
 [^3]: Only in the Cocoa macOS port
 [^4]: Not supported on Windows
