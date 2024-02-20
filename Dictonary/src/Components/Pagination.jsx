
const Pagination = ({currentPage, totalPages, setCurrentPage}) => {

  console.log(totalPages);

  return (
    <div>
      <button disabled={currentPage === 1} onClick={()=>setCurrentPage(currentPage -1)}>Prev</button>
        {new Array(totalPages).fill(0).map((_, index)=>{
            return(
                <button key={index} onClick={()=> setCurrentPage(index + 1)}>{index + 1}</button>
            )
        })}
      <button disabled={currentPage === totalPages} onClick={()=>setCurrentPage(currentPage +1)}>Next</button>

    </div>
  )
}

export default Pagination