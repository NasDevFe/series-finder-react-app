import React from 'react';
import Card from './Cards.jsx';  
import Sdata from './Sdata.jsx';

const App = () => (
<>
<h1 className='heading__top'>Best {Sdata.length} Web Series to Bingewatch</h1>
{/* using Map Function */}
{Sdata.map((val) => {                                                
    return(
        <Card
        key = {val.id}
        imgsrc = {val.imgsrc}
        title = {val.title}
        sname = {val.sname}
        link  = {val.link}
        />
    )
})
}
</>
);

export default App;
