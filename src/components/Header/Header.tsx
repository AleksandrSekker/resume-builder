import { SectionWithPersonalDetails } from '@/types';
import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';
interface Props {
  data: SectionWithPersonalDetails;
}
const styles = StyleSheet.create({
  mainFlex: {
    display: 'flex',
    flexDirection: 'row',
  },
  textFlex: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 10,
    color: 'grey',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
export const Header = ({ data }: Props) => {
  const { jobTitle, personalDetailsList, imageUrl } = data;
  return (
    <View style={styles.mainFlex}>
      <Image src={imageUrl} style={styles.image} />
      <View style={styles.textFlex}>
        <Text style={styles.title}>{`${personalDetailsList[0].title} ${personalDetailsList[1].title}`}</Text>
        <Text style={styles.subtitle}>{jobTitle.title}</Text>
      </View>
    </View>
  );
};
