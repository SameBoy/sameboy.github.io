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

In all versions, `^C` (Control + C) breaks the execution of the ROM and allows input of debugger commands. In both the Cocoa version and the SDL version when not running on Windows, some commands can be used asynchronously without stopping the execution.

## Command Syntax

Debugger commands being with the commands, followed optionally by a slash (`/`) and a modifier, and then followed optionally by a space and the argument.

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

All commands that use a number or address as an argument process the argument using a an expression evaluator. Expressions can return 16-bit values or banked 25-bit addresses. The type of an expression affects the command that uses it. (For example, a breakpoint may be on a specific banked address, or every time `pc` reaches a specific value)

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
 * `=` – The assignment operator. The left side of the operator must be assigned: a register variable (e.g. `pc`, `d`) or a dereferenced value (e.g. `[de + 2]`). It returns the value of the left side after performing the read. When writing to hardware registers or the ROM, this might be different from the value written. The right side of the operator is always truncated to an 8-bit value.
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

### continue
Continue running until next stop.

Usage: `continue`

### next
Run the next instruction, skipping over function calls.

Usage: `next`

### step
Run the next instruction, stepping into function calls.

Usage: `step`

### finish
Run until the current function returns.

Usage: `finish`

### backtrace
Display the current call stack.

Usage: `backtrace`

Aliases: `bt`

### sld
Like finish, but stops if a stack leak is detected (Experimental).

Usage: `sld`

### ticks
Display the number of CPU ticks since the last time `ticks` was used.

Usage: `ticks`

### registers
Print values of processor registers and other important registers.

Usage: `registers`

### cartridge
Displays information about the MBC and cartridge.

Usage: `cartridge`

Aliases: `mbc`

### apu
Displays information about the current state of the audio chip

Usage: `apu`

### wave
Prints a visual representation of the wave RAM. Modifiers can be used for a (f)ull print (the default), a more (c)ompact one, or a one-(l)iner.

Usage: `wave[/(f|c|l)]`

### lcd
Displays information about the current state of the LCD controller

Usage: `lcd`

### palettes
Displays the current CGB palettes.

Usage: `palettes`

### breakpoint
Add a new breakpoint at the specified address/expression. Can also modify the condition of existing breakpoints. If the j modifier is used, the breakpoint will occur just before jumping to the target.


Usage: `breakpoint[/j] <expression>[ if <condition expression>]`

### delete
Delete a breakpoint by its address, or all breakpoints.

Usage: `delete [<expression>]`

### watch
Add a new watchpoint at the specified address/expression. Can also modify the condition and type of existing watchpoints. Default watchpoint type is write-only.

Usage: `watch[/(r|w|rw)] <expression>[ if <condition expression>]`

### unwatch
Delete a watchpoint by its address, or all watchpoints.

Usage: `unwatch [<expression>]`

### list
List all set breakpoints and watchpoints

Usage: `list`

### print
Evaluate and print an expression. Use modifier to format as an address (a, default) or as a number in decimal (d), hexadecimal (x), octal (o) or binary (b).

Usage: `print[/format] <expression>`

Aliases: `eval`

### examine
Examine values at address.

Usage: `examine[/count] <expression>`

Aliases: `x`

### disassemble
Disassemble instructions at address.

Usage: `disassemble[/count] <expression>`

### help
List available commands or show help for the specified command.

Usage: `help [<command>]`

