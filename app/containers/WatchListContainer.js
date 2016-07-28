import React, { PropTypes } from 'react'
import WatchList from '../components/WatchList'
import store from '../store'
import { refreshWatchListItems } from '../actions/market'
import { compact } from 'lodash'
import { connect } from 'react-redux'

class WatchListContainer extends React.Component {
  componentWillMount() {
    console.log('inside componentWillMount')
    store.dispatch(refreshWatchListItems())
  }

  render() {
    return <WatchList items={compact(this.props.items)} />
  }
}

const mapStateToProps = function(store) {
  console.log('inside mapStateToProps')
  return {
    symbols: store.market.watchList.current,
    items: store.market.watchList.current.map((symbol) => store.market.priceBySymbol[symbol])
  }
}

export default connect(mapStateToProps)(WatchListContainer);
