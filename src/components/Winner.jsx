import React from 'react/addons';

export default React.createClass({
    // Pure rendering:
    //
    // Tell React to perform shallow compares (rather than deep) when deciding
    // whether or not something props was changed. This ends up being much faster.
    //
    // We can do this because immutable data structures never change as a result
    // there won't be a need to re-render the component.
    //
    // See: http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html#immutable-data-and-pure-rendering
    mixins: [React.addons.PureRenderMixin],

    render: function () {
        return <div>
            Winner is {this.props.winner}!
        </div>;
    }
});
