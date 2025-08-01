---
layout: page
permalink: /debugger/
group: Features
title: Textual Debugger Documentation
slideshow: true
---

The purpose of this page is to document the different commands of SameBoy's textual debugger and its general usage and syntax

 1. TOC
{:toc}

## General Usage

SameBoy's textual debugger is available in both the Cocoa and SDL ports, and allows advanced debugging of Game Boy ROMs. In the Cocoa port, the debugger can be access by enabling developer mode from the menu bar, and showing the console. In the SDL port, the debugger can be accessed by running SameBoy from the terminal, then it can be interacted with in the terminal. In the Windows SDL port, open the ROM with `sameboy_debugger.exe` instead of `sameboy.exe`.

In all versions, `^C` (Control + C) breaks the execution of the ROM and allows input of debugger commands. Some commands can be used asynchronously without stopping the execution.

## Command Syntax

Debugger commands begin with the command itself, followed optionally by a slash (`/`) and a modifier, and then followed optionally by a space and the argument.

For example, a command with no modifier and no argument:
```
continue
```

A command with a modifier and no argument:
```
disassemble/16
```

A command with an argument and no modifier:
```
print [de]
```

A command with both an argument and a modifier:
```
examine/64 hl
```

Commands may be truncated if not ambiguous (e.g. `p` instead of `print`) and might have aliases (`x` for `examine`)

### Expressions

All commands that use a number or address as an argument process the argument using an expression evaluator. Expressions can return 16-bit values or banked 25-bit addresses. The type of an expression affects the command that uses it. (For example, a breakpoint may be on a specific banked address, or every time `pc` reaches a specific value)

#### Constants

The most simple expression is a constant. Constants may be decimal numbers, hexadecimal numbers, or symbolic addresses. Decimal constants are simply written "as is" (e.g. `1024`); hexadecimal constants are prefixed with a dollar sign (e.g. `$400`). Symbolic constants are simply written by name (e.g. `PlayFXAnimID`) and always return a banked address.

#### Variables

An expression can include any of these variables, which return their values:

  * Any 16-bit register: `af`, `bc`, `de`, `hl`, `sp`; these return 16-bit values
  * Any 8-bit register: `a`, `f`, `b`, `c`, `d`, `e`, `h`, `l`; these return their 8-bit values, zero-padded to 16-bits
  * The `pc` register, which return a 25-bit banked address
  * The special variables `old` and `new` which may be used in watchpoint conditions
    
#### Dereferencing

Any 16-bit or 25-bit may be dereferenced using either square brackets (e.g. `[hl]`, `[2:$4000]`), to retrieve the 8-bit value at the specified address, zero-padded to 16-bit, or curly brackets (e.g. `{hl}`, `{2:$4000}`), to retrieve the the 16-bit value at the specified address.

#### Operators
 
Finally, expressions may be "joined" using operators. The return value depends on the operator, but is generally as follows:

 * Performing an operation on two 16-bit values return a 16-bit value
 * Performing an operation on a 16-bit value and a 25-bit address returns a 25-bit address
 * Performing an operation on two 25-bit address return a 16-bit value (Since adding, for example, pointers, has no meaning)
 * Boolean operations always return 16-bit bit values
    
The operators supported are:
 
 * `+`, `-`, `*`, `/`, `%` - The basic mathematical operators. Division or modulo by zero return zero.
 * `|`, `&`, `^` – Bitwise binary operators
 * `||`, `&&` – Boolean binary operators
 * `<<`, `>>` – Bitwise shift operators
 * `<=`, `<`, `>`, `>=`, `==`, `!=` – Boolean comparison operators
 * `=` – The assignment operator. The left side of the operator must be assignable: a register variable (e.g. `pc`, `d`) or a dereferenced value (e.g. `[de + 2]`). It returns the value of the left side after performing the write. When writing to hardware registers or the ROM, this might be different from the value written.
 * `:` – The bank operator. It can be used to cast or construct 25-bit addresses from 16-bit values. (e.g. `$c:$437a`, `a:hl`)
 
Operators are grouped into priority groups, like in classical mathematical order of operations. It is possible to use parentheses (`(` and `)`) to override the default order.

The priority groups are (First to last):

 * `:`
 * `<=`, `<`, `>`, `>=`, `==`, `!=`
 * `<<`, `>>`
 * `*`, `/`, `%`, `&`, `&&`, `^`
 * `+`, `-`, `|`, `||`
 * `=`

Note that this order is different than the standard order of operations in C and other languages.

## Commands

The information in this section is accessible inside SameBoy itself using the `help` command.

