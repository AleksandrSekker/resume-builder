'use client';

import dynamic from 'next/dynamic';
import { ResumePDF } from '@/components';
import { FormValues } from '@/types';

const PDFViewer = dynamic(() => import('@react-pdf/renderer').then((mod) => mod.PDFViewer), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
export const PDFWrapper = (children: FormValues) => {
  return (
    <PDFViewer width={'100%'} height={'95%'}>
      <ResumePDF {...children} />
    </PDFViewer>
  );
};
