import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { categories } from '../../constants/categories';

const Home = () => {
    return (
        <>
            <div>
                <Navbar type={categories.HOME} />
            </div>
        </>
    );
}

export default Home;