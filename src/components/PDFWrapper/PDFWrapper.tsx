import { ResumePDF } from '@/components';
import { FormValues } from '@/types';
import { PDFViewer } from '@react-pdf/renderer';

export const PDFWrapper = (children: FormValues) => {
  return (
    <PDFViewer width={'100%'} height={'95%'}>
      <ResumePDF {...children} />
    </PDFViewer>
  );
};
