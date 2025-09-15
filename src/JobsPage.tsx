import React from 'react';
import JobsSection from './components/JobsSection';
import CallbackButton from './components/CallbackButton';

const JobsPage: React.FC = () => {
  return (
    <div>
      <JobsSection />
      <CallbackButton />
    </div>
  );
};

export default JobsPage;
