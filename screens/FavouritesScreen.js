import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';
import { Icon } from 'expo';

import MovieLists from '../components/MovieLists';
import { toggleFavMovie } from '../stores/movieReducer/actions';

class FavouritesScreen extends React.Component {
  static navigationOptions = {
    header: null,
	};

	constructor(props) {
		super(props);
		this.state = {
			movies: [],
		}
	}
	
	componentDidMount() {
		this.setState({
			movies: this.props.favouriteMovies,
		});
	}

	onRemoveFavMovies = async (movie) => {
		const { movies } = this.state;

		await this.props.toggleFavMovie(movie);

		this.setState({
			movies: this.props.favouriteMovies,
		});
	}

  render() {
		const { movies } = this.state;
    return (
      <View style={{ backgroundColor: 'black', flex: 1 }}>
				<NavigationEvents
					onWillFocus={() => {
						this.setState({
							movies: this.props.favouriteMovies,
						});
					}}
				/>
        <View style={{ margin: 20, marginTop: 50, }}>
          <Text style={styles.mainLabel}>
            Favourite MOVIES
          </Text>
        </View>
				<ScrollView>
					{movies.length > 0 ? movies.map(each => (
						<View key={each.id}>
							<MovieLists movie={each}>
								<TouchableOpacity onPress={() => this.onRemoveFavMovies(each)}>
									<Icon.Ionicons
										name="md-trash"
										size={26}
										color="#fff"
									/>
								</TouchableOpacity>
							</MovieLists>
						</View>
					)) : (
						<View style={{ alignContent: 'center' }}>
							<Text style={{ color: '#fff', textAlign: 'center' }}>No Favourite Movies</Text>
						</View>
					)}
				</ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { movieReducer: { favouriteMovies } } = state;

  return { favouriteMovies };
}

const mapDispatchToProps = dispatch => {
	return {
		toggleFavMovie: movie => dispatch(toggleFavMovie(movie)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	)(FavouritesScreen);

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
});
