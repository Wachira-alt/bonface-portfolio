# Bonface Opwoko — teaching portfolio

Next.js 16 + Tailwind 4. All content is in `lib/data.ts`.

```bash
pnpm install
pnpm dev
```

## Before launch

Every string in `lib/data.ts` starting with `TODO:` shows on the page as a yellow "To add" box, and every photo with an empty `src` shows as a striped "Photo to add" frame describing the shot.

- [ ] Teaching philosophy (About)
- [ ] Results: unit, comparison, earlier years, school's permission to publish
- [ ] Three resources (a worksheet or guide, a practical, a department initiative)
- [ ] Portrait → `public/images/`, set `portrait.src`
- [ ] Lab photo (3:2, students from behind or hands only) → `public/images/`, set `labPhoto.src`
- [ ] Resource PDFs → `public/resources/`, plus a first-page image (3:4) for each in `public/images/`
- [ ] Edited CV (no phone, TSC no., Specialist ID or referees) → `public/cv.pdf`, set `site.cvUrl`
- [ ] LinkedIn URL (optional)
- [ ] Domain → `site.url`
- [ ] Bonface approves all content
- [ ] Turn on indexing: `robots` in `app/layout.tsx` and `app/robots.ts`
