import {
  CourseCard,
  Section,
} from '@bluedot/ui';
import { SlideList, SlideItem } from '@bluedot/ui/src/SlideList';

const featuredCourses = [
  {
    title: 'AI Safety: Intro to Transformative AI',
    description: 'The risks and opportunities of advanced AI are evolving at unprecedented speed—and so is the need for capable individuals to shape its trajectory. This intensive 5-day course is for those who want to rapidly develop their understanding of transformative AI and its impact on humanity.',
    courseType: 'Crash course',
    imageSrc: '/images/alignment-course.png',
    ctaUrl: 'https://aisafetyfundamentals.com/intro-to-tai/',
  },
] as const;

const courses = [
  {
    title: 'Alignment Fast Track',
    description: 'AI systems are rapidly becoming more capable and more general. Despite AI\'s potential to radically improve human society, there are still open questions about how we build AI systems that are controllable, aligned with our intentions and interpretable.',
    courseType: 'Crash course',
    imageSrc: '/images/intro-course.png',
    ctaUrl: 'https://aisafetyfundamentals.com/alignment-fast-track/',
  },
  {
    title: 'Governance Fast-Track',
    description: 'Despite AI\'s potential to radically improve human society, there are still active debates about how we will wield the AI systems of today and tomorrow. The rise of this powerful technology demands a thoughtful approach to its governance and regulation.',
    courseType: 'Crash course',
    imageSrc: '/images/governance-course.jpg',
    ctaUrl: 'https://aisafetyfundamentals.com/governance-fast-track/',
  },
  {
    title: 'AI Alignment',
    description: 'AI systems are rapidly becoming more capable and more general. Despite AI\'s potential to radically improve human society, there are still open questions about how we build AI systems that are controllable, aligned with our intentions and interpretable.',
    courseType: 'In-depth course',
    imageSrc: '/images/alignment-course.png',
    ctaUrl: 'https://aisafetyfundamentals.com/alignment/',
  },
  {
    title: 'AI Governance',
    description: 'The rise of any powerful technology demands a thoughtful approach to its governance and regulation. There has been increasing interest in how AI governance can and should mitigate extreme risks from AI, but it can be difficult to get up to speed on research and ideas in this area.',
    courseType: 'In-depth course',
    imageSrc: '/images/governance-course.jpg',
    ctaUrl: 'https://aisafetyfundamentals.com/governance/',
  },
] as const;

const CourseSection = () => {
  return (
    <Section>
      <SlideList
        title="Our courses"
        description="We run inclusive, blended learning courses that cater to various expertise levels and time availability"
        itemsPerSlide={2}
        featuredSlot={(
          <CourseCard
            {...featuredCourses[0]}
            cardType="Featured"
            className="h-full"
          />
        )}
        slidesWrapperWidth={{ mobile: '100%', desktop: '800px' }}
        containerClassName="gap-4"
        slideClassName="gap-4"
      >
        {courses.map((course) => (
          <SlideItem key={course.title}>
            <CourseCard {...course} className="size-full md:w-[323px]" />
          </SlideItem>
        ))}
      </SlideList>
    </Section>
  );
};

export default CourseSection;
