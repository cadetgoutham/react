import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myList: {
        personalDetails: [],
        ExperienceDetails: [],
        EducationDetail: [],
        SkillDetails: []
    }
};

const Slice = createSlice({
    name: "Slices",
    initialState,
    reducers: {
        addPersonal: (state, action) => {
            const id = Math.random() * 100;
            let task = { ...action.payload, id };
            state.myList.personalDetails = [task]; // Only one personal detail
        },
        AddEducation: (state, action) => {
            state.myList.EducationDetail = action.payload; // Replace instead of push
        },
        AddExperience: (state, action) => {
            state.myList.ExperienceDetails = action.payload; // Replace instead of push
        },
        AddSkills: (state, action) => {
            // Extract text from skill objects
            state.myList.SkillDetails = action.payload.map(skill => skill.text);
        },
        clearAll: (state) => {
            state.myList = {
                personalDetails: [],
                ExperienceDetails: [],
                EducationDetail: [],
                SkillDetails: []
            };
        }
    }
});

export default Slice.reducer;
export const { addPersonal, AddEducation, AddExperience, AddSkills, clearAll } = Slice.actions;