import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
	Dimensions,
} from 'react-native';

class MovieLists extends React.Component {
  render() {
    const dimension = Dimensions.get('window');
		const { width } = dimension;
	
		const { movie } = this.props;

    return (
			<View key={movie.id} style={styles.movieRow}>
				<View style={{ flex: 2 }}>
					<Image
						style={{
							width: width * .315,
							height: width * .5,
							borderRadius: 10,
							borderWidth: 0.5,
							borderColor: '#eee'
						}}
						source={{
							uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
						}}
					/>
				</View>
				<View
					style={{
						flex: 3,
						backgroundColor: '#fff',
						borderTopRightRadius: 2,
						borderBottomRightRadius: 2
					}}
				>
					<Text style={[ styles.label, styles.title ]}>
						{(movie.title).toUpperCase()}
					</Text>
					<Text style={[ styles.label, styles.rating ]}>
						{movie.vote_average}
					</Text>
					<Text style={[ styles.label, styles.actors ]}>
						{movie.release_date}
					</Text>
				</View>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
					}}
				>
					{this.props.children}
				</View>
			</View>
    );
  }
}

export default MovieLists;

const styles = StyleSheet.create({
  mainLabel: {
    paddingBottom: 10,
    borderBottomWidth: 4,
    borderColor: '#fff',
    width: 200,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 5,
  },
  movieRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  label: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  rating: {
    color: '#ffcc00',
    fontWeight: 'bold',
    fontSize: 14,
  },
  actors: {
    fontSize: 10,
    color: '#999'
  }
});
