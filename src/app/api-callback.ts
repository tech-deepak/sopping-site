export module ApiCallback {
	export const ADD_TO_CART_POST = '/api/Orders/AddToCart';
	export const GET_CART_GET = '/api/Orders/GetCart';
	export const EDIT_CART_PUT = '/api/Orders/EditCart/:id';
	export const EDIT_CART_POST = '/api/Orders/MakeOrder';
	export const ORDER_GET = '/api/Orders/Orders';

	export const ALL_PRODUCT_GET = '/api/product';
	export const PRODUCT_POST = '/api/product';
	export const PRODUCT_BY_CATEGORY_GET = '/api/product/category/:catId';
	export const PRODUCT_SEARCH_GET = '/api/product/search/:query';

	export const CATEGORY_GET = '/api/product/categories';
	export const PRODUCT_GET = '/api/product/:id';
	export const PRODUCT_PUT = '/api/product/:id';
	export const PRODUCT_POT = '/api/product/:id';

	export const SING_UP = '/api/users/signup';
	export const LOGIN = '/api/users/login';
	export const LOGIN_ADMIN = '/api/users/adminlogin';



}
