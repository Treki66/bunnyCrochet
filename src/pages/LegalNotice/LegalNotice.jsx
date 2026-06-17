import { Link } from "react-router-dom";
import { ROUTES } from "@/constants";
import "../style.css";

export default function LegalNotice() {
  return (
    <div className="cgu">
      <div className="cgu_container">
        <Link to={ROUTES.HOME} className="cgu_back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Retour
        </Link>

        <h1 className="cgu_title">Mentions Légales</h1>
        <p className="cgu_meta">Dernière mise à jour : 10/06/2026</p>

        <div className="cgu_divider" />

        <section className="cgu_section">
          <h2>1. Éditeur du site</h2>
          <p>Le site BunnyCrochet est édité par :</p>
          <p>
            Tom TRIQUET<br />
            Particulier — activité non commerciale<br />
            Contact : <a href="mailto:triketi66@gmail.com" className="cgu_link">triketi66@gmail.com</a>
          </p>
        </section>

        <section className="cgu_section">
          <h2>2. Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <p>
            GitHub, Inc.<br />
            88 Colin P. Kelly Jr. Street<br />
            San Francisco, CA 94107 — États-Unis<br />
            Site web : <a href="https://pages.github.com" className="cgu_link" target="_blank" rel="noopener noreferrer">pages.github.com</a>
          </p>
        </section>

        <section className="cgu_section">
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur le site BunnyCrochet — textes, photographies, créations, patrons, logos et éléments graphiques — est la propriété exclusive de Tom TRIQUET et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de Tom TRIQUET.
          </p>
        </section>

        <section className="cgu_section">
          <h2>4. Données personnelles</h2>
          <p>
            Le site BunnyCrochet ne collecte aucune donnée personnelle de manière automatique. Aucun cookie de traçage, aucun outil d'analyse de trafic ni aucune base de données utilisateur ne sont utilisés.
          </p>
          <p>
            Les informations éventuellement transmises par email sont utilisées uniquement pour répondre à la demande de l'utilisateur et ne sont ni conservées, ni cédées à des tiers.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à l'adresse suivante : <a href="mailto:triketi66@gmail.com" className="cgu_link">triketi66@gmail.com</a>
          </p>
        </section>

        <section className="cgu_section">
          <h2>5. Cookies</h2>
          <p>
            Le site BunnyCrochet n'utilise aucun cookie de traçage ou publicitaire. Aucun dépôt de cookie n'est effectué lors de votre navigation sur ce site.
          </p>
        </section>

        <section className="cgu_section">
          <h2>6. Limitation de responsabilité</h2>
          <p>
            Tom TRIQUET s'efforce de maintenir les informations publiées sur le site aussi exactes et à jour que possible. Toutefois, il ne saurait être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour des contenus.
          </p>
          <p>
            Le site peut contenir des liens vers des sites tiers. Tom TRIQUET n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques.
          </p>
        </section>

        <section className="cgu_section">
          <h2>7. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  );
}