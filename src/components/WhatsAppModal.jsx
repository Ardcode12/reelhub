import { useWhatsApp } from '../context/WhatsAppContext';
import './WhatsAppModal.css';
import logo from '../images/IMG_5717.png';

export default function WhatsAppModal() {
  const { isOpen, message, closeWhatsAppModal } = useWhatsApp();

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('wa-modal')) {
      closeWhatsAppModal();
    }
  };

  // Replace this with the actual phone number
  const phoneNumber = '918754090246';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="wa-modal" onClick={handleBackdropClick}>
      <div className="wa-modal__card">
        <button className="wa-modal__close" onClick={closeWhatsAppModal} aria-label="Close modal">
          &times;
        </button>
        <div className="wa-modal__header">
          <img src={logo} alt="ReelHub Logo" className="wa-modal__logo" />
        </div>
        <div className="wa-modal__body">
          <h3 className="wa-modal__title">Complete Your Request via WhatsApp</h3>
          <p className="wa-modal__text">
            To ensure the fastest response and best personalized service, we handle all our project discussions and purchases directly through WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary wa-modal__cta"
            onClick={closeWhatsAppModal}
          >
            <span>Continue to WhatsApp</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.75 9h10.5M9 3.75L14.25 9 9 14.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
