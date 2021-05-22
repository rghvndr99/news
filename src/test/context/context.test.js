import {initContext,} from 'context/context';


const context = initContext({});

it('initialize context', () => {
    expect(context).toHaveProperty('state');
});
