/**
 * @author Thiago Brezinski
 *
 * Estado inicial do reducer, se ainda não houver nenhum valor deste reducer na store.
 */
export const INITIAL_STATE = {
	data: [],
	loading: false,
	error: false
};

/**
 * @author Thiago Brezinski
 *
 * Estado inicial do reducer de navegação, se ainda não houver nenhum valor dele na store.
 */
export const NAVIGATION_INITIAL_STATE = {
  data: 'Tab2',
};