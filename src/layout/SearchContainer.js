import { connect } from 'react-redux';
import { updateSearch, submitSearch } from '../actions/searchActions';
import SearchLayout from './SearchLayout';

const mapStateToProps = (state, props) => {
  return { ...state.search, ...props };
}

const mapDispatchToProps = dispatch => {
  return {
    onParameterChanged: (parameter, value) => {
      dispatch(updateSearch(parameter, value));
    },
    onSearchSubmit: () => {
      dispatch(submitSearch());
    }
  }
}

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchLayout);

export default SearchContainer;