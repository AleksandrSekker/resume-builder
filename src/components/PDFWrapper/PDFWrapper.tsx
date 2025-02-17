'use client';

import { ResumePDF } from '@/components';
import { FormValues } from '@/types';
import { PDFViewer } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

export const PDFWrapper = (children: FormValues) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    loaded && (
      <PDFViewer width={'100%'} height={'95%'}>
        <ResumePDF {...children} />
      </PDFViewer>
    )
  );
};
