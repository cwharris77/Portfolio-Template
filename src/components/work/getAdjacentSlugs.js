export function getAdjacentSlugs(slug, list) {
  const i = list.findIndex((w) => w.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? list[i - 1].slug : null,
    next: i < list.length - 1 ? list[i + 1].slug : null,
  };
}
