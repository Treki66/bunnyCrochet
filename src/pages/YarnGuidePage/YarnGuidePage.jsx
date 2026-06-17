import { Link } from "react-router-dom";
import { ROUTES } from "@/constants";
import "./style.css";

const COLORS_3MM = [
  { name: "Blanc", hex: "#ffffff" },
  { name: "Noir", hex: "#1a1a1a" },
  { name: "Gris clair", hex: "#d0d0d0" },
  { name: "Beige", hex: "#e8d5b0" },
  { name: "Rose poudré", hex: "#f2c4ce" },
  { name: "Rouge", hex: "#d63031" },
  { name: "Bleu ciel", hex: "#74b9ff" },
  { name: "Bleu marine", hex: "#2d3561" },
  { name: "Vert sauge", hex: "#a8c5a0" },
  { name: "Jaune", hex: "#ffeaa7" },
  { name: "Orange", hex: "#e17055" },
  { name: "Lilas", hex: "#d4b8f0" },
  { name: "Marron", hex: "#8b5e3c" },
];

const COLORS_6MM = [
  { name: "Blanc", hex: "#ffffff" },
  { name: "Noir", hex: "#1a1a1a" },
  { name: "Gris clair", hex: "#d0d0d0" },
  { name: "Rose poudré", hex: "#f2c4ce" },
  { name: "Bleu ciel", hex: "#74b9ff" },
  { name: "Bleu marine", hex: "#2d3561" },
  { name: "Vert", hex: "#55efc4" },
  { name: "Jaune", hex: "#ffeaa7" },
  { name: "Lilas", hex: "#d4b8f0" },
];

const YARNS = [
  {
    id: "coton",
    name: "Coton",
    tagline: "Doux, résistant et hypoallergénique",
    sizes: ["3mm"],
    tags: ["Bébés", "Enfants", "Lavable"],
    description:
      "Le coton est un fil naturel, léger et respirant. Il est idéal pour les créations destinées aux bébés et aux jeunes enfants, car il est doux sur la peau, résistant au lavage et hypoallergénique. Ses fibres naturelles lui confèrent une texture légèrement structurée qui met en valeur les points de crochet et les détails des créations.",
    properties: [
      { label: "Matière", value: "100% coton naturel" },
      { label: "Épaisseur", value: "3mm" },
      { label: "Texture", value: "Légèrement structurée" },
      { label: "Lavage", value: "À la main, eau tiède" },
      { label: "Âge recommandé", value: "Dès la naissance" },
    ],
    pros: [
      "Hypoallergénique — idéal pour les peaux sensibles",
      "Résistant et durable dans le temps",
      "Met en valeur les détails du crochet",
      "Séchage rapide à l'air libre",
      "Coloris nets et lumineux",
    ],
    cons: [
      "Moins moelleux et doux que la chenille",
      "Peut rétrécir légèrement au lavage chaud",
    ],
    bestFor: "Les peluches pour bébés, les créations destinées à être manipulées souvent, et les personnes ayant des allergies aux fibres synthétiques.",
    color: "#e8d5b0",
    textColor: "#7a5c2e",
  },
  {
    id: "chenille",
    name: "Chenille",
    tagline: "Ultra-douce, moelleuse et irrésistible",
    sizes: ["3mm", "6mm"],
    tags: ["Tout âge", "Décoratif", "Extra-doux"],
    description:
      "La chenille est un fil synthétique à poils courts qui donne aux créations une texture incroyablement douce et veloutée. Elle est reconnaissable à son aspect légèrement duveteux qui rend chaque peluche encore plus câline. Disponible en 3mm pour des créations plus détaillées et en 6mm pour des pièces plus grandes et encore plus moelleuses.",
    properties: [
      { label: "Matière", value: "Polyester" },
      { label: "Épaisseur", value: "3mm et 6mm" },
      { label: "Texture", value: "Veloutée et duveteuse" },
      { label: "Lavage", value: "À la main, eau froide" },
      { label: "Âge recommandé", value: "Dès la naissance" },
    ],
    pros: [
      "Texture ultra-douce et agréable au toucher",
      "Aspect duveteux très esthétique",
      "Disponible en deux épaisseurs",
      "Rendu visuel généreux et moelleux",
      "Parfaite pour les gros câlins",
    ],
    cons: [
      "Plus délicate à l'entretien que le coton",
      "Les détails fins sont moins visibles",
      "Peut pelucher légèrement avec le temps",
    ],
    bestFor: "Les peluches décoratives, les coussins, et toutes les créations où le confort et la douceur sont prioritaires.",
    color: "#d4b8f0",
    textColor: "#6b3fa0",
  },
];

