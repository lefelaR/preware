import React from 'react';

const Pagination =(props)=>{

    const pageLinks = []

    for (let index  = 1; index < props.pages + 1; index++) {
        let active = props.currentPage === index ? 'active': '';
        pageLinks.push(<li className={`wave-effect ${active}`} key={index} onClick={()=> props.nextPage(index)}> <a href="#">{index}</a></li>)
    }

    return(
        <div className="container">
            <div className="row">
                 <ul className="pagination">
                     {props.currentPage > 1 ? <li className={`wave-effect `} onClick={()=> props.nextPage(props.currentPage-1)}> <a href="#" className="waves-effect waves-light btn">Prev</a></li> :'' }
                     {pageLinks}
                     {props.currentPage +1 > 1 ? <li className={`wave-effect `} onClick={()=> props.nextPage(props.currentPage+1)}> <a href="#" className="waves-effect waves-light btn">Next</a></li> :'' }
                 </ul>
            </div>
        </div>
    )
}


export default Pagination ;