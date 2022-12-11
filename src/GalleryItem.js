function GalleryItem({item, _class}){
    return (
        <div className={_class}>
            <h2>{item["name"]}</h2>
            <h6>{item["color"]}</h6>
            <img src={item["img"]}></img>
            <div className="price__item">
                <div>{"$"+item["price"]}</div>
                <div className="button-price__item">ADD TO CART</div>
            </div>
        </div> 
    )
}

export default GalleryItem;