# Headings

```md
# Heading1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

# Bold

```md
**bold text**
```

# Italics

```md
_italic text_
```

# Bold and Italics

```md
**_bold and italic text_**
```

# Strikethrough

```md
~~asd~~
```

# Lists

## Unordered List

```md
- First list item

* Second list item

- Third list item
```

## Ordered List

```md
1. First list item
2. Second list item
3. Third list item
```

## Task List

```md
- [x] This is a completed task.
- [?] This is a completed task.
- [a] This is a completed task.
- [ ] This is an incomplete task.
```

## Nesting

```md
1. First list item
   1. Ordered nested list item
2. Second list item
   - Unordered nested list item
   - [x] completed task list item
   - [ ] incomplete task list item
```

# Links

```md
[text](url)
```

# Internal Links

```md
[[note-slug]]
```

# Images

```md
![alt text](url)
```

# Code

## Inline code

```md
`Code`
```

## Code block

````md
````language
code \n```
````
````

# Blockquote

```md
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.
```

# Horizontal Rule

```md
---

---

---

---

---

---

---

---

---
```

# Table

```md
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

# Footnotes

```md
This is a simple footnote[^1].

[^1]: This is the referenced text.
[^2]:
    Add 2 spaces at the start of each new line.
    This lets you write footnotes that span multiple lines.

[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.
```

```md
You can also use inline footnotes. ^[This is an inline footnote.]
```

# Highlight

```md
==highlight==
```

# Comments

```md
This is an %%inline%% comment.

%%
This is a block comment.

Block comments can span multiple lines.
%%
```

# Tags

```md
#tag
```

# Math

```md
$$
\begin{vmatrix}a & b\\
c & d
\end{vmatrix}=ad-bc
$$
```

```md
This is an inline math expression $e^{2i\pi} = 1$.
```

# Callouts

```md
> [!tip] Callouts can have custom titles > Like this one.
```

```md
> [!faq]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden when the callout is collapsed.
```

```md
> [!question] Can callouts be nested?
>
> > [!todo] Yes!, they can.
> >
> > > [!example] You can even use multiple layers of nesting.
```

## Types

```md
> [!note]
> Lorem ipsum dolor sit amet

> [!abstract]
> Lorem ipsum dolor sit amet

> [!info]
> Lorem ipsum dolor sit amet

> [!todo]
> Lorem ipsum dolor sit amet

> [!tip]
> Lorem ipsum dolor sit amet

> [!success]
> Lorem ipsum dolor sit amet

> [!question]
> Lorem ipsum dolor sit amet

> [!warning]
> Lorem ipsum dolor sit amet

> [!failure]
> Lorem ipsum dolor sit amet

> [!danger]
> Lorem ipsum dolor sit amet

> [!bug]
> Lorem ipsum dolor sit amet

> [!example]
> Lorem ipsum dolor sit amet

> [!quote]
> Lorem ipsum dolor sit amet
```

# Properties

```md
---
name: value
---

---

title: A New Hope # This is a text property
year: 1977
favorite: true
cast: # This is a list property

- Mark Hamill
- Harrison Ford
- Carrie Fisher

---

---

link: "[[Link]]"
linklist:

- "[[Link]]"
- "[[Link2]]"

---

---

year: 1977
pie: 3.14

---

---

favorite: true
reply: false
last: # this will default to false

---

date: 2020-08-21
time: 2020-08-21T10:30:00

---

---

{
"tags": "journal",
"publish": false
}

---
```
