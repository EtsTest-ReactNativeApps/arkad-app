import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleChangeMap, toggleChangeCompany } from '../actions/map'
import Dropdown from '../components/Dropdown'

const mapStateToProps = state => ({
  currentMap: state.mapReducer.currentMap,
  maps: state.apiReducer.maps
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleChangeMap, toggleChangeCompany }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown)
