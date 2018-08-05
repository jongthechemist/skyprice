import { connect } from 'react-redux';
import { updateSearch } from '../actions/searchActions';
import SearchLayout from './SearchLayout';

const mapStateToProps = (state) => {
  return { flights : state.flights };
}

const mapDispatchToProps = dispatch => {
  return {
    onFlightSelected: (id) => {
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchLayout);

export default SearchContainer;