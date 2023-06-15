import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myList:{
        personalDetails:[],
        ExperienceDetails: [],
        EducationDetail:[],
        SkillDetails:[]
    }
}

const Slice = createSlice({
    name : "Slices",
    initialState,
    reducers : {
        addPersonal:(state,action) => {
            const id = Math.random() * 100
            let task = {...action.payload,id}
            state.myList.personalDetails.push(task)
        },
        AddEducation:(state, action) => {
            action.payload.map(data => {
                return (state.myList.EducationDetail.push(data))
            })
        },
        AddExperience:(state, action) => {
            action.payload.map(data => {
                return (state.myList.ExperienceDetails.push(data))
            })
        },
        AddSkills:(state, action) => {
            action.payload.forEach(element => {
                if (!state.myList.SkillDetails.includes(element.text)) {
                    state.myList.SkillDetails.push(element.text);
                }
            });
        }
    }
})
export default Slice.reducer
export const {addPersonal, AddEducation, AddExperience, AddSkills} = Slice.actions