import { Link } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>EVE Online</Text>

      <Image
        source={{ uri: 'https://images.alphacoders.com/116/thumb-1920-1160602.jpg' }}
        style={styles.image}
      />

      <Text style={styles.text}>
        EVE Online je vesoljski MMORPG, v katerem igralci raziskujejo vesolje,
        upravljajo vesoljske ladje, trgujejo in se borijo.
      </Text>

      <Text style={styles.text}>
        V tej aplikaciji bom predstavil igro EVE Online in nekaj zanimivosti o njej.
      </Text>

      <Link href="/details" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Več informacij</Text>
        </Pressable>
      </Link>

      <Link href="/about" asChild>
        <Pressable style={styles.secondaryButton}>
          <Text style={styles.buttonText}>O meni</Text>
        </Pressable>
      </Link>
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
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: '#ffffff',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 14,
    marginBottom: 20,
  },
  text: {
    fontSize: 17,
    lineHeight: 26,
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginTop: 12,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#111827',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginTop: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});