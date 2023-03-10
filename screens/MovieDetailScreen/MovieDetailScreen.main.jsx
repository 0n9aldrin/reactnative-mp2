import React from "react";
import { SafeAreaView, Text, Image, ScrollView, View } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* TODO: Configure this screen to have an image and appropriate text describing the movie. 
                See the example on the spec for design inspiration.
                Feel free to use the styles below. */}
        <View style={styles.movieView}>
          <Image
            style={styles.movieCellImage}
            source={{ uri: route.params.item.posterurl }}
          />
        </View>
        <Text style={styles.h1}>{route.params.item.title}</Text>
        <Text style={styles.h4}>{"Released " + route.params.item.year}</Text>
        <Text style={styles.h2}>{route.params.item.genres.join(', ')}</Text>
        <Text style={styles.h3}>{route.params.item.actors.join(', ')}</Text>
        <Text style={styles.h4}>{route.params.item.storyline}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
