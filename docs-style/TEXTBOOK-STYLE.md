# Textbook style

The textbook style formats the body of a guide like a college textbook: numbered sections, a margin column for side notes and figure captions, numbered figures and tables, and shaded callouts. It applies to docs whose front matter has `textbook: true`. The navbar, sidebar, breadcrumbs and pagination around the article keep their layout.

Colours, fonts and shapes come from the ConCat platform (`ConventionCatCorp/ConCat`, `src/frontend/styles/variables.scss` and `src/frontend/index.html`) and apply to the whole site. The layout and hierarchy come from the reference document `concat-oauth-proposal.docx`.

Implementation: tokens in `src/css/_tokens.scss` (ramps in `src/css/_variables.scss`), article styles in `src/css/_textbook.scss`, components in `src/components/`, and the `textbook` switch in `src/theme/DocItem/Content/index.tsx`.

## Tokens

### Colour

| Token | Light | Dark | Colours |
| --- | --- | --- | --- |
| `--ifm-color-primary` | `#0670ad` | `#60c6e6` | Links and active navigation. Infima's six hover/active shades are derived from it. |
| `--cc-color-text` | `#212529` | `#dee2e6` | Body text |
| `--cc-color-text-muted` | `#42526e` | `#a0b6d3` | Lede, captions, margin notes, results, second lines in table cells |
| `--cc-color-heading` | `#045794` | `#60c6e6` | Title and numbered headings |
| `--cc-color-label` | `#03417c` | `#97e5f6` | Figure, table and margin-note labels |
| `--cc-color-step` | `#0670ad` | `#38a0cd` | Step badges, section numbers, list bullets |
| `--cc-color-on-step` | `#ebecf0` | `#070e2a` | Number inside a step badge |
| `--cc-color-rule` | `#cadcf0` | `#303f5e` | Table row hairlines, card and screenshot borders |
| `--cc-color-rule-soft` | `#a0b6d3` | `#7589a8` | Margin-column rule |
| `--cc-color-rule-strong` | `#045794` | `#03417c` | Table header row and the rules above and below a table |
| `--cc-color-on-strong` | `#ffffff` | `#ffffff` | Table header text |
| `--cc-color-surface-tint` | `#f7f8f9` | white at 4% | Banded table rows |
| `--cc-color-marker` | `#bc1d28` | `#bc1d28` | Figure markers and their caption numbers |
| `--cc-color-result` | `#0e8012` | `#67d04c` | Result label |

Callouts use a tinted background, a left rule and a label colour per kind (light theme shown; dark uses the same ramps at low opacity):

| Kind | Background | Rule | Label |
| --- | --- | --- | --- |
| `note` | `#f7f8f9` | `#7589a8` | `#303f5e` |
| `info` | `#e3eef7` | `#0670ad` | `#03417c` |
| `tip` | `#e3fbd0` | `#199914` | `#086714` |
| `caution`, `warning` | `#fff5cd` | `#b77102` | `#7a4300` |
| `danger` | `#fde2d4` | `#bc1d28` | `#7f0d28` |

### Type

| Token | Value |
| --- | --- |
| `--cc-font-text` | Armata, then the system sans-serif stack. All text. |
| `--cc-font-display` | Krona One. The site wordmark, guide titles, section numbers and labels. |

Both faces have one weight (400). Headings use size and colour for rank and are never bold.

| Role | Size / line height | Face |
| --- | --- | --- |
| Title | up to 2.25rem / 1.25 | display |
| Lede | 1.125rem / 1.55 | text, muted |
| Section heading | 1.5rem / 1.3, number at 0.75em | text, number in display |
| Subsection heading | 1.125rem / 1.3, number at 0.75em | text, number in display |
| Minor heading | 1rem | text |
| Body | 0.9375rem / 1.7 | text |
| Callout body | 0.875rem / 1.6 | text |
| Table | 0.8125rem / 1.5 | text |
| Caption, margin note, result | 0.8125rem / 1.55 | text |
| Labels | 0.625 to 0.6875rem, letter-spaced | display |

### Spacing

| Token | Value | Spaces |
| --- | --- | --- |
| `--cc-space-1` | 0.25rem | List items, label to text |
| `--cc-space-2` | 0.5rem | Caption parts, gap after a result |
| `--cc-space-3` | 0.75rem | Paragraphs, steps, callout padding (vertical), margin-note padding |
| `--cc-space-4` | 1rem | Callout padding (horizontal), margin notes |
| `--cc-space-5` | 1.5rem | Above and below callouts, figures and tables; after the lede |
| `--cc-space-6` | 2rem | Above a subsection heading |
| `--cc-space-7` | 2.75rem | Above a section heading |

### Shape

| Token | Value | Shapes |
| --- | --- | --- |
| `--cc-radius` | 0.375rem | Cards, screenshots, figure marker outlines, the right-hand corners of callouts |
| `--cc-shadow-sm` | `0 0.125rem 0.25rem rgb(0 0 0 / 7.5%)` | Screenshot frame |
| `--cc-shadow` | `0 0.25rem 1rem rgb(48 55 66 / 15%)` | Card on hover |

