import React from 'react';
import clsx from 'clsx';
import { CTALinkOrButton } from './CTALinkOrButton';

export type SectionProps = React.PropsWithChildren<{
  className?: string,
  title?: string,
  subtitle?: string | React.ReactNode,
  ctaText?: string,
  ctaUrl?: string,
}>;

export const Section: React.FC<SectionProps> = ({
  className, title, subtitle, ctaText, ctaUrl, children,
}) => {
  return (
    <div className={clsx('section w-full max-w-max-width min-w-min-width mx-auto overflow-y-scroll md:px-gutter px-gutter-sm my-8', className)}>
      <div className="section__title-container flex justify-between items-center gap-4">
        <div className="section__content flex-1">
          {title && (
            <h2 className={clsx(
              'section__title mb-4 relative',
              ctaText && ctaUrl
                ? 'after:w-4/5'
                : 'after:w-full',
            )}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="section__subtitle text-bluedot-darker text-md mb-4">{subtitle}</p>
          )}
        </div>
        {ctaText && ctaUrl && (
          <CTALinkOrButton
            variant="secondary"
            url={ctaUrl}
            withChevron
            className="section__cta shrink-0"
          >
            {ctaText}
          </CTALinkOrButton>
        )}
      </div>
      <div className="section__body">
        {children}
      </div>
    </div>
  );
};

export default Section;
