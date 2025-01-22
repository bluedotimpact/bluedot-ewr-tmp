import {
  CourseCard,
  HeroSection,
  Section,
} from '@bluedot/ui';

const HomePage = () => {
  return (
    <div>
      <HeroSection
        className="!items-end pb-14"
        title="The expertise you need to shape safe AI "
        subtitle="We run the world's most trusted AI Safety educational courses, career services and support community. Our programs are developed in collaboration with AI Safety world experts."
      >
        <div className="hero-section__logo-container flex flex-col items-center gap-7 mb-3">
          <img className="hero-section__logo-icon w-20" src="/Bluedot_Impact_Icon.svg" alt="BlueDot Impact" />
          <img className="hero-section__logo-text w-52 mr-9" src="/Bluedot_Impact_Logo_Text-Only.svg" alt="BlueDot Impact" />
        </div>
      </HeroSection>

      {/* COURSES */}
      <Section title="Our courses" subtitle="We run inclusive, blended learning courses that cater to various expertise levels and time availability">
        <div className="flex flex-row gap-4">
          <CourseCard
            title="Alignment Fast Track"
            description="AI systems are rapidly becoming more capable and more general. Despite AI’s potential to radically improve human society, there are still open questions about how we build AI systems that are controllable, aligned with our intentions and interpretable."
            courseType="Crash course"
            image="/images/intro-course.png"
          />
          <CourseCard
            title="Governance Fast-Track"
            description="Despite AI’s potential to radically improve human society, there are still active debates about how we will wield the AI systems of today and tomorrow. The rise of this powerful technology demands a thoughtful approach to its governance and regulation."
            courseType="Crash course"
            image="/images/governance-course.jpg"
          />
          <CourseCard
            title="AI Alignment"
            description="AI systems are rapidly becoming more capable and more general. Despite AI’s potential to radically improve human society, there are still open questions about how we build AI systems that are controllable, aligned with our intentions and interpretable."
            courseType="In-depth course"
            image="/images/alignment-course.png"
          />
          <CourseCard
            title="AI Governance"
            description="The rise of any powerful technology demands a thoughtful approach to its governance and regulation. There has been increasing interest in how AI governance can and should mitigate extreme risks from AI, but it can be difficult to get up to speed on research and ideas in this area."
            courseType="In-depth course"
            image="/images/governance-course.jpg"
          />
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
