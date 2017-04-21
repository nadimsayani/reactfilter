import * as types from './actionTypes';
import * as fields from './fields';
import * as operators from './operators';

let nextId = 0;

function selectField(state, field) {
  return state.update('selectedFields', (fields) => fields.add(field));
}

function unselectField(state, field) {
  const selectedFields = state.get('selectedFields');
  const filterWithRemovedField = (filter) => is(filter.get('field'), field);
  

  if (selectedFields.size === 1) {
    return state;
  }

  return state
    .update('filters', (filters) => filters.filterNot(filterWithRemovedField))
    .set('selectedFields', selectedFields.delete(field));
}

function getFilter(field) {
  const {defaultOperator, defaultValue} = field.widget;
  return Map({field, operator: defaultOperator, value: defaultValue});
}

function addFilter(state) {
  return state.update('filters', (filters) => {
    return filters.set(++nextId, getFilter(state.get('selectedFields').first()));
  });
}

function removeFilter(state, filterId) {
  return state.deleteIn(['filters', filterId]);
}

function clearFilters(state) {
  return state.set('filters', emptyFilters);
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SELECT_FIELD:
      return selectField(state, action.field);

    case types.UNSELECT_FIELD:
      return unselectField(state, action.field);

    case types.ADD_FILTER:
      return addFilter(state);

    case types.REMOVE_FILTER:
      return removeFilter(state, action.filterId);

    case types.CLEAR_FILTERS:
      return clearFilters(state);

    default:
      return state;
  }
}
