import React from 'react';
import clsx from 'clsx';

type BaseProps = {
  className?: string;
  title?: React.ReactNode;
  titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  subtitle?: React.ReactNode;
  subtitleLevel?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  rightNode?: React.ReactNode;
};

export type SectionHeadingProps = BaseProps;
export type SectionProps = React.PropsWithChildren<BaseProps>;

export const SectionHeading: React.FC<BaseProps> = ({
  title, titleLevel = 'h2', subtitle, subtitleLevel = 'p', rightNode, className,
}) => {
  if (!title && !subtitle && !rightNode) return null;

  const HeadingTag = titleLevel;
  const SubtitleTag = subtitleLevel;
  return (
    <div className={clsx('section-heading__title-container flex justify-between items-center gap-space-between mb-6', className)}>
      <div className="section-heading__content flex-1 flex flex-col gap-2">
        {title && (
          // ml-[-0.08em] is here to make the title and subtitle look visually (but not actually)
          // aligned when there is a large difference in font sizes
          <HeadingTag className="section-heading__title relative ml-[-0.08em]">
            {title}
          </HeadingTag>
        )}
        {subtitle && (
          <SubtitleTag className="section-heading__subtitle text-bluedot-darker text-md">{subtitle}</SubtitleTag>
        )}
      </div>
      {rightNode}
    </div>
  );
};

export const Section: React.FC<SectionProps> = ({
  className, title, titleLevel = 'h2', subtitle, subtitleLevel = 'p', rightNode, children,
}) => {
  return (
    <section className={clsx('section section-body', className)}>
      <SectionHeading
        title={title}
        titleLevel={titleLevel}
        subtitle={subtitle}
        subtitleLevel={subtitleLevel}
        rightNode={rightNode}
      />
      <div className="section__body">
        {children}
      </div>
    </section>
  );
};
