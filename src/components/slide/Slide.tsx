import clsx from 'clsx';
import { ReactNode } from 'react';
import './slide.css';

type SlideContainerProps = {
  children?: ReactNode;
};

export function SlideContainer({ children }: SlideContainerProps) {
  return <div className="slide__container">{children}</div>;
}

type SlideProps = {
  className?: string;
  isWide?: boolean;
  children?: ReactNode;
};

export function Slide({ className, isWide, children }: SlideProps) {
  return (
    <div className={clsx('slide', isWide && 'slide--wide', className)}>
      {children}
    </div>
  );
}
