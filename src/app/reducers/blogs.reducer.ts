export function blogsReducer (state = [], action) : any {
    switch (action.type) {
         case 'LOAD_SUCCESS':
          return action.payload;
         default:
            return state;
    }
};