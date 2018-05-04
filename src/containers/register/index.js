import Register from './register'
import { connect } from 'react-redux';
import { changeLanguage } from 'src/appredux/actions';
function mapStateToProps (state) {
    return {
      language: state.language.language
    }
}
  
function mapDispatchToProps (dispatch) {
    return {
        dispatchChangeLanguage: (lang) => dispatch(changeLanguage(lang)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Register)

