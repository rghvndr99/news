
import { shallow } from 'enzyme';
import {getresults} from 'services';


describe('fetch req',()=>{

    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    it('get results call',()=>{
        getresults({});
        expect(global.fetch).toHaveBeenCalledTimes(1);
    })

})

