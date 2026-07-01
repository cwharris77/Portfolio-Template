import { describe, it, expect } from "vitest";
import { getAdjacentSlugs } from "./getAdjacentSlugs";

const list = [{ slug: "a" }, { slug: "b" }, { slug: "c" }];

describe("getAdjacentSlugs", () => {
  it("returns neighbors in the middle", () => {
    expect(getAdjacentSlugs("b", list)).toEqual({ prev: "a", next: "c" });
  });
  it("does not wrap at the ends", () => {
    expect(getAdjacentSlugs("a", list)).toEqual({ prev: null, next: "b" });
    expect(getAdjacentSlugs("c", list)).toEqual({ prev: "b", next: null });
  });
  it("returns nulls for an unknown slug", () => {
    expect(getAdjacentSlugs("z", list)).toEqual({ prev: null, next: null });
  });
});
