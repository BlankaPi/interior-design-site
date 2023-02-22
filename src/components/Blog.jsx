import React, { useState, useEffect } from 'react';
import SectionTitle from "./SectionTitle"
import Article from './Article';
import * as RiIcons from "react-icons/ri";

const Blog = () => {

    const [allArticles, setAllarticles] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const getAllArticles = async () => {
            try {
                const response = await fetch("https://63f4c6232213ed989c4a222e.mockapi.io/blog");
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let data = await response.json();
                setAllarticles(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setAllarticles(null);
            } finally {
                setLoading(false);
            }
        }
        getAllArticles();
    }, []);

    const prevArticleHndler = () => {
        setIndex(prev => prev - 3);
        if(index <= 0) {
            setIndex(allArticles.length - 3);
        }
    }

    const nextArticleHndler = () => {
        setIndex(prev => prev + 3);
        if(index >= allArticles.length - 3) {
            setIndex(0);
        }
    }

    return (
        <section className='container'>
            <SectionTitle
                header="Articles & News"
                text="It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points."
            />
            <div className='grid'>
                <Article {...allArticles[index]} />
                <Article {...allArticles[index + 1]} />
                <Article {...allArticles[index + 2]} />
            </div>
            <div className='buttons'>
                <button className='btn-circle' onClick={prevArticleHndler}>
                    <RiIcons.RiArrowLeftSLine />
                </button>
                <button className='btn-circle'>
                    <RiIcons.RiArrowRightSLine onClick={nextArticleHndler}/>
                </button>
            </div>
        </section>
    )
}

export default Blog