# Photo credits

Licensed stock photos used on the site. Keep this file up to date, and keep the
footer credit (`labPhoto.credit` in lib/data.ts) — both licences below require attribution.

## Lab photo — pick one, save it here as `lab.jpg`

Download the original from the file page ("Download" button), resize to ~2000px wide.

1. **Laboratory for High School Science, Addis Ababa** — RNLockwood, CC BY-SA 4.0
   https://commons.wikimedia.org/wiki/File:Laboratory_for_High_School_Science,_Addis_Ababa.jpg
2. **Laboratory equipment of modern chemistry classroom** — Belikov Maxim, CC BY 4.0
   https://commons.wikimedia.org/wiki/File:Laboratory_equipment_of_modern_chemistry_classroom.jpg
3. **Science Lab at Regent's International School Bangkok** — TheRegentsInternationalSchoolBangkok, CC BY-SA 4.0
   https://commons.wikimedia.org/wiki/File:Science_Lab_at_Regent%27s_International_School_Bangkok.jpg

Then set in lib/data.ts, e.g. for option 2:

```ts
export const labPhoto: Photo = {
  src: "/images/lab.jpg",
  alt: "School chemistry laboratory with glassware on the benches",
  credit: {
    text: "Belikov Maxim, CC BY 4.0, via Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Laboratory_equipment_of_modern_chemistry_classroom.jpg",
  },
};
```

The photo then appears under the About text and the credit in the footer.
