import {
	GET_SOMETHING,
} from './endpoints';

/**
 * Request template.
 */
export const getSomething = async param => {
	console.display('GET_SOMETHING', GET_SOMETHING);
	return null;
	// let res = await fetch(`${GET_SOMETHING}?param=${param}`);
	// return await res.json();
};