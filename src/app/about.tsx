import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>O meni</Text>

      <Image
        source={{ uri: 'https://i1.sndcdn.com/avatars-zAo5N9j7XXVVwKPC-6lrkmw-t1080x1080.jpg' }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Ožbej Rizmal</Text>

      <Text style={styles.heading}>Kdo sem?</Text>
      <Text style={styles.text}>
        Sem dijak Šolskega centra Velenje, obiskujem 3 letnik programa Tehnik Računalništva.
      </Text>

      <Text style={styles.heading}>Kaj me zanima?</Text>
      <Text style={styles.text}>
        • Vesolje{'\n\n'}
        • Aviacija{'\n\n'}
        
      </Text>

      <Text style={styles.heading}>Veščine</Text>
      <Text style={styles.text}>
        Znam vozit kolo pa automatika.
      </Text>

      <Text style={styles.heading}>Kontakt</Text>
      <Text style={styles.text}>
        Email: ozbej.rizmal@scv.si{'\n'}
        GitHub: github.com/majmun5
      </Text>

      <View style={styles.spacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#ffffff',
    marginTop: 12,
    letterSpacing: 1,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
    color: '#ffffff',
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: '#ffffff',
    marginBottom: 16,
  },
  spacer: {
    height: 120,
  },
});