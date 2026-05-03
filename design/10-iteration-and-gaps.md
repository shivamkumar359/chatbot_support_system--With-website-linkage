
## Iteration Guide

1. Focus on ONE component at a time
2. Reference component names and tokens directly
3. Run `npx @google/design.md lint DESIGN.md` after edits
4. Add new variants as separate `components:` entries
5. Default to `{typography.body-md}` for body and `{typography.subtitle}` for emphasis
6. Keep `{colors.brand-yellow}` confined to wordmark, promo banner, and yellow-tag chips
7. Pill-shaped buttons (`{rounded.full}`) always
8. When showing the product, use a real Miro-board mockup with sticky-note color tints

## Known Gaps

- Specific dark-mode token values not surfaced
- Animation/transition timings not extracted; recommend 150–200ms ease
- Form validation success state not explicitly captured beyond defaults
- Sticky note color tints inside the actual whiteboard product are richer than what marketing surfaces capture
