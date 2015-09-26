import React from 'react/addons';

import Winner from './Winner'
import Vote from './Vote'

export default React.createClass({
    mixins: [React.addons.PureRenderMixin],

    render: function () {
        // NOTE: These the following gives the same results,
        //
        // {...this.props}
        // `pair={this.props.pair} vote={this.props.vote}`
        return <div>
            {this.props.winner ?
                <Winner ref="winner" winner={this.props.winner} /> :
                <Vote {...this.props} />
            }
        </div>;
    }
});