<table>
<tr><th><strong>c</strong>ontinue</th><td><p>Continue running until next stop</p><p>Usage: <code>continue</code></p></td></tr>
<tr><th><strong>i</strong>nterrupt</th><td><p>Interrupt the program execution</p><p>Usage: <code>interrupt</code></p></td></tr>
<tr><th><strong>res</strong>et</th><td><p>Reset the program execution. Add 'quick' as an argument to perform a quick reset that does not reset RAM. Add 'reload' as an argument to reload the ROM and symbols before resetting.</p><p>Usage: <code>reset [quick|reload]</code></p></td></tr>
<tr><th><strong>n</strong>ext</th><td><p>Run the next instruction, skipping over function calls</p><p>Usage: <code>next</code></p></td></tr>
<tr><th><strong>s</strong>tep</th><td><p>Run the next instruction, stepping into function calls</p><p>Usage: <code>step</code></p></td></tr>
<tr><th><strong>f</strong>inish</th><td><p>Run until the current function returns</p><p>Usage: <code>finish</code></p></td></tr>
<tr><th><strong>backs</strong>tep</th><td><p>Step one instruction backward, assuming constant inputs</p><p>Usage: <code>backstep</code></p><p>Alias: <code><strong>bs</strong></code></p></td></tr>
<tr><th><strong>u</strong>ndo</th><td><p>Revert the last command</p><p>Usage: <code>undo</code></p></td></tr>
<tr><th><strong>r</strong>egisters</th><td><p>Print values of processor registers and other important registers</p><p>Usage: <code>registers</code></p></td></tr>
<tr><th><strong>ba</strong>cktrace</th><td><p>Display the current call stack</p><p>Usage: <code>backtrace</code></p><p>Alias: <code><strong>bt</strong></code></p></td></tr>
<tr><th><strong>p</strong>rint</th><td><p>Evaluate and print an expression. Use modifier to format as an address (a) or as a number in decimal (d), hexadecimal (x), octal (o) or binary (b).</p><p>Usage: <code>print[/format] &lt;expression&gt;</code></p><p>Alias: <code><strong>ev</strong>al</code></p></td></tr>
<tr><th><strong>ex</strong>amine</th><td><p>Examine values at address</p><p>Usage: <code>examine[/count] &lt;expression&gt;</code></p><p>Alias: <code><strong>x</strong></code></p></td></tr>
<tr><th><strong>d</strong>isassemble</th><td><p>Disassemble instructions at address</p><p>Usage: <code>disassemble[/count] &lt;expression&gt;</code></p></td></tr>
<tr><th><strong>b</strong>reakpoint</th><td><p>Add a new breakpoint at the specified address/expression or range. Ranges are exclusive by default, unless "inclusive" is used. If the j modifier is used, the breakpoint will occur just before jumping to the target.</p><p>Usage: <code>breakpoint[/j] &lt;expression&gt; [to &lt;end expression&gt; [inclusive]] [if &lt;condition expression&gt;]</code></p></td></tr>
<tr><th><strong>de</strong>lete</th><td><p>Delete a breakpoint by its identifier, or all breakpoints</p><p>Usage: <code>delete [&lt;breakpoint id&gt;]</code></p></td></tr>
<tr><th><strong>w</strong>atch</th><td><p>Add a new watchpoint at the specified address/expression or range. Ranges are exclusive by default, unless "inclusive" is used. The default watchpoint type is write-only.</p><p>Usage: <code>watch[/(r|w|rw)] &lt;expression&gt; [to &lt;end expression&gt; [inclusive]] [if &lt;condition expression&gt;]</code></p></td></tr>
<tr><th><strong>unw</strong>atch</th><td><p>Delete a watchpoint by its identifier, or all watchpoints</p><p>Usage: <code>unwatch [&lt;watchpoint id&gt;]</code></p></td></tr>
<tr><th><strong>so</strong>ftbreak</th><td><p>Enable or disable software breakpoints ('ld b, b' opcodes)</p><p>Usage: <code>softbreak (on|off)</code></p></td></tr>
<tr><th><strong>l</strong>ist</th><td><p>List all set breakpoints and watchpoints</p><p>Usage: <code>list</code></p></td></tr>
<tr><th><strong>ti</strong>cks</th><td><p>Display the number of CPU ticks since the last time 'ticks' was used. Use 'keep' as an argument to display ticks without reseeting the count.</p><p>Usage: <code>ticks (keep)</code></p></td></tr>
<tr><th><strong>us</strong>age</th><td><p>Display CPU usage</p><p>Usage: <code>usage</code></p></td></tr>
<tr><th><strong>ca</strong>rtridge</th><td><p>Display information about the MBC and cartridge</p><p>Usage: <code>cartridge</code></p><p>Alias: <code><strong>mbc</strong></code></p></td></tr>
<tr><th><strong>apu</strong></th><td><p>Display information about the current state of the audio processing unit</p><p>Usage: <code>apu [channel (1-4, 5 for NR5x)]</code></p></td></tr>
<tr><th><strong>wav</strong>e</th><td><p>Print a visual representation of the wave RAM. Modifiers can be used for a (f)ull print (the default), a more (c)ompact one, or a one-(l)iner</p><p>Usage: <code>wave[/(f|c|l)] </code></p></td></tr>
<tr><th><strong>lcd</strong></th><td><p>Display information about the current state of the LCD controller</p><p>Usage: <code>lcd</code></p></td></tr>
<tr><th><strong>pal</strong>ettes</th><td><p>Display the current CGB palettes</p><p>Usage: <code>palettes</code></p></td></tr>
<tr><th><strong>dma</strong></th><td><p>Display the current OAM DMA status</p><p>Usage: <code>dma</code></p></td></tr>
<tr><th><strong>h</strong>elp</th><td><p>List available commands or show help for the specified command</p><p>Usage: <code>help [&lt;command&gt;]</code></p></td></tr>
</table>