const SIZES = [
  {
    size: "3mm",
    title: "Petite taille — 3mm",
    description:
      "Les créations en 3mm sont plus compactes, avec des détails plus fins et précis. Elles sont parfaites pour les porte-clés, les petites peluches et toutes les créations qui nécessitent de la minutie.",
    dimensions: "Hauteur approximative : 10 à 20 cm selon le modèle",
    price: "À partir de 5€",
  },
  {
    size: "6mm",
    title: "Grande taille — 6mm",
    description:
      "Les créations en 6mm sont plus grandes, plus généreuses et encore plus câlines. Le fil plus épais donne un aspect visuel plus moelleux et une prise en main plus confortable.",
    dimensions: "Hauteur approximative : 20 à 35 cm selon le modèle",
    price: "À partir de 15€",
  },
];

export default function YarnGuidePage() {
  return (
    <div className="yarn-guide">
      <Link to={ROUTES.HOME} className="cgu_back">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Retour
      </Link>

      <h1 className="yarn-guide_title">Guide des matières</h1>
      <p className="yarn-guide_subtitle">
        Tout ce que vous devez savoir sur les fils utilisés pour confectionner les créations BunnyCrochet — pour choisir la matière qui vous correspond.
      </p>

      <div className="cgu_divider" />

      <div className="yarn-cards">
        {YARNS.map((yarn) => (
          <div key={yarn.id} className="yarn-card">
            <div className="yarn-card_header" style={{ background: yarn.color }}>
              <div className="yarn-card_header_text">
                <div className="yarn-card_sizes">
                  {yarn.sizes.map((s) => (
                    <span key={s} className="yarn-size-tag" style={{ color: yarn.textColor, borderColor: yarn.textColor }}>
                      {s}
                    </span>
                  ))}
                </div>
                <h2 className="yarn-card_name" style={{ color: yarn.textColor }}>{yarn.name}</h2>
                <p className="yarn-card_tagline" style={{ color: yarn.textColor }}>{yarn.tagline}</p>
              </div>
              <div className="yarn-card_tags">
                {yarn.tags.map((tag) => (
                  <span key={tag} className="yarn-tag" style={{ color: yarn.textColor, borderColor: `${yarn.textColor}40` }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="yarn-card_body">
              <p className="yarn-card_description">{yarn.description}</p>

              <div className="yarn-card_cols">
                <div className="yarn-properties">
                  <h3 className="yarn-section-label">Propriétés</h3>
                  <div className="yarn-properties_list">
                    {yarn.properties.map((prop) => (
                      <div key={prop.label} className="yarn-property-row">
                        <span className="yarn-property-label">{prop.label}</span>
                        <span className="yarn-property-value">{prop.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="yarn-pros-cons">
                  <div>
                    <h3 className="yarn-section-label">Avantages</h3>
                    <ul className="yarn-list yarn-list--pro">
                      {yarn.pros.map((pro) => (
                        <li key={pro}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="yarn-section-label">Points d'attention</h3>
                    <ul className="yarn-list yarn-list--con">
                      {yarn.cons.map((con) => (
                        <li key={con}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="yarn-bestfor">
                <span className="yarn-section-label">Idéal pour — </span>
                <span className="yarn-bestfor_text">{yarn.bestFor}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cgu_divider" />

      <h2 className="yarn-sizes_title">Les épaisseurs disponibles</h2>
      <p className="yarn-sizes_subtitle">L'épaisseur du fil détermine la taille et l'aspect final de la création.</p>

      <div className="yarn-sizes">
        {SIZES.map((size) => (
          <div key={size.size} className="yarn-size-card">
            <div className="yarn-size-badge">{size.size}</div>
            <div className="yarn-size-content">
              <h3 className="yarn-size-title">{size.title}</h3>
              <p className="yarn-size-description">{size.description}</p>
              <div className="yarn-size-meta">
                <span className="yarn-size-meta-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                  {size.dimensions}
                </span>
                <span className="yarn-size-meta-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M14.5 9a3.5 3.5 0 1 0 0 6"/>
                  </svg>
                  {size.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cgu_divider" />

      <h2 className="yarn-colors_title" id="couleurs">Les couleurs disponibles</h2>
      <p className="yarn-colors_subtitle">Les couleurs présentées ci-dessous sont disponibles en stock. D'autres teintes peuvent être commandées sur demande.</p>

      <div className="yarn-colors">
        <div className="yarn-color-section">
          <h3 className="yarn-section-label">3mm coton & 3mm chenille</h3>
          <div className="yarn-color-grid" id="couleurs-3mm">
            {COLORS_3MM.map((color) => (
              <div key={color.name} className="yarn-color-item">
                <div className="yarn-color-swatch" style={{ background: color.hex }} />
                <span className="yarn-color-name">{color.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="yarn-color-section">
          <h3 className="yarn-section-label">6mm chenille</h3>
          <div className="yarn-color-grid" id="couleurs-6mm">
            {COLORS_6MM.map((color) => (
              <div key={color.name} className="yarn-color-item">
                <div className="yarn-color-swatch" style={{ background: color.hex }} />
                <span className="yarn-color-name">{color.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}