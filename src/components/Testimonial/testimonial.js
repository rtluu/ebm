import React, { useState, useEffect, useRef } from "react";
import "./testimonial.scss"
import QuoteImage from "./quoteImage"

const Testimonial = () => {
    const quotes = {
        0: {
            number: 1,
            client: "- Abigail, Bride",
            quote:
                "\"Kristina is a phenomenal event planner! She ensured that our wedding day was everything we envisioned and dreamed for. She was both intentional and personal with her work and planned with grace and diligence.\"",
        },
        1: {
            number: 2,
            client: "- Sweet Client, Acme Inc.",
            quote:
                "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum.\"",
        },
        2: {
            number: 3,
            client: "- Dope Client, Acme LLC",
            quote:
                "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum. Interdum nunc arcu interdum at adipiscing pellentesque.\"",
        },
        3: {
            number: 4,
            client: "- Cool Client, Acme LTD",
            quote:
                "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum.\"",
        },
    }


    function Carousel() {
        const [current, setCurrent] = useState(quotes[0])

        useInterval(() => {
            if (current.number === 1) {
                setCurrent(quotes[1]);
            } else if (current.number === 2) {
                setCurrent(quotes[2]);
            } else if (current.number === 3) {
                setCurrent(quotes[3]);
            } else if (current.number === 4) {
                setCurrent(quotes[0]);
            }
        }, 7000);

        return (
            <div className="testimonial-inner">
                <QuoteImage />
                <div className="quote-holder">
                    <h4>{current.quote}</h4>
                </div>
                <p className="client-name">{current.client}</p>
            </div>
        )
    }

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest function.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }



    return (
        <div className="testimonial-block">
            <Carousel />
        </div>
    )
}

export default Testimonial
