import React from 'react';
import clsx from 'clsx';

export type HeroMiniTitleProps = React.PropsWithChildren<{
  className?: string,
}>;

export const HeroMiniTitle: React.FC<HeroMiniTitleProps> = ({
  children, className,
}) => {
  return (
    <div className={clsx('hero-section__mini-title text-on-dark text-center uppercase tracking-wider text-sm font-semibold mb-4', className)}>{children}</div>
  );
};

export const HeroH1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children, className, ...otherProps
}) => {
  return (
    <h1 className={clsx('hero-section__title text-on-dark text-center', className)} {...otherProps}>{children}</h1>
  );
};

export const HeroH2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children, className, ...otherProps
}) => {
  return (
    <h2
      className={clsx('hero-section__subtitle text-on-dark text-2xl font-[400] text-center mt-4', className)}
      {...otherProps}
    >
      {children}
    </h2>
  );
};

type HeroCTAContainerProps = React.PropsWithChildren<{
  className?: string,
}>;

export const HeroCTAContainer: React.FC<HeroCTAContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx('flex justify-center mt-8', className)}>
      {children}
    </div>
  );
};

export type HeroSectionProps = React.PropsWithChildren<{
  className?: string,
}>;

export const HeroSection: React.FC<HeroSectionProps> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx('hero-section bg-bluedot-darker flex flex-row justify-center items-center w-full px-spacing-x', className)}>
      {/* Top margin is nav height (82px) */}
      <div className="hero-section__content max-w-[865px] mt-[82px] py-16">
        {children}
      </div>
    </div>
  );
};
