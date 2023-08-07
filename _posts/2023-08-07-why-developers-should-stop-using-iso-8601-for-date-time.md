---
title: Why Developers Should Stop Using ISO 8601 for Date-Time
date: 2023-08-07T15:02:15.664Z
image: https://res.cloudinary.com/dljslvfla/image/upload/c_fill,f_auto,g_south,h_720,w_1280/v1691421054/kyrie-kim-jqxB3C0YNG0-unsplash_qkjqoe.jpg
excerpt: When documenting APIs, developers often link to ISO 8601 as the
  standard for computer-readable date and date-time format.  Dates and times
  (and time zones!) are complicated. There are so many edge cases and pitfalls.
  I’m sure every developer has a battle story about them. It’s good to delegate
  that hard work to somebody else. So when an international body that everybody
  knows and trusts publishes such a standard, it’s no surprise all the API
  designers start referring to it.
---
When documenting APIs, developers often link to **ISO 8601** as the standard for computer-readable date and date-time format.

Dates and times (and time zones!) are complicated. There are so many edge cases and pitfalls. I’m sure every developer has a battle story about them. It’s good to delegate that hard work to somebody else. So when an international body that everybody knows and trusts publishes such a standard, it’s no surprise all the API designers start referring to it.

This is what an **ISO 8601** date and date-times look like:

* `2023‐08‐07`
* `2023‐08‐07T13:25:38Z`

This is what we want to receive.

### The ISO allows too much variability and it’s paid to read

Do you know what is also a valid **ISO 8601** date-time?

* `2023-W32-1T15:38+02:00` (= Monday of the 32nd week in my local time zone)

How sure are you that your API will accept such a string? For example, JavaScript’s `Date.parse` will fail. There are many more allowed formats in the standard. And support for these is not guaranteed at all.

If you are thinking about creating a library that will understand all of them, I have bad news for you. There are four versions of the standard, released in the years 1988, 2000, 2004, and 2019, and they are not fully compatible with each other! Plus, you need to pay (about $190) to receive a copy of the standard.

Fortunately, there is a better way:

### **There are two better-suited (and free) standards**

In your documentation, refer to either of these two standards:

* **RFC 3339**
* **HTML** (who would’ve guessed?)

Each of those allows just a small variation of that date-time we want: allowing space instead of `T` or not providing some parts. To my knowledge, all of those variations are generally supported. Moreover, the standards are precise and free to read for anybody.

If you want to be truly strict, I’d also include the format like so:

* `RFC3339 date-time in %Y-%M-%DT%h:%m:%sZ format`

This is a very clear way to document your API.

### **Next time, just write RFC 3339 instead**

When you find yourself typing ISO 8601 in your code or documentation, just replace it with RFC 3339 and continue knowing you made dates a tiny bit easier for you and your API users.