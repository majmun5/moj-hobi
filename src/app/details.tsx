import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Več o EVE Online</Text>

      <Image
        source={{ uri: 'https://preview.redd.it/eve-invasion-character-selection-screen-background-image-2k-v0-5na9jrbcds031.png?auto=webp&s=1a3e879a56040e8d2ead0333d03860947e3e3b5c' }}
        style={styles.image}
      />

      <Text style={styles.heading}>Kaj je EVE Online?</Text>
      <Text style={styles.text}>
        EVE Online je masivno večigralska vesoljska igra (MMORPG), ki se dogaja
        v fikcionalnem vesolju z 8000 sistemov. Igra omogoča igralcem, da
        sami oblikujejo svojo zgodbo - od trgovcev do voditeljskih generalov,
        ki vodijo vojne med tisočimi igralci.
      </Text>

      <Image
        source={{ uri: 'https://wallpapercat.com/w/full/1/3/6/1074640-3840x2160-desktop-4k-eve-online-background-photo.jpg' }}
        style={styles.image}
      />

      <Text style={styles.heading}>Zgodovina in razvoj</Text>
      <Text style={styles.text}>
        EVE Online je bila objavljena leta 2003 in od takrat neprekinjeno raste.
        Igra je slovela po epskih bitkah, kjer se v enkratnih trenutkih borita
        do 40.000 igralcev hkrati. Ekonomija igre je tako kompleksna, da ima
        svoje economiste za analizo.
      </Text>

      <Image
        source={{ uri: 'https://evemarketbrowser.com/thumbnail.png' }}
        style={styles.image}
      />

      <Text style={styles.heading}>Glavne značilnosti</Text>
      <Text style={styles.text}>
        • Raziskovanje: ogromno vesolje z tisočimi sistemi, kjer lahko raziskuješ nova ozemlja{'\n\n'}
        • Trgovina: kompleksna ekonomija z rudarjenjem, proizvodnjo in trgovanjem{'\n\n'}
        • Bitke: strateške vesoljske bitke med največjimi imperiji{'\n\n'}
        • Skupnost: gradnja zavezništev z neomejenim sodelovanjem
      </Text>

      <Image
        source={{ uri: 'https://external-preview.redd.it/shot-from-eve-onlines-massive-battle-yesterday-around-100-v0-68sXB1OLAjLWEfM0_12NTdOm5vPVLFiSERnHiuoWdcA.jpg?width=1080&crop=smart&auto=webp&s=7d1ddeddf43dba0575b2224e05eea1eb62a7445f' }}
        style={styles.image}
      />

      <Text style={styles.heading}>Vrste ladij in tehnologije</Text>
      <Text style={styles.text}>
        V EVE Online imaš dostop do stotine različnih ladij - od majhnih
        lovskih ladij do ogromnih bitkovnih križarjev in titanosorov. Vsaka
        ladja ima specifično vlogo in zahteva drugačno strategijo. Tehnologija
        in oprema sta ključna za uspeh.
      </Text>

      <Image
        source={{ uri: 'https://i.pinimg.com/736x/47/f1/ef/47f1ef401b432b2211dbc709f8c2c100.jpg' }}
        style={styles.image}
      />

      <Text style={styles.heading}>Igralci kot sila</Text>
      <Text style={styles.text}>
        V EVE Online niso razvijalci tisti, ki gradijo vesolje - so igralci.
        Velike korporacije in zavezništva kontrolirajo dele vesolja in gradijo
        svoje imperije. To vodi do nepredvidljivih situacij in zgodb, ki jih
        razvijalci nikoli niso načrtovali.
      </Text>

      <Image
        source={{ uri: 'https://images.ctfassets.net/7lhcm73ukv5p/4POfrf98xGTQ2WDEoAiUoG/3340f66450f99487a8758d8284b6bd55/5-Legion-Updates_1920x1080.jpg?w=850&fm=jpg&fl=progressive&q=75' }}
        style={styles.image}
      />

      <Text style={styles.heading}>Zakaj je to posebno?</Text>
      <Text style={styles.text}>
        EVE Online ni samo igra - je simulacija civilizacije v vesolju. Ponuja
        kompleksnost redkih iger in omogoča igralcem, da postanejo deli nečesa
        večjega od sebe. Vsak dan se dogajajo nove zgodbe, konflikti in
        dogovori, ki oblikujejo vesolje.
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
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    marginBottom: 18,
  },
  spacer: {
    height: 120,
  },
});