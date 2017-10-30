import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCountries } from '../actions/index'

class SearchBar extends Component {
    componentWillMount(){
        this.props.getCountries();
    }


    render(){
        return (
            <div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getCountries}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);