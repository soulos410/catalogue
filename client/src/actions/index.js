export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool,
  };
}
export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool,
  };
}
export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items,
  };
}

export function showNextItems(currentPage) {
  return {
    type: 'SHOW_NEXT_ITEMS',
    currentPage,
  };
}

export function itemsFetchData(url, page = 0, properties = '') {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    const requestUrlRoute = `${url}?page=${page}${properties}`;
    fetch(requestUrlRoute)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
