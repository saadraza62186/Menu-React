
import './components.css';

function Components({name, url }){
    return(
        <>
        <div id="img-m" className='component'>
            <img src={url} alt="" />
            <div className='para1'>
                <h3>{name}</h3>
                <p className='h3'>Most delicious Item in italy</p>
            
            
            </div>
        </div>
        
        
        
        </>
    )
}
export default Components;