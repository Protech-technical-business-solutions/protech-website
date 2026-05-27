import { getAllServices as getLocalizedServices } from '../../config/localization';

export default function getAllServices(locale) {
  return getLocalizedServices(locale);
}