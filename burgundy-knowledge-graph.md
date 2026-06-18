# The Wine Knowledge Graph — Data Model

A schema for an interactive, semantically-zoomable wine map. Burgundy is the
first *instance*; the meta-schema is region-agnostic (Barolo, Champagne — even
whisky or coffee — plug into the same node/edge types).

**Design axiom:** the ontology is the product. The map, the radial mind-map, the
force-graph, and the comparison table are all just *views* rendered over this one
graph. Get the schema right and every visualization comes for free.

---

## 1. The three primitives

Everything is one of three things. The hardest discipline is deciding which.

| Primitive | What it is | Decision rule |
|---|---|---|
| **Node** | A thing you navigate *to* and that links to many others | Promote to a node if it links to 3+ other nodes, or you'd ever want to "land" on it |
| **Attribute** | A property that only describes one node | Keep as an attribute if it never links outward (e.g. a parcel's elevation in metres) |
| **Edge** | A *typed, directional* relationship between two nodes | The real intelligence lives here — see §3 |

---

## 2. Node types

Eight node types cover the whole domain. Each carries the **laddered content
payload** from §4.

1. **Place** — the spatial spine. Self-nesting via `within`/`contains`.
   Subtypes: `Region` → `Subregion` (Côte de Nuits) → `Commune` (Chambolle-Musigny)
   → `Climat`/`Lieu-dit` (Les Amoureuses) → `Parcel`.
2. **Classification** — appellation tier (`Regional`, `Village`, `1er Cru`, `Grand Cru`).
   A cross-cutting node so you can pivot "show me everything Grand Cru."
3. **Producer** — Domaine or Négociant.
4. **Wine** — a cuvée = *Producer × Climat* (e.g. "Roumier, Les Amoureuses").
5. **Vintage** — *Wine × Year*. **The buyable unit.** Market signals attach here.
6. **GrapeVariety** — Pinot Noir, Chardonnay, Aligoté…
7. **TerroirFactor** — the physical givens. Subtypes: `Soil`/`Geology`,
   `Topography` (aspect, slope, elevation), `Mesoclimate`.
8. **Technique** — human choices. Subtypes: `Viticulture` (e.g. plowing, yields),
   `Vinification` (whole-cluster %, new-oak %, élevage length).
9. **Descriptor** — the sensory + structural vocabulary. Subtypes: `Aroma`/`Flavor`
   (violet, forest floor), `Structure` (acidity, tannin, body), `Style`/`Archetype`
   (the emergent gestalt — "ethereal, perfumed, red-fruited").

> Market data (price band, score, scarcity, drinking window) are **attributes on
> `Vintage`**, not nodes — they describe one bottling and don't link outward.

---

## 3. Edge types — where the intelligence lives

Edges are **typed, directional, and carry their own payload** (a synthesized
sentence explaining the link, plus weight + confidence). Reciprocal names in
parentheses.

### Structural edges (the skeleton — always visible)
- `Place —within→ Place` (contains)
- `Place —classified_as→ Classification`
- `Climat —planted_with→ GrapeVariety`
- `Producer —farms→ Climat` *(attribute: ownership fraction — Clos de Vougeot has ~80 owners)*
- `Producer —produces→ Wine —from→ Climat`
- `Vintage —of→ Wine`

### Causal edges (the gold — revealed on demand)
This chain *is* the user's two equations made navigable:

```
TerroirFactor ──suits──▶ GrapeVariety
TerroirFactor ──expresses_as──▶ Descriptor      (limestone → "tension/saline")
Technique     ──influences──▶ Descriptor         (new oak → "vanilla, sweet spice")
Technique     ──influences──▶ Structure          (whole-cluster → "+structure, +grip")
Vintage       ──exhibits──▶ Descriptor / Structure
Style         ──characterized_by──▶ {Descriptor cluster}
```

Every causal edge gets a **`strength`** (0–1) and a **`confidence`** +
**`provenance`** tag (`expert-verified` vs `llm-synthesized`) so the UI can
distinguish established fact from generated synthesis.

---

## 4. The laddered content payload (powers semantic zoom)

Every node and every causal edge carries content at four **altitude bands**. The
renderer picks the band by zoom level — this is *semantic* zoom (content changes),
not scale zoom (same thing bigger).

| Band | Name | Content | Shown when |
|---|---|---|---|
| **L0** | Gist | label + 1 line | far out — the chip on the map |
| **L1** | Summary | ~80-word synthesized paragraph | mid-zoom — your "soil paragraph" |
| **L2** | Deep dive | multi-paragraph + sub-structure | zoomed in on one node |
| **L3** | Sources | citations, raw data, confidence | "show your work" panel |

Each node is also tagged with the **bands at which it should appear at all**, so a
`Parcel` never clutters the continent view.

---

## 5. The two lenses (your earlier frameworks, as views)

Same graph, two reading modes:

- **Recognition lens** (taste → source). Traverse causal edges *backward*:
  `Descriptor → Vintage → Producer → Climat → Classification`. This is the
  sommelier / inverse-inference path.
- **Buyer lens** (inputs → value). Color/size-encode `Vintage` nodes by the
  market attributes, and surface the **value gap**:

  ```
  intrinsic = f(TerroirFactor × Technique × Vintage-year)
            → {quality (peak height), character (style), ageability (when peak arrives)}
  price     = market's *perception* of intrinsic + scarcity + fashion
  VALUE GAP = intrinsic  −  price      ← the buyer's edge lives here
  decision  = drink (peak now) | hold (peak later, underpriced) | pass
  ```

  `ageability` drives a **maturation curve** attribute on `Vintage` (borrowed from
  bond glide-paths / athlete aging curves): peak height, time-to-peak, plateau width.

---

## 6. Worked example — one path through the graph

```
Place:Chambolle-Musigny ──contains──▶ Place:Les Amoureuses
   Les Amoureuses ──classified_as──▶ Classification:1er Cru
   Les Amoureuses ──planted_with──▶ Grape:Pinot Noir
   Les Amoureuses ──has(Terroir)──▶ Terroir:Limestone-rich, fine clay, mid-slope
        Terroir ──expresses_as (0.8, expert)──▶ Descriptor:silky tannin
        Terroir ──expresses_as (0.7, expert)──▶ Descriptor:violet / red-fruit
Producer:Roumier ──farms (0.4 ha)──▶ Les Amoureuses
   Roumier ──practices──▶ Technique:~30% whole-cluster
        Technique ──influences (0.6)──▶ Structure:+aromatic lift
   Roumier ──produces──▶ Wine:Roumier Les Amoureuses ──from──▶ Les Amoureuses
        Wine ──(vintage)──▶ Vintage:2019  {score, price-band, drink 2027–2045}
        Style:"ethereal, perfumed" ──characterized_by──▶ {silky tannin, violet, lift}
```

Read it forward → you *project* the wine (buyer lens). Read it backward from a
descriptor → you *attribute* the wine (recognition lens). Same edges.

---

## 7. Cross-cutting rules

1. **Typed, reciprocal edges** — every relationship has a name in both directions.
2. **Provenance on every claim** — `expert-verified` vs `llm-synthesized`, so the
   map can visually flag synthesis. LLM-authored L1/L2 payloads make the content
   cost feasible; this tag keeps it honest.
3. **Stable backbone, revealable links** — structural edges always render; causal
   edges light up only for the selected node. This is what defeats the "hairball."
4. **Band-tag every node** so semantic zoom knows when to reveal it.
5. **Region-agnostic meta-schema** — Burgundy is one dataset. The node/edge *types*
   are the reusable asset; swap the data to get Barolo, Champagne, or pivot the
   whole pattern to whisky (distillery=Producer, region=Place, cask=Technique).

---

## 8. Minimal storage shape

```jsonc
// node
{ "id": "climat:les-amoureuses", "type": "Place", "subtype": "Climat",
  "bands": ["L1","L2","L3"],
  "content": { "L0": "Les Amoureuses", "L1": "A 1er Cru...", "L2": "...", "L3": [/*sources*/] },
  "attrs": { "area_ha": 5.4, "elevation_m": 270, "aspect": "E" } }

// edge
{ "from": "terroir:amoureuses-soil", "to": "descriptor:silky-tannin",
  "type": "expresses_as", "strength": 0.8, "confidence": "expert-verified",
  "payload": "Fine clay over limestone gives the cru its hallmark silken texture." }
```

A graph DB (Neo4j) or even a flat `nodes.json` + `edges.json` is enough to start —
the front-end (tldraw / d3-force / a map tile layer) renders any view from it.
