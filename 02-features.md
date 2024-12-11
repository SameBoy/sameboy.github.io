---
layout: page
title: Features
permalink: /features/
---

{% include image.html src="screenshots/boot" width="432" class="left-float" %}

## Core Emulation Features

 * Supports Game Boy (DMG), Game Boy Pocket and Light (MGB), Game Boy Color (CGB) and GBC-Mode Game Boy Advance and Game Boy Player (AGB) emulation
 * Supports accurate high level emulation of Super Game Boy (SGB; NTSC and PAL) and Super Game Boy 2 (SGB2)
 * High quality 96KHz audio
 * Battery save support
 * Save states
   * Follows the [BESS](https://github.com/LIJI32/SameBoy/blob/master/BESS.md) specification for cross-compatibility with other emulators
 * Includes open source boot ROMs for all emulated models:
   * Complete support for all game-specific palettes in the CGB/AGB boot ROM, for accurate emulation of Game Boy games on a Game Boy Color
   * Supports manual palette selection with key combinations, with 4 additional new palettes (A + B + direction)
   
{% include image.html src="screenshots/printer" width="614" class="right-float" %}

 * Six settings of color correction with adjustable ambient light temperature
 * Three audio high-pass filter modes
 * Real time clock emulation
 * Local link cable and infra-red emulation[^2]
 * Game Boy Camera emulation[^1]
 * Game Boy Printer emulation[^4]
 * Workboy emulation[^2]
 * Turbo, rewind and slow-motion modes
 * Cheat support
 * Cheat searching [^2]
 * Rumble support, including in games that are not rumble-enabled
 * Integrated, highly-compatible GBS player[^2]
 * Emulation of the integrated alarm in HuC-3 games[^4] and support for motion-controlled games
 
 <div class="clearfix"></div>
 {% include image.html src="screenshots/demos" width="583" class="left-float" %}
 
## <a name="accuracy">Accuracy</a>

 * SameBoy's core is extremely high accuracy-focused, with each new version of SameBoy emulating more newly discovered edge cases
 * Emulates the differences between different hardware revisions, allowing the user to switch between them
 * Completely passes many test ROM suites, including all of [mooneye-gb's](https://github.com/Gekkio/mooneye-test-suite/) test suite, [Wilbert Pol's tests](https://github.com/wilbertpol/mooneye-gb/tree/master/tests/acceptance) and [blargg's test ROMs](http://gbdev.gg8.se/wiki/articles/Test_ROMs#Blargg.27s_tests)
 * Sample-accurate sound emulation, downsampled from 2MHz, and accurate emulation of the [PCM12 and PCM34 registers](https://github.com/LIJI32/GBVisualizer)
 * T-cycle accurate emulation of LCD timing effects, allowing pixel-perfect emulation of the Demotronic trick, Prehistorik Man, [GBVideoPlayer](https://github.com/LIJI32/GBVideoPlayer) and other tech demos
 * Regularly tested against a suite of almost 2800 games via [automatic testing](/automation/), with a success rate of over 99.9% on both DMG and CGB games
 * Two optional frame blending modes[^3]
 * Optional realistic emulation of audio interference
  
<div class="clearfix"></div>
## User Interface
{% include image.html src="screenshots/preferences" width="813" class="hard-right-float"%}

 * Retina and High DPI display support, allowing a wider range of scaling factors without artifacts
 * Several [scaling algorithms](/scaling/)[^3] (Including exclusive algorithms such as OmniScale) and filters
   * The OmniScale algorithms let you play games in 1080p, 4K and 5K resolutions!
 * Customizable controls
 * Joypad support
 * Fullscreen support, optionally keeping aspect ratio
 * Optional speed-run-friendly OSD
 * Control motion games using a joypad's gyro controls, joystick, or your mouse
 * File browser integration; icons of Game Boy ROMs will feature in-game screenshots[^5]

These features are currently exclusive to the macOS Cocoa frontend

 * Native Cocoa interface, with support for all system-wide features, such as drag-and-drop and smart titlebars
 * Use the Zoom button to resize to the next integer ratio
 * Optional update checker and installer
 * Have multiple saves by creating new Cartridge Instances
 * A theme editor for customizable Game Boy palettes[^6]
 
 <div class="clearfix"></div>
 {% include image.html src="screenshots/palette" width="579" class="left-float"%}

## <a name="debugging">Debugging</a>

 
 * Advanced text-based debugger: ([Learn more](/debugger/))
    * Traditional step/next/continue/finish flow control
    * Expression evaluator with assignment support, register and memory access, and symbol support
    * Disassembler with symbol support
    * Multiple conditional breakpoints, including jump-to breakpoints
    * Multiple conditional watchpoints
    * Call stack tracing
    * Tick counting
    * Back-stepping, in addition to single-step undo
    * Cartridge and MBC information
    * Accurate APU and PPU information
 * Memory viewer and editor[^2]
 * Video RAM viewer[^2]
 
 <div class="clearfix"></div>
 {% include image.html src="screenshots/debugging" width="1140" class="center-image" %}
 
 [^1]: Only in the Cocoa macOS and iOS frontends; graphical noise is used instead of camera input in the SDL version
 [^2]: Only in the Cocoa macOS frontend
 [^3]: Requires OpenGL 3.2 or Metal support
 [^4]: Only in the Cocoa macOS and iOS frontends
 [^5]: Requires macOS (Quick Look) or an Open Desktop system (XDG Thumbnails)
 [^6]: Also available on iOS; themes can be exported to all frontends
<script>images = document.getElementsByTagName("img"); for (i = 0; i < images.length; i++) {images[i].onload = function(){document.body.style.transform="scale(1.0)",setTimeout(function(){document.body.style.transform=""}, 250);};}</script>
