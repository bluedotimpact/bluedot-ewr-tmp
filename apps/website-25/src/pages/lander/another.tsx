import {
  HeroH1,
  HeroH2,
  HeroSection,
  HeroCTAContainer,
  CTALinkOrButton,
} from '@bluedot/ui';
import GraduateSection from '../../components/homepage/GraduateSection';
import Container from '../../components/lander/Container';
import LandingPageBase from '../../components/lander/LandingPageBase';

const VARIANT = 'another';

const LandingPage = () => {
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.append('prefill_Variant', VARIANT);
  const ctaUrl = `https://web.miniextensions.com/aGd0mXnpcN1gfqlnYNZc?${queryParams.toString()}`;

  const hero = (
    <>
      <HeroSection className="-mt-20 text-white bg-[url('/images/logo/logo_hero_background.svg')] bg-cover">
        <HeroH1 className="font-serif text-5xl sm:text-7xl font-normal">The future is going to be f_king awesome*</HeroH1>
        <HeroH2 className="text-size-md sm:text-size-lg font-light max-w-2xl mx-auto mt-10">Terms and conditions apply</HeroH2>
        <HeroCTAContainer>
          <CTALinkOrButton url={ctaUrl}>Start learning for free</CTALinkOrButton>
        </HeroCTAContainer>
      </HeroSection>
      <Container>
        <GraduateSection />
      </Container>
    </>
  );

  return (
    <LandingPageBase variant="classic" hero={hero} />
  );
};

LandingPage.rawLayout = true;

export default LandingPage;
