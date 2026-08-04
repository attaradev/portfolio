import { Document, Page, Text, View, Link, StyleSheet } from '@react-pdf/renderer'
import {
  resumeHeader,
  professionalSummary,
  coreCompetencies,
  resumeExperiences,
  openSource,
  technicalWriting,
  certifications,
  education,
  community,
} from '@/data/resume'

const styles = StyleSheet.create({
  page: {
    padding: 0, // Remove default padding to allow header to span full width
    fontFamily: 'Helvetica',
    fontSize: 9,
    lineHeight: 1.5,
    color: '#334155', // slate-700
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    backgroundColor: '#f0fdfa', // teal-50
    paddingTop: 36,
    paddingRight: 48,
    paddingBottom: 24,
    paddingLeft: 48,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccfbf1', // teal-100
  },
  contentContainer: {
    paddingTop: 0,
    paddingRight: 48,
    paddingBottom: 36,
    paddingLeft: 48,
  },
  name: {
    fontSize: 26,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a', // slate-900
    marginBottom: 6,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#0d9488', // teal-600
    marginBottom: 14,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 18,
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  contactLink: {
    fontSize: 10,
    color: '#475569', // slate-600
    textDecoration: 'none',
  },
  location: {
    fontSize: 10,
    color: '#64748b', // slate-500
    marginTop: 6,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a', // slate-900
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 10,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0', // slate-200
  },
  paragraph: {
    fontSize: 10,
    textAlign: 'justify',
    color: '#334155', // slate-700
    lineHeight: 1.6,
  },
  competenciesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 6,
  },
  competencyPill: {
    backgroundColor: '#f1f5f9', // slate-100
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontSize: 9,
    color: '#334155',
  },
  experienceItem: {
    marginBottom: 14,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  experienceTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 11,
    color: '#0f172a',
  },
  experiencePeriod: {
    fontSize: 9,
    color: '#64748b',
    fontFamily: 'Helvetica-Bold',
  },
  experienceCompany: {
    fontSize: 10,
    color: '#0d9488', // teal-600
    fontFamily: 'Helvetica-Bold',
    marginBottom: 6,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingLeft: 4,
  },
  bullet: {
    width: 12,
    fontSize: 10,
    color: '#0d9488', // teal-600
    lineHeight: 1.3,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.5,
    color: '#334155',
  },
  techLabel: {
    fontSize: 9,
    color: '#64748b',
    marginTop: 6,
    fontStyle: 'italic',
  },
  twoColumn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  certItem: {
    flexDirection: 'row',
    width: '48%',
    marginBottom: 6,
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  checkmark: {
    color: '#0d9488',
    marginRight: 8,
    fontSize: 10,
  },
  certText: {
    fontSize: 10,
    color: '#334155',
    fontFamily: 'Helvetica-Bold',
  },
  educationItem: {
    marginBottom: 6,
  },
  educationDegree: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    color: '#0f172a',
  },
  educationInstitution: {
    fontSize: 10,
    color: '#475569',
  },
})

export default function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{resumeHeader.name}</Text>
          <Text style={styles.title}>{resumeHeader.title}</Text>
          <View style={styles.contactRow}>
            {/* Email */}
            <View style={styles.contactItem}>
              <Link src={`mailto:${resumeHeader.contact.email}`} style={styles.contactLink}>
                {resumeHeader.contact.email}
              </Link>
            </View>

            {/* Website */}
            <View style={styles.contactItem}>
              <Link src={`https://${resumeHeader.contact.website}`} style={styles.contactLink}>
                {resumeHeader.contact.website}
              </Link>
            </View>

            {/* Github */}
            <View style={styles.contactItem}>
              <Link src={`https://${resumeHeader.contact.github}`} style={styles.contactLink}>
                {resumeHeader.contact.github}
              </Link>
            </View>

            {/* LinkedIn */}
            <View style={styles.contactItem}>
              <Link src={`https://${resumeHeader.contact.linkedin}`} style={styles.contactLink}>
                {resumeHeader.contact.linkedin}
              </Link>
            </View>
          </View>
          <Text style={styles.location}>{resumeHeader.location}</Text>
        </View>

        <View style={styles.contentContainer}>
          {/* Professional Summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.paragraph}>{professionalSummary}</Text>
          </View>

          {/* Core Competencies */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Core Competencies</Text>
            <View style={styles.competenciesContainer}>
              {Object.entries(coreCompetencies).map(([category, skills]) => (
                <Text key={category} style={styles.competencyPill}>
                  {category}: {skills}
                </Text>
              ))}
            </View>
          </View>

          {/* Professional Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {resumeExperiences.map((exp, index) => (
              <View key={index} style={styles.experienceItem} wrap={false}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>{exp.title}</Text>
                  <Text style={styles.experiencePeriod}>{exp.period}</Text>
                </View>
                <Text style={styles.experienceCompany}>
                  {exp.company} · {exp.location}
                </Text>
                {exp.bullets.map((bullet, i) => (
                  <View key={i} style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>{bullet}</Text>
                  </View>
                ))}
                {exp.technologies && (
                  <Text style={styles.techLabel}>Stack: {exp.technologies}</Text>
                )}
              </View>
            ))}
          </View>

          {/* Open Source */}
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Open Source</Text>
            <View style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.experienceTitle}>{openSource.title}</Text>
                <Text style={styles.experiencePeriod}>{openSource.role}</Text>
              </View>
              <Text style={[styles.paragraph, { marginBottom: 4 }]}>
                {openSource.description}
              </Text>
              {openSource.highlights.map((item, i) => (
                <View key={i} style={styles.bulletItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
              <Text style={styles.techLabel}>
                Docs: <Link src={openSource.url} style={{ color: '#0d9488', textDecoration: 'none' }}>{openSource.url}</Link>
              </Text>
            </View>
          </View>

          {/* Technical Writing */}
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Technical Writing</Text>
            <Text style={[styles.paragraph, { marginBottom: 6 }]}>
              {technicalWriting.description}
            </Text>
            {technicalWriting.topics.map((topic, i) => (
              <View key={i} style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{topic}</Text>
              </View>
            ))}
          </View>

          {/* Certifications */}
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            <View style={styles.twoColumn}>
              {certifications.map((cert, i) => (
                <View key={i} style={styles.certItem}>
                  <Text style={styles.checkmark}>✓</Text>
                  <Text style={styles.certText}>{cert.name}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Education */}
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={styles.educationItem}>
              <Text style={styles.educationDegree}>{education.degree}</Text>
              <Text style={styles.educationInstitution}>
                {education.institution} · {education.location}
              </Text>
            </View>
          </View>

          {/* Community & Speaking */}
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Community & Speaking</Text>
            {community.map((item, i) => (
              <View key={i} style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  )
}
