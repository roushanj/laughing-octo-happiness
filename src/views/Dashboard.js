import React from 'react';
import Carousel from '../components/Carousel';

const slide = [
    {
      title: "Model-S",
      price: "$50,000",
      category: "tesla",
      image:
        "https://i.ibb.co/4mgwfp6/model-s.jpg"
    },
    {
      title: "Model-3",
      price: "$60,000",
      category: "tesla",
      image:
      "https://i.ibb.co/t3cgHfP/tesla3.jpg"
    },
    {
       title: "Model-x",
        price: "$70,000",
        category: "tesla",
        image:
        "https://i.ibb.co/PCKR6mm/model-x.jpg"
      },
    {
      title: "BMW X6",
      price: "$100,000",
      category: "bmw",
      image:
        "https://i.ibb.co/5vzfG2z/bmw3.jpg"
    },
    
    {
      title: "BMW series 3",
      price: "$120,000",
      category: "bmw",
      image:
        "https://i.ibb.co/GPXKQb3/bmw2.jpg"
    },

    {
      title: "Audi Q3",
      price: "$110,000",
      category: "audi",
      image:
        "https://i.ibb.co/sFS9QyM/audi3.jpg"
    },
    {
      title: "Audi Q5",
      price: "$150,000",
      category: "audi",
      image:
        "https://i.ibb.co/VQrfn2Y/audi2.jpg"
    },
    {
        title: "Audi Q7",
        price: "$110,000",
        category: "audi",
        image:
          "https://i.ibb.co/KhQ3RSC/audi1.jpg"
    },
     
  ];

export default function Dashboard(props) {
  
    const [newSlides, setNewSlides] = React.useState(slide);
    const [newCat, setCat] = React.useState([]);
    React.useEffect(()=>{
        let category = [];
        slide.map((x, index)=>{category.push(x.category)});
        setCat([...new Set(category)]);
        
    },[])
    const handleSelect = (e) =>{
        let newSlider = [];
        newCat.map((y, index)=>{
            if(e.target.value === y){
                slide.map((x, index2)=>{return x.category === y && newSlider.push(x) });
                setNewSlides(newSlider);
            }

            if (e.target.value === "all") {
                console.log(e.target.value)
                setNewSlides(slide);
            }
        });
       
        console.log(newSlider)
     
       
      }

    const renderCarousel = newSlides.map((x, index)=>{
        if (newSlides.length ===  index+1 ) {
            return <Carousel slides={newSlides} key={index} />
        } 
    });

    const categoryOption = newCat.map((x, index)=><option value={x} key={index}>{x}</option>);


    return(
        <div>
            <select className="select-selected" onChange={handleSelect}>
                <option defaultChecked>--Select Brand--</option>
                <option value="all">All</option>
                {categoryOption}
            </select> 
            {renderCarousel}
        </div>
    );
}