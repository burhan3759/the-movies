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
import { connect } from 'react-redux';
import { Icon } from 'expo';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    console.log('PROPS => ', this.props);
  }

  render() {
    const dimension = Dimensions.get('window');
    const { width } = dimension;

    return (
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        <View style={{ margin: 20, marginTop: 50, }}>
          <Text>
            The MOVIES
          </Text>
        </View>
        <ScrollView>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(each => (
            <View key={each} style={styles.movieRow}>
              <View style={{ flex: 2 }}>
                <Image
                  style={{
                    width: width * .315,
                    height: width * .5,
                    borderRadius: 10,
                  }}
                  source={{ uri: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg' }}
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
                <Text style={[ styles.label, styles.title ]}
                >
                  {('Captain Marvel').toUpperCase()}
                </Text>
                <Text style={[ styles.label, styles.rating ]}
                >
                  7.2
                </Text>
                <Text style={[ styles.label, styles.actors ]}
                >
                  
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}
              >
                <Icon.Ionicons
                  name="md-star-outline"
                  size={26}
                  color="#fff"
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { movieReducer: { movie } } = state;

  return { movie };
}

export default connect(mapStateToProps)(HomeScreen);

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
