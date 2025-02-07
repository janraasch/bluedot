import {
  HeroSection,
  Section,
} from '@bluedot/ui';
import IntroSection from '../components/about/IntroSection';
import HistorySection from '../components/about/HistorySection';
import TeamSection from '../components/about/TeamSection';
import JoinUsCta from '../components/about/JoinUsCta';
import BeliefsSection from '../components/about/BeliefsSection';

const AboutPage = () => {
  return (
    <div>
      <HeroSection
        title="Our mission is to ensure humanity safely navigates the transition to transformative AI."
      />
      <IntroSection title="Why do we exist?" />
      <BeliefsSection />
      <HistorySection />
      <TeamSection />
      <JoinUsCta />
      <Section
        title="Contact us"
        subtitle={<>We love hearing from people, and are keen for people to reach out to us with any questions or feedback!<br /><br />Email us at <a href="mailto:team@bluedot.org">team@bluedot.org</a>.</>}
      />
    </div>
  );
};

export default AboutPage;
