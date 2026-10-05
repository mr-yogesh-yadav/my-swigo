import "./Need.css"
import img1 from "../images/bg-image.webp"
import img2 from "../images/bg-image1.webp"
function Need(){
    return(
        <>
        <section className="need">
            <div className="need-main">
                <p className="need-A">Do You Need</p>
                <h3 className="need-B">Do You Need Help To Customization</h3>
                <p className="need-C">After Purchase A Template...</p>
                <p className="need-D">You Will Start Customizing According Your Requirement <br/><span>BUT</span> What If You Don't Know</p>
                <p className="need-E">SOLUTION IS <span>HIRE DexignZone</span></p>
                <p className="need-F">Hire Same Team For <span>Quality Customization</span></p>
                <span className="need-G">In Order To Ensure Your Website Is Live, We Will Customize <br/>The Template According To Your Requirements And Upload It to the Server.</span>
                <div className="need-btn">
                    <button className="btn need-ex"><span>Buy Now</span></button>
                    <button className="btn"><span>Suport</span></button>
                </div>
            </div>
            <img className="need-p" src={img1} alt="img"/>
            <img className="need-s" src={img2} alt="img"/>
        </section>
        </>
    )
}
export default Need