import React from 'react';
import { View, Text, StyleSheet, Link } from '@react-pdf/renderer';
import { LanguageItem, LinkItem, PersonalDetailsListItem, SkillItem } from '@/types';

interface SectionProps {
  sectionName: string;
  items: PersonalDetailsListItem[] | LinkItem[] | SkillItem[] | LanguageItem[];
  startIndex?: number;
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionContainer: {
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  sectionText: {
    fontSize: 10,
    marginBottom: 10,
    color: 'white',
  },
});

export const RightSideBlock: React.FC<SectionProps> = ({ sectionName, items, startIndex }) => {
  const displayedItems = startIndex ? items.slice(startIndex) : items;

  const isLink = (itemChecked: PersonalDetailsListItem | LinkItem | SkillItem) => {
    return 'link' in itemChecked;
  };
  const isLevel = (itemChecked: PersonalDetailsListItem | LinkItem | SkillItem) => {
    return 'level' in itemChecked;
  };
  const linkComponent = (item: PersonalDetailsListItem | LinkItem | SkillItem) => {
    if ("link" in item && item.link !== "") {
      return (
      <Link style={styles.sectionText} key={item.id} href={item.link}>
        {item.title}
      </Link>)
    }
    return null
  }
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{sectionName}</Text>
      {displayedItems.map((item) =>
        isLink(item) ? (
            linkComponent(item)
        ) : (
          <Text style={styles.sectionText} key={item.id}>
            {isLevel(item) ? `${item.title}  ${item.level}` : item.title}
          </Text>
        ),
      )}
    </View>
  );
};
