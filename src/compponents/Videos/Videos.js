import './Video.css';
function Videos(){
    return(
        <div>
           <div style={{display:"flex",flexDirection:"row",backgroundColor:"rgb(43, 28, 112)",color:"white"}}><h1 style={{paddingRight:"40px",margin:" 0px 0px"}}>Latest News</h1> <button className='btn btn-outline-light'>See More</button></div> 
            <div id="vid">
                <div id="bx1"><img src="https://assets.iplt20.com/bcci/articles/1712425565_Buttler%20innings.jpeg" height={170} width={294} style={{borderRadius:"10px"}} alt="a"/><br/><h3>TATA IPL 2024 Match 19 , RR Vs RCB - Match Report</h3><hr/><p>06 Apr, 2024</p></div>
                <div id="bx2"><img src="https://assets.iplt20.com/bcci/articles/1712338207_Bhuvneshwar%20wicket.jpeg" height={170} width={294} style={{borderRadius:"10px"}} alt="a"/><br/><h3>TATA IPL 2024 Match 18 , SRH Vs CSK - Match Report</h3><hr/><p>05 Apr, 2024</p></div>
                <div id="bx3"><img src="https://assets.iplt20.com/bcci/articles/1712254014_Shashank%20winning.jpeg" height={170} width={294} style={{borderRadius:"10px"}} alt="a"/><br/><h3>TATA IPL 2024 Match 17 , GT Vs PBKS - Match Report</h3><hr/><p>04 Apr, 2024</p></div>
                <div id="bx4"><img src="https://assets.iplt20.com/bcci/articles/1712228087__AI_7546.jpg" height={170} width={294} style={{borderRadius:"10px"}} alt="a"/><br/><h3>Code Of Conduct Breach - Match 16 - DC Vs LSG</h3><hr/><p>03 Apr, 2024</p></div>
            </div>
        </div>
    )
}
export default Videos;