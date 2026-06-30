import { Link } from "react-router-dom";
import { ROUTES } from "@/constants";
import "./style.css";

export default function ContactPage() {
  return (
    <div className="cgu">
      <div className="cgu_container">
        <Link to={ROUTES.HOME} className="cgu_back">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Retour
        </Link>

        <h1 className="cgu_title">Contact</h1>

        <div className="cgu_divider" />

        <div className="contact-content">
          <div className="contact-block">
            <h2 className="contact-label">Passer une commande</h2>
            <p className="contact-text">
              Pour commander une création ou un patron, envoyez-moi un email en
              précisant le modèle souhaité, la taille, la matière et la couleur.
              Je vous répondrai avec les disponibilités et les modalités de
              paiement.
            </p>

            <a
              href="mailto:triketi66@gmail.com?subject=Commande BunnyCrochet"
              className="contact-btn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Commander par email
            </a>
          </div>

          <div className="contact-block">
            <h2 className="contact-label">Commande personnalisée</h2>
            <p className="contact-text">
              Vous souhaitez une création dans des couleurs spécifiques, une
              taille particulière, ou un modèle sur mesure ? Contactez-moi pour
              en discuter — je ferai de mon mieux pour répondre à vos envies.
            </p>

            <a
              href="mailto:triketi66@gmail.com?subject=Commande personnalisée BunnyCrochet"
              className="contact-btn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Demander une personnalisation
            </a>
          </div>

          <div className="contact-block">
            <h2 className="contact-label">Une question ?</h2>
            <p className="contact-text">
              Pour toute question sur un produit, les délais, les matières ou la
              livraison, n'hésitez pas à consulter la{" "}
              <Link to={ROUTES.FAQ} className="contact-link">
                FAQ
              </Link>{" "}
              ou à m'écrire directement.
            </p>

            <a
              href="mailto:triketi66@gmail.com?subject=Question BunnyCrochet"
              className="contact-btn contact-btn--secondary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Poser une question
            </a>
          </div>

          <div className="contact-email-display">
            <span className="contact-email-label">Adresse email</span>
            <a
              href="mailto:triketi66@gmail.com"
              className="contact-email"
            >
              triketi66@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}