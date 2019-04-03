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
import { Icon } from 'expo';

import { fetchMovies, toggleFavMovie } from '../stores/movieReducer/actions';
import MovieLists from '../components/MovieLists';
import { NavigationEvents } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
			isLoading: true,
			movies: [],
			favMovies: [],
    };
  }

  componentDidMount() {
		setTimeout(() => {
			this.props.fetchMovies({
				body: {},
				success: () => {
					this.setState({
						isLoading: false,
						movies: this.props.movies,
					});
				},
				error: () => {},
			});
		}, 1000);
	}
	
	onAddFavMovie = async (movie) => {
		const { favMovies } = this.state;

		await this.props.toggleFavMovie(movie);

		this.setState({
			favMovies: this.props.favouriteMovies,
		});
	}

  render() {
		const { isLoading, movies, favMovies } = this.state;

    return (
			<View style={{ backgroundColor: 'black', flex: 1 }}>
			<NavigationEvents
				onWillFocus={() => {
					this.setState({
						favMovies: Object.assign([], this.props.favouriteMovies),
					})
				}}
			/>
        <View style={{ margin: 20, marginTop: 50, }}>
          <Text style={styles.mainLabel}>
            The MOVIES
          </Text>
        </View>
				<ScrollView>
					{isLoading
						? (
							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<View>
									<Icon.Ionicons
										name="md-film"
										size={100}
										color="#fff"
									/>
									<View>
										<Text style={{ paddingTop: 20, color: '#fff' }}>
											Loading...
										</Text>
									</View>
								</View>
								
								</View>
						) : movies.map(each => (
						<View key={each.id}>
							<MovieLists movie={each}>
								<TouchableOpacity onPress={() => this.onAddFavMovie(each)}>
									<Icon.Ionicons
										name={favMovies.map(m => m.id).indexOf(each.id) !== -1 ? "md-heart" : "md-heart-empty"}
										size={26}
										color={favMovies.map(m => m.id).indexOf(each.id) !== -1 ? "#ffcc00" : "#fff"}
									/>
								</TouchableOpacity>
							</MovieLists>
						</View>
					))}
				</ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { movieReducer: { movies, favouriteMovies } } = state;

  return { movies, favouriteMovies };
}

const mapDispatchToProps = dispatch => {
	return {
		fetchMovies: req => dispatch(fetchMovies(req)),
		toggleFavMovie: movie => dispatch(toggleFavMovie(movie)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	)(HomeScreen);

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
