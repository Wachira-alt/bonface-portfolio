# Bonface Opwoko — teaching portfolio

Next.js 16 + Tailwind 4. All content is in `lib/data.ts`, written from Bonface's CV (2026).

```bash
pnpm install
pnpm dev
```

Not published on purpose: phone number, TSC number, Cambridge Specialist ID, referees.

## Photos

- `public/images/` holds the photos. Licensed stock photos are listed with author and licence in `public/images/CREDITS.md` and credited in the site footer.
- The portrait shows Bonface's initials until a real photo is set in `portrait.src`.
- Never use photos of identifiable students without written consent.

## Before launch

- [ ] Bonface reviews and approves all content
- [ ] Real portrait of Bonface → `public/images/`, set `portrait.src`
- [ ] Optional: replace the stock lab photo with one taken at school
- [ ] CV without phone, TSC no. or referees → `public/cv.pdf`, set `site.cvUrl`
- [ ] Domain → `site.url`
- [ ] Turn on indexing: `robots` in `app/layout.tsx` and `app/robots.ts`
