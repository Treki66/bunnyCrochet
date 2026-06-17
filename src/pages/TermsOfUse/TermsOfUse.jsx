import { Link } from "react-router-dom";
import { ROUTES } from "@/constants";
import "../style.css";

export default function TermsOfUse() {
  return (
    <div className="cgu">
      <div className="cgu_container">
        <Link to={ROUTES.HOME} className="cgu_back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Retour
        </Link>

        <h1 className="cgu_title">Conditions Générales d'Utilisation</h1>
        <p className="cgu_meta">Dernière mise à jour : 29/05/2026</p>

        <div className="cgu_divider" />

        <section className="cgu_section">
          <h2>1. Objet</h2>
          <p>Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions d'accès et d'utilisation du site Bunny Crochet.</p>
          <p>En naviguant sur le site, l'utilisateur accepte pleinement et entièrement les présentes CGU.</p>
        </section>

        <section className="cgu_section">
          <h2>2. Présentation du site</h2>
          <p>Bunny Crochet est un site personnel et créatif présentant des créations et patrons de crochet. Il s'agit d'un site à vocation strictement informative et non commerciale.</p>
        </section>

        <section className="cgu_section">
          <h2>3. Accès au site</h2>
          <p>Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Tous les coûts liés à l'accès au service (matériel, connexion Internet, etc.) sont à la charge de l'utilisateur.</p>
          <p>Bunny Crochet se réserve le droit de modifier, suspendre ou interrompre l'accès au site sans préavis.</p>
        </section>

        <section className="cgu_section">
          <h2>4. Absence de services commerciaux</h2>
          <p>Le site Bunny Crochet ne propose aucune vente de produits ou services. Aucune transaction financière n'est réalisée via la plateforme.</p>
        </section>

        <section className="cgu_section">
          <h2>5. Données personnelles</h2>
          <p>Le site ne collecte, ne stocke et ne traite aucune donnée personnelle des utilisateurs.</p>
          <p>Aucun compte utilisateur n'est requis et aucune base de données n'est utilisée pour stocker des informations personnelles.</p>
        </section>

        <section className="cgu_section">
          <h2>6. Formulaire de contact</h2>
          <p>Un formulaire de contact peut être mis à disposition des utilisateurs. Les informations transmises sont utilisées uniquement pour répondre aux demandes et ne sont ni conservées ni réutilisées à des fins commerciales.</p>
        </section>

        <section className="cgu_section">
          <h2>7. Propriété intellectuelle</h2>
          <p>L'ensemble des contenus présents sur le site (textes, images, créations, logos, éléments graphiques) est protégé par le droit de la propriété intellectuelle.</p>
          <p>Toute reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite.</p>
        </section>

        <section className="cgu_section">
          <h2>8. Responsabilité</h2>
          <p>Bunny Crochet s'efforce de fournir des informations exactes et à jour. Toutefois, aucune garantie n'est apportée quant à l'exactitude, la complétude ou la mise à jour des contenus.</p>
          <p>L'utilisateur est seul responsable de l'utilisation qu'il fait du site.</p>
        </section>

        <section className="cgu_section">
          <h2>9. Liens externes</h2>
          <p>Le site peut contenir des liens vers des sites tiers. Bunny Crochet ne peut être tenu responsable du contenu ou des pratiques de ces sites externes.</p>
        </section>

        <section className="cgu_section">
          <h2>10. Modification des CGU</h2>
          <p>Bunny Crochet se réserve le droit de modifier les présentes CGU à tout moment. L'utilisateur est invité à les consulter régulièrement.</p>
        </section>
      </div>
    </div>
  );
}