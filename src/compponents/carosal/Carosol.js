import './Carosol.css';
function Carosol()
{
    return(
      <div style={{display:"flex",width:"100%",height:"600px",justifyContent:"center",alignItems:"center",backgroundColor:" rgb(39, 39, 87)"}}>
<div id="carouselExample" class="carousel slide" style={{border:"solid red",borderRadius:"30px"}} >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/ipl2023auctionretentionliveupdates-sixteen_nine.jpg?VersionId=Rs6RBoPcN3vflMx0l8tk3Xh24o2qWtNR" height={500} width={1500} style={{borderRadius:"30px"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.35OlisckjU81eLVcwIT8kAHaFj?w=1200&h=900&rs=1&pid=ImgDetMain" height={500} width={1500} style={{borderRadius:"30px"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://drop.ndtv.com/albums/SPORTS/iplfinal9872346/_md_0831.jpg" height={500} width={1500} style={{borderRadius:"30px"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.2w1HU-TKwDvP7-1XFMSI3gAAAA?rs=1&pid=ImgDetMain" height={500} width={1500} style={{borderRadius:"30px"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/05/13/Pictures/ipl-final_5d36ec4e-7580-11e9-b041-b8edd22396b2.jpg" height={500} width={1500} style={{borderRadius:"30px"}} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

    )
}
export default Carosol;