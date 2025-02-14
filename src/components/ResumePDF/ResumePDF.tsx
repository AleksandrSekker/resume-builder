import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { FormValues } from '@/types';
import { Header, RightSideBlock } from '@/components';

const styles = StyleSheet.create({
  page: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
  leftSection: { marginBottom: 10, backgroundColor: '#ffffff', padding: 20, width: '80%' },
  rightSection: { backgroundColor: '#1f2440', paddingLeft: 20, paddingTop: 50, width: '200px' },

  sectionBlock: { marginBottom: 10, marginTop: 10 },
  title: { fontSize: 20, marginBottom: 10 },
  subtitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 5 },
  dateText: { fontSize: 10, color: 'grey', marginBottom: 5 },
  text: { fontSize: 10, marginBottom: 5 },
});

export const ResumePDF = ({
  personalDetails,
  profile,
  employmentHistory,
  links,
  skills,
  languages,
  education,
}: FormValues) => {
  return (
    <Document author="<NAME>" title="Resume">
      <Page size="A4" style={styles.page}>
        <View style={styles.leftSection}>
          <Header data={personalDetails} />
          <View style={styles.sectionBlock}>
            <Text style={styles.title}>{profile.sectionName}</Text>
            <Text style={styles.text}>{profile.text}</Text>
          </View>
          <View style={styles.sectionBlock}>
            <Text style={styles.title}>{employmentHistory.sectionName}</Text>
            {employmentHistory.employmentList.map((item) => (
              <View key={item.id}>
                <Text
                  style={styles.subtitle}
                >{`${item.jobTitle.title}, ${item.employer.title}, ${item.city.title}`}</Text>
                <Text style={styles.dateText}>{item.startEndDate.titleEnd}</Text>
                <Text style={styles.text}>{item.description.title}</Text>
              </View>
            ))}
          </View>
          <View style={styles.sectionBlock}>
            <Text style={styles.title}>{education.sectionName}</Text>
            {education.educationList.map((item) => (
              <View key={item.id}>
                <Text style={styles.subtitle}>{`${item.degree.title}, ${item.school.title}, ${item.city.title}`}</Text>
                <Text style={styles.dateText}>{item.startEndDate.titleEnd}</Text>
                <Text style={styles.text}>{item.description.title}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.rightSection}>
          <RightSideBlock
            sectionName={personalDetails.sectionName}
            items={personalDetails.personalDetailsList}
            startIndex={2}
          />
          <RightSideBlock sectionName={links.sectionName} items={links.links} />
          <RightSideBlock sectionName={skills.sectionName} items={skills.skillsList} />
          <RightSideBlock sectionName={languages.sectionName} items={languages.languagesList} />
        </View>
      </Page>
    </Document>
  );
};
