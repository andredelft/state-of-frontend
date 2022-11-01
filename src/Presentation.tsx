import { SlideContainer } from './components/slide/Slide';
import { Introduction } from './slides/Title';
import { ScrollSnap } from './slides/ScrollSnap';
import { SomeExampleSlide } from './slides/SomeExampleSlide';
import { Dialog } from './slides/Dialog';
import { FontEffects } from './slides/FontEffects';
import { ContainerQueries } from './slides/ContainerQueries';

export function Presentation() {
  return (
    <SlideContainer>
      <Introduction />
      <SomeExampleSlide />
      <ScrollSnap />
      <FontEffects />
      <Dialog />
      <ContainerQueries />
    </SlideContainer>
  );
}
