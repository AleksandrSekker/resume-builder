'use client';
import { useForm, useFieldArray } from 'react-hook-form'; // Import `useFieldArray` for dynamic arrays
import React, { useEffect, useRef } from 'react';
import { FormValues, LinkItem, PersonalDetailsListItem, PropsResumeForm, SkillItem } from '@/types';
import { defaultData } from '@/data';

export const ResumeForm = ({ onSubmit, defaultValues, onChange }: PropsResumeForm) => {
  const { register, handleSubmit, control, watch } = useForm({ defaultValues, mode: 'onChange' });
  const watchedData = watch();
  const previousData = useRef<FormValues | null>(defaultData);
  const typingTimer = useRef<NodeJS.Timeout | null>(null);
  // Use `useFieldArray` for sections with lists (e.g., personalDetailsList, employmentList, etc.)
  const personalDetailsList = useFieldArray({ control, name: 'personalDetails.personalDetailsList' });
  const employmentList = useFieldArray({ control, name: 'employmentHistory.employmentList' });
  const educationList = useFieldArray({ control, name: 'education.educationList' });
  const links = useFieldArray({ control, name: 'links.links' });
  const skillsList = useFieldArray({ control, name: 'skills.skillsList' });
  const languagesList = useFieldArray({ control, name: 'languages.languagesList' });
  const isLink = (itemChecked: PersonalDetailsListItem | LinkItem | SkillItem) => {
    return 'link' in itemChecked;
  };

  useEffect(() => {
    if (previousData.current && JSON.stringify(previousData.current) === JSON.stringify(watchedData)) {
      return; // No changes detected, skip execution
    }

    if (typingTimer.current) {
      clearTimeout(typingTimer.current);
    }

    typingTimer.current = setTimeout(() => {
      previousData.current = JSON.parse(JSON.stringify(watchedData));
      if (onChange) onChange(watchedData);
    }, 1000);
  }, [watchedData, onChange]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <h2 className="text-lg font-bold">Personal Details</h2>
      <input
        {...register('personalDetails.jobTitle.title')}
        placeholder="Job Title"
        className="border p-2 w-full text-black"
      />
      <input
        {...register('personalDetails.imageUrl')}
        placeholder="Image URL"
        className="border p-2 w-full text-black"
      />

      {personalDetailsList.fields.map((item, index) => (
        <div key={item.id} className="space-y-2">
          <label className="text-sm py-2 w-full text-white" htmlFor={item.title}>
            {item.label}
          </label>
          <input
            {...register(`personalDetails.personalDetailsList.${index}.title`)}
            placeholder="Title"
            className="border p-2 w-full text-black"
          />
          {Object.hasOwn(item, 'link') && isLink(item) ? (
            <input
              {...register(`personalDetails.personalDetailsList.${index}.link`)}
              placeholder="Link (optional)"
              className="border p-2 w-full text-black"
            />
          ) : null}
        </div>
      ))}

      {/* Profile Section */}
      <h2 className="text-lg font-bold">Profile</h2>
      <textarea {...register('profile.text')} placeholder="Profile Text" className="border p-2 w-full text-black" />

      {/* Employment History */}
      <h2 className="text-lg font-bold">Employment History</h2>
      {employmentList.fields.map((item, index) => (
        <div key={item.id} className="border p-2 rounded space-y-2">
          <input
            {...register(`employmentHistory.employmentList.${index}.jobTitle.title`)}
            placeholder="Job Title"
            className="border p-2 w-full text-black"
          />
          <input
            {...register(`employmentHistory.employmentList.${index}.employer.title`)}
            placeholder="Employer"
            className="border p-2 w-full text-black"
          />
          <div className="flex gap-2">
            <input
              {...register(`employmentHistory.employmentList.${index}.startEndDate.titleStart`)}
              placeholder="Start Date"
              className="border p-2 w-full text-black"
            />
            <input
              {...register(`employmentHistory.employmentList.${index}.startEndDate.titleEnd`)}
              placeholder="End Date"
              className="border p-2 w-full text-black"
            />
          </div>
          <textarea
            {...register(`employmentHistory.employmentList.${index}.description.title`)}
            placeholder="Description"
            className="border p-2 w-full text-black"
          />
        </div>
      ))}

      {/* Education Section */}
      <h2 className="text-lg font-bold">Education</h2>
      {educationList.fields.map((item, index) => (
        <div key={item.id} className="border p-2 rounded space-y-2">
          <input
            {...register(`education.educationList.${index}.school.title`)}
            placeholder="School"
            className="border p-2 w-full text-black"
          />
          <input
            {...register(`education.educationList.${index}.degree.title`)}
            placeholder="Degree"
            className="border p-2 w-full text-black"
          />
          <div className="flex gap-2">
            <input
              {...register(`education.educationList.${index}.startEndDate.titleStart`)}
              placeholder="Start Date"
              className="border p-2 w-full text-black"
            />
            <input
              {...register(`education.educationList.${index}.startEndDate.titleEnd`)}
              placeholder="End Date"
              className="border p-2 w-full text-black"
            />
          </div>
          <textarea
            {...register(`education.educationList.${index}.description.title`)}
            placeholder="Description"
            className="border p-2 w-full text-black"
          />
        </div>
      ))}

      {/* Links Section */}
      <h2 className="text-lg font-bold">Links</h2>
      {links.fields.map((item, index) => (
        <div key={item.id} className="space-y-2">
          <input
            {...register(`links.links.${index}.title`)}
            placeholder="Title"
            className="border p-2 w-full text-black"
          />
          <input
            {...register(`links.links.${index}.link`)}
            placeholder="URL"
            className="border p-2 w-full text-black"
          />
        </div>
      ))}

      {/* Skills Section */}
      <h2 className="text-lg font-bold">Skills</h2>
      {skillsList.fields.map((item, index) => (
        <input
          key={item.id}
          {...register(`skills.skillsList.${index}.title`)}
          placeholder="Skill"
          className="border p-2 w-full text-black"
        />
      ))}

      {/* Languages Section */}
      <h2 className="text-lg font-bold">Languages</h2>
      {languagesList.fields.map((item, index) => (
        <div key={item.id} className="flex gap-2">
          <input
            {...register(`languages.languagesList.${index}.title`)}
            placeholder="Language"
            className="border p-2 w-full text-black"
          />
          <input
            {...register(`languages.languagesList.${index}.level`)}
            placeholder="Proficiency Level"
            className="border p-2 w-full text-black"
          />
        </div>
      ))}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Generate PDF
      </button>
    </form>
  );
};
