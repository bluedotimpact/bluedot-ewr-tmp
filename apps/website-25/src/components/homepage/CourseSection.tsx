import {
  CourseCard,
  Section,
} from '@bluedot/ui';

const courses = [
  {
    title: 'Alignment Fast Track',
    description: 'AI systems are rapidly becoming more capable and more general. Despite AI’s potential to radically improve human society, there are still open questions about how we build AI systems that are controllable, aligned with our intentions and interpretable.',
    courseType: 'Crash course',
    imageSrc: '/images/intro-course.png',
    ctaUrl: 'https://aisafetyfundamentals.com/alignment-fast-track/',
  },
  {
    title: 'Governance Fast-Track',
    description: 'Despite AI’s potential to radically improve human society, there are still active debates about how we will wield the AI systems of today and tomorrow. The rise of this powerful technology demands a thoughtful approach to its governance and regulation.',
    courseType: 'Crash course',
    imageSrc: '/images/governance-course.jpg',
    ctaUrl: 'https://aisafetyfundamentals.com/governance-fast-track/',
  },
  {
    title: 'AI Alignment',
    description: 'AI systems are rapidly becoming more capable and more general. Despite AI’s potential to radically improve human society, there are still open questions about how we build AI systems that are controllable, aligned with our intentions and interpretable.',
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
    <Section title="Our courses" subtitle="We run inclusive, blended learning courses that cater to various expertise levels and time availability">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(0,max-content))] gap-4 overflow-visible m-1">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            {...course}
          />
        ))}
      </div>
    </Section>
  );
};

export default CourseSection;
