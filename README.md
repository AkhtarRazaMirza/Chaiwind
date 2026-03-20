# Chai CSS ☕

Chai CSS is a small JavaScript project where I tried to create something like Tailwind.

Instead of writing CSS, we can use class names like:

* chai-p-2
* chai-bg-red
* chai-text-white

And JavaScript will automatically convert them into styles.

## 📌 How it works

1. When the page loads, the script runs
2. It selects all elements from the page
3. It checks their class names
4. If a class starts with `chai-`, it:

   * removes `chai-`
   * finds matching style in the `utilities` object
   * applies styles using JavaScript

Example:

chai-p-2 → padding: 8px
chai-bg-red → background-color: red

## 🧪 Example

html
<div class="chai-p-4 chai-bg-red chai-text-white">
  Hello World
</div>

This will become:

* padding: 16px
* background-color: red
* color: white

## 📦 Utilities Supported

Right now it supports:

* Padding (p-1 to p-5)
* Margin (m-1 to m-5)
* Font size (text-sm, text-lg, etc.)
* Font weight (font-bold, etc.)
* Colors (bg-red, text-white)
* Flex & Grid basics
* Width & Height
* Border & radius
* Position (relative, absolute)
* Display (block, flex, etc.)

## ⚠️ Limitations

* Only works with predefined values in the object
* No responsive support (like sm:, md:)
* No hover or active states
* Uses inline styles (not real CSS classes)

## 🚀 What I learned

* How to use `querySelectorAll`
* How to loop through elements and classes
* How to apply styles using JavaScript
* How utility-based CSS works

## 💡 Future improvements

* Add more utilities
* Add responsive support
* Add hover effects
* Generate real CSS instead of inline styles



## 🙌 Final Note

This is a beginner project made for learning.
It is not perfect, but it helped me understand how CSS frameworks work.

