import {GlobalState} from 'types/state';

const searchSelector = (state: GlobalState) => state.home.search;

export {searchSelector};
