import { useContext } from 'react';
import MyContext from '../config/contextFile';

/**
 * PERTECH lockup: triangle mark + wordmark (Arabic wordmark when the site is in Arabic).
 * variant="light" swaps the charcoal parts to white for dark backgrounds.
 */
export default function BrandLogo({ variant = 'dark', showTagline = true, className = '' }) {
  const { isArabic, t } = useContext(MyContext);
  const suffix = variant === 'light' ? '-light' : '';
  const wordmark = isArabic ? `/brand/wordmark-ar${suffix}.png` : `/brand/wordmark-en${suffix}.png`;

  return (
    <span className={`brand-logo brand-logo--${variant} ${className}`}>
      <img className="brand-logo__icon" src={`/brand/icon${suffix}.png`} alt="" aria-hidden="true" />
      <span className="brand-logo__text">
        <img className={`brand-logo__word ${isArabic ? 'brand-logo__word--ar' : ''}`} src={wordmark} alt={t('brand.short')} />
        {showTagline && <span className="brand-logo__tagline">{t('brand.tagline')}</span>}
      </span>
    </span>
  );
}
