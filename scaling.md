---
layout: page
permalink: /scaling/
group: Features
title: Scaling
slideshow: true
---

SameBoy supports several GPU-accelerated scaling filters, some of which are exclusive to SameBoy. This document describes the filters supported by SameBoy.

## Comparison
The following images have been scaled to a 4x factor using different filters supported by SameBoy, so you can compare how they perform.

<style>main .wrapper{width:1280px;max-width:1280px}</style>
<div class="filter-demo">
<ul>
<li class="filter selected" id="nearestneighbor">Nearest Neighbor (Pixelated)</li>
<li class="filter" id="bilinear">Bilinear (Blurry)</li>
<li class="filter" id="smoothbilinear">Smooth Bilinear (Less blurry)</li>
<li class="filter" id="lcd">Monochrome LCD Display</li>
<li class="filter" id="crt">CRT Display</li>
<li class="filter" id="scale2x">Scale2x</li>
<li class="filter" id="scale4x">Scale4x</li>
<li class="filter" id="aascale2x">Anti-aliased Scale2x</li>
<li class="filter" id="aascale4x">Anti-aliased Scale4x</li>
<li class="filter" id="hq2x">HQ2x</li>
<li class="filter" id="omniscale">OmniScale</li>
<li class="filter" id="omniscalel">OmniScale Legacy</li>
<li class="filter" id="aaomniscalel">Anti-aliased OmniScale Legacy</li>
</ul>
<div class="samples">
<img class="sample" id="molemania" src="molemania.png" /><img class="sample" id="pokeyellow" src="pokeyellow.png" /><img class="sample" id="zelda" src="zelda.png" />
</div>
<img id="scaling-image" src="molemania_nearestneighbor.png" />
</div>

## General-purpose Scaling Filters
Common filters that were not made specifically for pixel art

### Nearest Neighbor
A simple pixelated scaling filter we all know and love. This is the default filter.

### Bilinear
An filter that fills "missing" pixels using a bilinear interpolation, creating a blurry image

### Smooth Bilinear
A variant of bilinear filtering that applies a smooth curve to the bilinear interpolation. The results look similar to the filter Apple uses when scaling non-Retina graphics for Retina Displays.

## Screen Simulation Filters

SameBoy includes three different filters that simulate different types of displays:
 * Monochrome LCD Display – simulates a monochrome LCD display (Ideal for the original Game Boy)
 * LCD Display - simulates a color LCD display (Ideal for Game Boy Color and Game Boy Advance)
 * CRT Display - simulates a television CRT display (Ideal for Super Game Boy)

## The ScaleNx Family
The ScaleNx family is a group of filters that scales pixel art by the specified factor using simple pattern-based rules. The Scale3x filter is not yet supported in SameBoy.

### Scale2x
The most simple filter of the family. It scales the image by a 2x factor without introducing new colors.

### Scale4x
This filter applies the Scale2x filter twice to scale the image by a 4x factor.

### Anti-aliased Scale2x
A variant of Scale2x exclusive to SameBoy that blends the Scale2x output with the Nearest Neighbor output. The specific traits of Scale2x makes this blend produce nicely looking anti-aliased output.

### Anti-aliased Scale4x
Another exclusive filter that works by applying the Anti-aliased Scale2x filter twice

## The HQnx Family
A relatively modern family of scaling filters that makes an extensive use of lookup tables to create scaled anti-aliased output. The HQnx family includes several scaling factors and variants.

### HQ2x
Currently HQ2x is the only HQnx filter in SameBoy. As the name implies, it scales the image by a factor of 2.

## The OmniScale filter
OmniScale is an exclusive filter developed for SameBoy. It is inspired by HQnx's lookup tables, but improves on them by handling more cases. OmniScale can scale an image by any factor, including non-integer factors, and produces high quality anti-aliased output.

## The OmniScale Legacy Family
An old prototype of the OmniScale filter. It combines pattern-based rules with a unique locally paletted bilinear filtering technique to scale an image by any factor, including non-integer factors. Its pattern-based rules do not currently detect 30- and 60-degree diagonals, making them look jaggy. The output OmniScale Legacy produces is quite unique, as it tends to produce non-trivial patterns.

### OmniScale Legacy
The base version of the filter, which generates aliased output with very few new colors introduced.

### Anti-aliased OmniScale Legacy
A variant of OmniScale that produces anti-aliased output using 2x super-sampling.
