# Control Flow – if / else (TMS Perspective)

## Purpose

Control flow allows a system to make decisions based on data.

## Key Rules

- Conditions evaluate to booleans
- Use === for comparisons
- Be explicit with null and undefined
- Avoid deep nesting
- Use clear variable names

## Common Interview Traps

- Using = instead of ===
- Trusting truthy/falsy values
- Ignoring missing data
- Writing unreadable nested logic

if (truckStatus !== "AVAILABLE") {
console.log("Truck is not available");
} else if (!driverIsActive) {
console.log("Driver is not active");
} else {
console.log("Ready to dispatch");
}

# Why this is better:

- Early rejection
- Clear reasoning
- Easy to debug
- Interview-safe

# Type coercion

JavaScript automatically converts one data type into another so an operation can happen.
There are two kinds:
Implicit coercion → JS does it for you (danger zone)
Explicit coercion → YOU do it on purpose (safe zone)

"10" - 5 // 5 ✅
"10" \* 2 // 20 ✅
"10" / 2 // 5 ✅

- - / ONLY make sense for numbers
    JS says: “Fine, I’ll convert the string to a number”

“Type coercion is JavaScript automatically converting values between types.
Truthy and falsy allow non-boolean values to control logic, but relying on them can cause silent bugs, especially in API validation and real production systems.”

# 6 falsy Value

false
0
"" // empty string
null = intentional
undefined = mistake or missing
NaN

Everything is truthy

# Operators

Operators make values do work
Arithmetic = math ( + - \ \* %)
Comparison = truth <> >= =<
Logical = decisions ||, &&
=== tells the truth
Parentheses remove doubt

=== checks value and type
!== checks inequality safely
&& = all conditions must pass <!-- (true && false ) = false -->
|| = any condition can pass <!-- (true || flase) = true -->

# Data types

String → text for humans <!-- const name = "JESSIE" -->
Number → math and calculations <!--  let age = 22 -->
Boolean → decisions (true / false) <!-- const programmer = true -->
undefined → never assigned <!-- let programmingKnowlege -->
null → intentionally empty <!-- const pet = null -->

Data types exist so JavaScript doesn’t guess.

# Variables (`let`, `const`)

A variable is a labeled box
const = cannot be reassigned <!-- const userName = "JESSIE" -->
let = can be reassigned <!-- let userAge = 22 -->
Use const by default
Variable names are communication # use a good variable names
