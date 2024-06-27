import {BookState} from "react";

function BookSearch(props) {

    const handleChange = (evt) => {
        props.search(evt.target.value);
    }

    return (
        <>
            <input className="form-control" type="text" onChange={handleChange} />
        </>
    )
}

export default Search;