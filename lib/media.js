/** Verified Unsplash photographs. Ids were checked before use. */
export function unsplash(id, width = 2000) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export const media = {
  hero: {
    src: unsplash("photo-1617814076367-b759c7d7e738", 2400),
    alt: "Matte black Mercedes-AMG GT parked by a harbour, with yachts and a hillside city behind it",
  },
  finale: {
    src: unsplash("photo-1583121274602-3e2820c69888", 2200),
    alt: "Red Ferrari LaFerrari parked in a bright white gallery",
  },
  story: {
    src: unsplash("photo-1631295868223-63265b40d9e4", 2000),
    alt: "White Rolls-Royce Wraith with a black roof, parked among palm trees",
  },
};
