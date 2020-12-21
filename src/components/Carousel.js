import React from 'react';  

function useTilt(active) {
    const ref = React.useRef(null);
  
    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }
  
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };
  
      let el = ref.current;
  
      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;
  
        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };
  
      el.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);
  
    return ref;
  }


  function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
  
    return (
      <div
        ref={ref}
        className="card"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
        }}
      >
      
        <div
          className="cardContent"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        >
          <div className="cardContentInner">
            <h2 className="cardTitle">{slide.title}</h2>
            <h3 className="cardSubtitle">{slide.price}</h3>
            <p className="cardDescription">{slide.category}</p>
          </div>
        </div>
      </div>
    );
  }

 
export default function Carousel(props) {
    const [slides,addSlides] = React.useState(props.slides);
    const initialState = {
        slideIndex: 0
      };
    const slidesReducer = (state, event) => {
      if (event.type === "NEXT") {
        return {
          ...state,
          slideIndex: (state.slideIndex + 1) % slides.length
        };
      }
      if (event.type === "PREV") {
        return {
          ...state,
          slideIndex:
            state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
      }
    };

    const [state, dispatch] = React.useReducer(slidesReducer, initialState);
    return  (
        <div className="cards">
          <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
    
          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}
          <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
        </div>
      );
}
    