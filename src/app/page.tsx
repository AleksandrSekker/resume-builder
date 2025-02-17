'use client';
import { PDFWrapper, ResumeForm } from '@/components';
import { useState } from 'react';
import { FormValues } from '@/types';
import { defaultData } from '@/data';

export default function Home() {
  const [resumeData, setResumeData] = useState<FormValues>(defaultData);
  const { personalDetails, profile, employmentHistory, links, skills, languages, education } = resumeData;

  const handleSubmit = (data: FormValues) => {
    console.log('Final submission:', data);
  };

  const handleRealTimeUpdate = (updatedData: FormValues) => {
    setResumeData(updatedData);
  };

  return (
    <div className="mx-auto grid grid-cols-2 gap-8 p-4 h-screen">
      {/* Left: Resume Form */}
      <div className="border p-4 rounded-lg overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Edit Resume</h2>
        <ResumeForm onSubmit={handleSubmit} defaultValues={resumeData} onChange={handleRealTimeUpdate} />
      </div>

      {/* Right: Live PDF Preview */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Live Preview</h2>

        <PDFWrapper
          personalDetails={personalDetails}
          links={links}
          education={education}
          employmentHistory={employmentHistory}
          languages={languages}
          profile={profile}
          skills={skills}
        />
      </div>
    </div>
  );
}
