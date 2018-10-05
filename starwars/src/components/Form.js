import React from 'react'

const Form = props => {
    return (
        <form className="form">
            <input 
                type="text"
                placeholder="Enter Character Name (case sensitive)"
                onChange={props.inputChange}
                name="searchedCharacter"
                value={props.searchedCharacter}
                className="input"
            />

            <div className="gender">
				<label 
                    for="male">
                Male </label>
				<input 
                    onClick={props.displayMale}
                    type="radio" 
                    name="gender" 
                    id="male"
                    value="MALE" 
                />
		
				<label 
                    for="female">
                Female </label>
				<input 
                    onClick={props.displayFemale}
                    type="radio" 
                    name="gender" 
                    id="female" 
                    value="FEMALE" 
                />
	
				<label 
                    for="other">
                Other </label>
				<input 
                    onClick={props.displayOtherGender}
                    type="radio" 
                    name="gender" 
                    id="other" 
                    value="OTHER" 
                    required
                />
			</div>

            <button
                onClick={props.displaySearchedCharacter}
                type="submit"
                className="button"
            >Search Character</button>

            <button
                onClick={props.reloadPage} 
                className="button"  
            >Reload Page</button>

            <p>(reload page after every search)</p>
        </form>
    )
}

export default Form