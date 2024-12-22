const { createSlice, nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit");


const initialState = {
    ApiUsers: [],
    users: localStorage.getItem("stateusers") == null || localStorage.getItem("stateusers") == undefined ? [] : JSON.parse(localStorage.getItem("stateusers"))
};



//It Is Action 
//User In Etra reduce for featch api data
export const fetchApiUserFromApi = createAsyncThunk("fetchApiUser", async () => {
   
    const result = await fetch("https://jsonplaceholder.typicode.com/users")

    return result.json();

})


const Slice = createSlice({
    name: "addUserSlice",
    initialState,


    reducers: {


        AddUsers: (state, action) => {

            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
            let stateusers = JSON.stringify(current(state.users));
            localStorage.setItem("stateusers", stateusers)
        },
        RemoveUser: (state, action) => {
            const userData = state.users.filter((Currentuser) => {
                return Currentuser.id !== action.payload
            })
            state.users = userData;
           
            // Convert users to a string and save it in localStorage
            let dada = JSON.stringify(userData);

            // Save it in localStorage
            localStorage.setItem("stateusers", dada);
        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchApiUserFromApi.fulfilled, (state, action) => {
           
            state.isloading = false,
                state.ApiUsers = action.payload

        })

    }
})


export const { AddUsers, RemoveUser } = Slice.actions;
export default Slice.reducer;