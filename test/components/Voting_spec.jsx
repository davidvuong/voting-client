import React from 'react/addons';
import Voting from '../../src/components/Voting'
import {expect} from 'chai';

const {renderIntoDocument} = React.addons.TestUtils;
const {scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;
const {Simulate} = React.addons.TestUtils;

describe('Voting', () => {
    it('renders a pair of buttons', () => {
        const pair = ['David', 'Denise'];
        const component = renderIntoDocument(
            <Voting pair={pair} />
        );

        // React helper function that helps find 'buttons'.
        const buttons = scryRenderedDOMComponentsWithTag(
            component, 'button'
        );

        expect(buttons.length).to.equal(2);
        expect(buttons[0].getDOMNode().textContent).to.equal('David');
        expect(buttons[1].getDOMNode().textContent).to.equal('Denise');
    });

    it('invokes callback when a button is clicked', () => {
        let votedWith;

        // NOTE: Just an anonymous function.
        //
        // This is the same as saying:
        //
        // var vote = function (entry) { votedWith = entry; };
        const vote = (entry) => votedWith = entry;

        const pair = ['David', 'Denise'];
        const component = renderIntoDocument(
            <Voting pair={pair} vote={vote} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        // As the name suggests, "simulates" a click on `element`.
        Simulate.click(buttons[0].getDOMNode());

        expect(votedWith).to.equal('David');
    });

    it('disables buttons when user has voted', () => {
        const pair = ['David', 'Denise'];
        const component = renderIntoDocument(
            <Voting pair={pair} hasVoted="David" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].getDOMNode().hasAttribute('disabled')).to.equal(true);
        expect(buttons[1].getDOMNode().hasAttribute('disabled')).to.equal(true);
    });

    it('should contain the voted label when voted', () => {
        const pair = ['David', 'Denise'];
        const component = renderIntoDocument(
            <Voting pair={pair} hasVoted="David" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons[0].getDOMNode().textContent).to.contain('Voted');
    });

    it('should render winner text when there is a winner', () => {
        const pair = ['David', 'Denise'];
        const component = renderIntoDocument(
            <Voting winner="David" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons.length).to.equal(0);

        const winner = React.findDOMNode(component.refs.winner);
        expect(winner.textContent).to.contain('David');
    });

});
