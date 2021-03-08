import React from "react";


const Search = (props) => {
    return (
      <div className = "container" >
        <div className = "row" >
        <section className = "col s4 offset-s4" >
            < form action = ""   onSubmit = { props.handleSubmit } >
                  <div className = "input-fields" >
                      <input placeholder = "search movie" type = "text" onChange = { props.handleChange }/>
                      <a className = "waves-effect waves-light btn-large"    onClick = { props.handleClick } > search </a>
                  </div>
                </form>
              </section>
        
            </div>
         </div>
    );
};

export default Search;
