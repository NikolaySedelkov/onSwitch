import GalleryItem from './GalleryItem.js';
function Gallery({data, _class}){
    return (    
        <div className={"conteiner__"+_class+"s"}>
        {
            data.map(el => <GalleryItem key={el["img"]} item={el} _class={_class}/>)
        }
        </div>
    );
}
export default Gallery;