Fixed shapes: callout left rule 4px; margin-column rule 1px; table rules 2px (outer) and 1px (rows); step badge 1.75rem circle; figure marker badge 1.375rem circle; marker outline 2px.

### Layout

| Token | Value | Sets |
| --- | --- | --- |
| `--tb-margin-col` | `clamp(12rem, 27cqi, 17rem)` | Width of the margin column |
| `--tb-gutter` | `clamp(1.25rem, 2.5cqi, 2rem)` | Gap between main and margin columns |
| `$textbook-wide` | 50rem | Article width at which the margin column appears |

At `$textbook-wide` and above, the article has a main column and a margin column (about 71 / 2 / 27 of its width). Callouts, figures and tables span both columns. Below it, the article is one column and margin items sit inline.

## Elements

| Element | What it does | Write it as | Rendered by |
| --- | --- | --- | --- |
| Textbook page | Turns on the textbook layout for one doc | `textbook: true` in front matter | `src/theme/DocItem/Content` adds `.textbook`; `src/css/_textbook.scss` |
| Title | Names the guide | `# Title` | `.markdown > header > h1` |
| Lede | Says in one or two sentences what the guide helps you do | The first paragraph after the title | `.markdown > header + p` |
| Byline, running head, page numbers | Show where the page sits and what comes next | Nothing to write | Docusaurus breadcrumbs, sidebar and previous/next links |
| In this guide | Lists what the guide covers, by section number | `:::info[In this guide]` | `.theme-admonition` |
| Section | Starts numbered section N | `## Heading` | `.markdown > h2`, counter `tb-section` |
| Subsection | Starts numbered subsection N.M | `### Heading` | `.markdown > h3`, counter `tb-subsection` |
| Minor heading | Labels a short run of text, unnumbered | `#### Heading` | `.markdown > h4` |
| Body text | Explains | Paragraphs | `.textbook .markdown` |
| Bulleted list | Lists items in no particular order | `- item` | `.markdown ul > li` |
| Procedure | Lists steps to do in order, each in a numbered badge | A top-level `1.` list | `.markdown > ol`, counter `tb-step` |
| Result | States what the reader should see once a step has worked | `<Result>…</Result>`, indented under its step after a blank line | `Result.tsx` |
| On-screen label | Gives the exact text of a menu item, button, field or message | `**Label**` | `strong` |
| Menu path | Gives the items to click in turn | `**Housekeeping › Registration › Options**` (`›` is U+203A) | `strong` |
| Margin note | Adds a side detail beside the text that follows it | `<Sidenote title="…">…</Sidenote>`, placed before that text | `Sidenote.tsx` |
| Key idea | States the idea to take away from a section | `:::info[Key idea]` | `.theme-admonition` |
| Watch out | Warns of something that can go wrong or can't be undone | `:::caution[Watch out]` | `.theme-admonition` |
| Tip | Gives a quicker or better way | `:::tip[Title]` | `.theme-admonition` |
| Note | Gives extra detail the reader can skip | `:::note[Title]` | `.theme-admonition` |
| Danger | Warns of a step that can lose data or money | `:::danger[Title]` | `.theme-admonition` |
| Figure | Shows a screenshot as Figure N.M, with its caption in the margin column | `<Figure src alt title markers width>` with the caption as children | `Figure.tsx`, counter `tb-figure` |
| Figure marker | Outlines an area of a screenshot and numbers it | `{ n, x, y, w, h }` in `markers`, in percent of the image; omit `w` and `h` for a single badge | `Figure.tsx` |
| Marker note | Explains marker *n* | Item *n* of a `1.` list inside the `Figure` | `.caption ol`, counter `tb-callout` |
| Table | Shows a table as Table N.M, with its caption above | `<TableFigure title="…">`, a blank line, a Markdown table, a blank line, `</TableFigure>` | `TableFigure.tsx`, counter `tb-table`; `.markdown table` |
| Second line in a cell | Adds a detail under a cell's main text, such as where a setting lives | `Text <small>detail</small>` | `.markdown table td small` |
| Link card | Links to another guide with an icon and a summary | `<SplitColumn>` of `<BigButton to title icon>` | `BigButton.tsx` |
| Cross-reference | Points to a section, figure or table | Plain text, e.g. "section 2", "Figure 2.1", "Table 1.1" | Numbers come from the counters above |

Component names are case-sensitive: `<SplitColumn>` renders the component, `<splitColumn>` renders an unknown HTML element. Figure and table numbers restart at each section.

## Page skeleton

```mdx
---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Guide title

One or two sentences on what this guide helps you do.

:::info[In this guide]
What section 1 covers (section 1), and what section 2 covers (section 2).
:::

## First section

<Sidenote title="Lead-in">
A side detail.
</Sidenote>

Body text.

1. Go to **Housekeeping › Registration › Options**.

   <Result>The **Options** page opens.</Result>

2. Click **Create New Option**.

   <Result>The **Creating Option** form opens.</Result>

<Figure src="/img/area/screenshot.png" alt="What the screenshot shows." title="Caption title" markers={[{ n: 1, x: 2, y: 30, w: 47, h: 15 }]}>

1. What marker 1 points at.

</Figure>
```
