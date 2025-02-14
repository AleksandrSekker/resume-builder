export interface PropsResumeForm {
  onSubmit: (data: FormValues) => void;
  defaultValues?: FormValues;
  onChange?: (data: FormValues) => void;
}
export interface FormValues {
  personalDetails: SectionWithPersonalDetails;
  profile: ProfileSection;
  employmentHistory: EmploymentHistorySection;
  education: EducationSection;
  links: LinksSection;
  skills: SkillsSection;
  languages: LanguagesSection;
}

export interface SectionWithPersonalDetails {
  sectionName: string;
  jobTitle: LabelTitleItem;
  imageUrl: string;
  personalDetailsList: PersonalDetailsListItem[];
}
export interface PersonalDetailsListItem {
  label: string;
  title: string;
  id: number;
  link?: string;
}
interface LabelTitleItem {
  label: string;
  title: string;
}

interface ProfileSection {
  sectionName: string;
  text: string;
}

interface EmploymentHistorySection {
  sectionName: string;
  employmentList: EmploymentEntry[];
}

interface EmploymentEntry {
  id: number;
  jobTitle: LabelTitleItem;
  employer: LabelTitleItem;
  startEndDate: StartEndDate;
  city: LabelTitleItem;
  description: LabelTitleItem;
}

interface StartEndDate {
  label: string;
  titleStart: string;
  titleEnd: string;
}

interface EducationSection {
  sectionName: string;
  educationList: EducationEntry[];
}

interface EducationEntry {
  id: number;
  school: LabelTitleItem;
  degree: LabelTitleItem;
  startEndDate: StartEndDate;
  city: LabelTitleItem;
  description: LabelTitleItem;
}

interface LinksSection {
  sectionName: string;
  links: LinkItem[];
}

export interface LinkItem {
  id: number;
  title: string;
  link: string;
}

interface SkillsSection {
  sectionName: string;
  skillsList: SkillItem[];
}

export interface SkillItem {
  id: number;
  title: string;
}

interface LanguagesSection {
  sectionName: string;
  languagesList: LanguageItem[];
}

export interface LanguageItem {
  id: number;
  title: string;
  level: string;
}
