import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getreserv=createAsyncThunk('/getreserv',async()=>{
    try {
        let resultat= await axios.get('http://localhost:5000/bus/all')
        return  resultat;
    } catch (error) {
        console.log(error)
    }
})
export const addreserv=createAsyncThunk('/addreserv',async(newreserv)=>{
    try{
        let resultat= await axios.post('http://localhost:5000/bus/add',newreserv)
        return  resultat;   

    }catch (error) {
        console.log(error)
    }
})
export const deletereserv=createAsyncThunk('/deletereserv',async(id)=>{
    try{
        let resultat= await axios.delete(`http://localhost:5000/bus/${id}`)
        return  resultat;   

    }catch (error) {
        console.log(error)
    }
})
export const updatereserv=createAsyncThunk('/updatereserv',async(id,upreserv)=>{
    try{
        let resultat= await axios.put(`http://localhost:5000/bus/${id}`,upreserv)
        return  resultat;   

    }catch (error) {
        console.log(error)
    }
})

export const reserve=createAsyncThunk('/reserve',async({id,reserve})=>{
  try{
      let resultat= await axios.put(`http://localhost:5000/bus/reserve/${id}`,reserve)
      return  resultat;   

  }catch (error) {
      console.log(error)
  }
})


const initialState = {
  reserv:null,
  status:null
}
export const reservSlice = createSlice({
  name: 'reserv',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get
      .addCase(getreserv.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getreserv.fulfilled, (state, action) => {
        state.status = "success";
        state.reserv = action.payload?.data?.voicilist;
      })
      .addCase(getreserv.rejected, (state) => {
        state.status = "fail";
      })
    //   add
            .addCase(addreserv.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addreserv.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(addreserv.rejected, (state) => {
        state.status = "fail";
      })
    //   delete
      .addCase(deletereserv.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deletereserv.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(deletereserv.rejected, (state) => {
        state.status = "fail";
      })
       //   update
       .addCase(updatereserv.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updatereserv.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(updatereserv.rejected, (state) => {
        state.status = "fail";
      })
         //   reservation
         .addCase(reserve.pending, (state) => {
          state.status = "pending";
        })
        .addCase(reserve.fulfilled, (state) => {
          state.status = "success";
        })
        .addCase(reserve.rejected, (state) => {
          state.status = "fail";
        })
}
})

// Action creators are generated for each case reducer function
export const {} = reservSlice.actions

export default reservSlice.reducer