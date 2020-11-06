import { email, phoneNumber } from '../assets/constants';

export default function createHref(type, destination = null) {
    const isDestinationAvailable = Boolean(destination);
    const baseText = `Hi%2C+I%27m+looking+for+a+taxi`;

    let hrefValue = null;

    if (type === 'sms') {
        hrefValue = `sms:+${phoneNumber}&body=${baseText}`;
    }
    if (type === 'tel') {
        hrefValue = `tel:+${phoneNumber}`;
    }
    if (type === 'email') {
        hrefValue = `mailto:${email}`;
    }
    if (type === 'whatsApp') {
        hrefValue = isDestinationAvailable
            ? `https://wa.me/${phoneNumber}?text=${baseText}+to+go+to+${destination}`
            : `https://wa.me/${phoneNumber}?text=${baseText}`;
    }

    return hrefValue;
}
