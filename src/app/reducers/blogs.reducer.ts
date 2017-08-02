export function blogsReducer (state = [], action) : any {
  console.log(action.type);
    switch (action.type) {
         case 'REQUEST_BLOGS':
		 	return action.payload;
         default:
            return state;
    }
};