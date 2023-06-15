import React  from 'react'
import { Languages } from './Languages';
import { WithContext as ReactTags } from 'react-tag-input';
import { AddSkills } from './Slice/ReduxSlicer';
import { useDispatch } from 'react-redux';

const suggestions = Languages.map((language) => {
    return {
      id: language,
      text: language,
    };
  });
  
const KeyCodes = {
enter: 13,
};

const delimiters = [KeyCodes.enter];

export default function Skills() {
    const [tags, setTags] = React.useState([]);
    const dispatch = useDispatch()
    

    const handleDelete = (i) => {
      setTags(tags.filter((tag, index) => index !== i));
    };
  
    const handleAddition = (tag) => {
        setTags((prevTags)=>[...prevTags,tag])
    };
  
    const handleDrag = (tag, currPos, newPos) => {
      const newTags = tags.slice(); 
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
      setTags(newTags);
    };
    const HandleSave = () => {
        dispatch(AddSkills(tags))
    }
  
    return (
        <div style={{ display: 'block', width: 700, margin: "0 auto"}}>
            <h8>Skills</h8>
          <ReactTags
            tags={tags}
            suggestions={suggestions}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            inputFieldPosition="bottom"
            autocomplete
            editable
            placeholder='Enter Skills'
            name='Skills'
          /><br/>
          <input type='button' className='btn btn-success' value={"Save"} onClick={HandleSave}/>
        </div>
    );
}
